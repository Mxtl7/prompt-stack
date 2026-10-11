/* ============================================================================
 * exit-intent.js — Exit-intent / abandonment capture popup  (coupon: FIRST10)
 * ---------------------------------------------------------------------------
 * Pure vanilla JS. No dependencies, no build step. Injects its own <style>
 * and DOM, so integrating it is a single <script> tag — nothing else to edit.
 *
 * WHAT IT DOES
 *   - Shows a coupon popup (FIRST10 → $5 off the Base Pack) when a visitor is
 *     about to leave (desktop exit-intent) or after a scroll/time signal on
 *     touch devices.
 *   - Captures the email into the SAME Formspree endpoint the page's existing
 *     capture form already uses, then funnels the visitor into the existing
 *     5-email sequence (which already ends with FIRST10).
 *
 * INTEGRATION (how it hooks into the email capture already built)
 *   The script looks for an existing form#signup on the page and, if it has a
 *   real (non-placeholder) `action`, reuses that endpoint. Otherwise it falls
 *   back to the defaults below. On success it redirects to thank-you.html,
 *   exactly like the inline capture form does.
 *
 * CONFIG — optionally set BEFORE this script loads:
 *   <script>
 *     window.PS_FUNNEL = { formspreeId: 'abcdwxyz', fallbackEmail: 'you@x.com' };
 *   </script>
 *   <script src="js/exit-intent.js" defer></script>
 *
 * QA / testing hooks:
 *   window.PSExitIntent.open()   // force-show
 *   window.PSExitIntent.reset()  // clear frequency cap (localStorage)
 *   ?ps_exit=1  query param      // force-show on load
 * ========================================================================== */
(function () {
  'use strict';

  if (window.__psExitIntentLoaded) return;      // guard: load once
  window.__psExitIntentLoaded = true;

  var PLACEHOLDER = 'YOUR_FORM_ID';

  /* ---- config -------------------------------------------------------- */
  var cfg = {
    endpoint: 'https://formspree.io/f/' + PLACEHOLDER,
    fallbackEmail: 'hello@example.com',
    coupon: 'FIRST10',
    discountText: '$5 off',
    price: '$9.99',
    regularPrice: '$14.99',
    thanksUrl: 'thank-you.html',
    cooldownDays: 7,        // don't re-show for N days after a dismissal
    minSeconds: 8,          // never fire in the first N seconds on the page
    mobileSeconds: 40,      // touch fallback: show after N seconds …
    mobileScrollPct: 50,    // … or once this % of the page is scrolled
    storeKey: 'ps_exit_intent'
  };

  var overrides = window.PS_FUNNEL || {};
  if (overrides.endpoint) cfg.endpoint = overrides.endpoint;
  if (overrides.formspreeId) cfg.endpoint = 'https://formspree.io/f/' + overrides.formspreeId;
  if (overrides.fallbackEmail) cfg.fallbackEmail = overrides.fallbackEmail;
  if (overrides.coupon) cfg.coupon = overrides.coupon;
  if (overrides.thanksUrl) cfg.thanksUrl = overrides.thanksUrl;
  if (typeof overrides.cooldownDays === 'number') cfg.cooldownDays = overrides.cooldownDays;
  if (typeof overrides.minSeconds === 'number') cfg.minSeconds = overrides.minSeconds;

  /* ---- integrate with the page's existing capture form ---------------- */
  try {
    var existing = document.getElementById('signup');
    var act = existing && existing.getAttribute('action');
    if (act && act.indexOf(PLACEHOLDER) === -1 && act.indexOf('http') === 0) {
      cfg.endpoint = act;                       // reuse the wired-up endpoint
    }
  } catch (e) { /* non-fatal */ }

  /* ---- never show on the post-conversion page ------------------------- */
  var path = (location.pathname || '').toLowerCase();
  if (path.indexOf('thank-you') !== -1) return;

  /* ---- frequency cap (localStorage) ----------------------------------- */
  function readState() {
    try { return JSON.parse(localStorage.getItem(cfg.storeKey) || '{}') || {}; }
    catch (e) { return {}; }
  }
  function writeState(s) {
    try { localStorage.setItem(cfg.storeKey, JSON.stringify(s)); } catch (e) {}
  }
  var state = readState();
  if (state.subscribed) return;                 // already opted in
  if (state.dismissedAt && (Date.now() - state.dismissedAt) < cfg.cooldownDays * 864e5) return;

  var force = /(^|[?&])ps_exit=1(&|$)/.test(location.search) || overrides.forceShow === true;

  /* ---- tiny analytics shim -------------------------------------------- */
  function track(event, data) {
    try {
      if (typeof window.psTrack === 'function') return window.psTrack(event, data);
    } catch (e) {}
    try { if (window.dataLayer) window.dataLayer.push({ event: 'ps_' + event, data: data || {} }); } catch (e) {}
    try { if (typeof window.gtag === 'function') window.gtag('event', 'ps_' + event, data || {}); } catch (e) {}
  }

  /* ---- styles --------------------------------------------------------- */
  var CSS = '' +
    '#ps-exit{position:fixed;inset:0;z-index:2147483000;display:none;align-items:center;justify-content:center;padding:20px;' +
      'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}' +
    '#ps-exit.ps-on{display:flex}' +
    '#ps-exit .ps-bd{position:absolute;inset:0;background:rgba(4,6,11,.72);backdrop-filter:blur(4px);animation:ps-fade .2s ease}' +
    '#ps-exit .ps-card{position:relative;z-index:1;width:100%;max-width:460px;background:#131a29;' +
      'border:1px solid #232d42;border-radius:20px;padding:32px 30px 26px;color:#eef2f9;' +
      'box-shadow:0 30px 80px rgba(0,0,0,.6);animation:ps-rise .26s cubic-bezier(.2,.8,.2,1)}' +
    '@keyframes ps-fade{from{opacity:0}to{opacity:1}}' +
    '@keyframes ps-rise{from{opacity:0;transform:translateY(14px) scale(.98)}to{opacity:1;transform:none}}' +
    '@media(prefers-reduced-motion:reduce){#ps-exit .ps-card,#ps-exit .ps-bd{animation:none}}' +
    '#ps-exit .ps-x{position:absolute;top:12px;right:14px;width:32px;height:32px;border-radius:9px;border:1px solid #232d42;' +
      'background:#182136;color:#98a4b8;font-size:1.1rem;line-height:1;cursor:pointer}' +
    '#ps-exit .ps-x:hover{color:#eef2f9;border-color:#3a4763}' +
    '#ps-exit .ps-kicker{display:inline-block;font-family:ui-monospace,Consolas,monospace;font-size:.72rem;letter-spacing:.14em;' +
      'color:#fbbf24;border:1px solid rgba(251,191,36,.4);padding:5px 12px;border-radius:999px;background:rgba(251,191,36,.07);margin-bottom:16px}' +
    '#ps-exit h2{font-size:1.5rem;line-height:1.2;font-weight:800;letter-spacing:-.01em;margin:0 0 10px}' +
    '#ps-exit h2 .ps-g{background:linear-gradient(90deg,#5eead4,#a78bfa);-webkit-background-clip:text;background-clip:text;color:transparent}' +
    '#ps-exit .ps-sub{color:#98a4b8;font-size:.94rem;margin:0 0 18px}' +
    '#ps-exit .ps-sub b{color:#eef2f9}' +
    '#ps-exit .ps-coupon-row{display:flex;align-items:center;gap:10px;margin-bottom:16px}' +
    '#ps-exit .ps-coupon{font-family:ui-monospace,Consolas,monospace;font-weight:800;letter-spacing:.14em;font-size:1.05rem;' +
      'color:#fbbf24;border:1px dashed rgba(251,191,36,.55);background:rgba(251,191,36,.08);padding:9px 16px;border-radius:10px}' +
    '#ps-exit .ps-copy{font:inherit;font-size:.76rem;font-weight:700;color:#5eead4;background:rgba(94,234,212,.08);' +
      'border:1px solid rgba(94,234,212,.3);padding:7px 11px;border-radius:8px;cursor:pointer}' +
    '#ps-exit .ps-copy:hover{background:rgba(94,234,212,.16)}' +
    '#ps-exit .ps-copy.ps-done{color:#0a0d14;background:#5eead4;border-color:#5eead4}' +
    '#ps-exit form{display:flex;gap:9px;flex-wrap:wrap}' +
    '#ps-exit input[type=email]{flex:1 1 200px;background:#0a0d14;border:1px solid #232d42;border-radius:12px;' +
      'padding:13px 15px;color:#eef2f9;font-size:.96rem;font-family:inherit}' +
    '#ps-exit input[type=email]:focus{outline:none;border-color:rgba(94,234,212,.55);box-shadow:0 0 0 3px rgba(94,234,212,.12)}' +
    '#ps-exit button[type=submit]{flex:0 0 auto;background:linear-gradient(90deg,#5eead4,#a78bfa);color:#0a0d14;border:none;' +
      'border-radius:12px;padding:13px 20px;font-weight:800;font-size:.94rem;cursor:pointer;font-family:inherit}' +
    '#ps-exit button[type=submit]:hover{filter:brightness(1.1)}' +
    '#ps-exit button[type=submit]:disabled{opacity:.6;cursor:wait}' +
    '#ps-exit .ps-msg{margin:14px 0 0;font-size:.92rem;font-weight:600;display:none}' +
    '#ps-exit .ps-msg.ps-ok{display:block;color:#5eead4}' +
    '#ps-exit .ps-msg.ps-err{display:block;color:#ffb4a8}' +
    '#ps-exit .ps-note{color:#6b7690;font-size:.8rem;margin:12px 0 0}' +
    '#ps-exit .ps-no{display:block;margin:12px auto 0;background:none;border:none;color:#6b7690;font:inherit;font-size:.84rem;' +
      'text-decoration:underline;cursor:pointer}' +
    '#ps-exit .ps-no:hover{color:#98a4b8}' +
    '@media(max-width:480px){#ps-exit .ps-card{padding:26px 20px 20px}#ps-exit h2{font-size:1.3rem}}';

  /* ---- inject styles + DOM -------------------------------------------- */
  function inject() {
    var style = document.createElement('style');
    style.id = 'ps-exit-style';
    style.appendChild(document.createTextNode(CSS));
    document.head.appendChild(style);

    var wrap = document.createElement('div');
    wrap.id = 'ps-exit';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-modal', 'true');
    wrap.setAttribute('aria-labelledby', 'ps-exit-title');
    wrap.setAttribute('aria-hidden', 'true');
    wrap.innerHTML =
      '<div class="ps-bd" data-ps-close></div>' +
      '<div class="ps-card" role="document">' +
        '<button class="ps-x" type="button" aria-label="Close" data-ps-close>&times;</button>' +
        '<span class="ps-kicker">WAIT \u2014 BEFORE YOU GO</span>' +
        '<h2 id="ps-exit-title">Take the free systems <span class="ps-g">+ $5 off</span></h2>' +
        '<p class="ps-sub">The three complete prompt systems on this site are yours to keep. Leave your email and I\u2019ll also send one new system every week \u2014 <b>plus your code for ' + cfg.discountText + ' the Base Pack.</b></p>' +
        '<div class="ps-coupon-row">' +
          '<span class="ps-coupon" id="ps-exit-coupon">' + cfg.coupon + '</span>' +
          '<button class="ps-copy" type="button" id="ps-exit-copy" data-code="' + cfg.coupon + '">Copy code</button>' +
        '</div>' +
        '<form id="ps-exit-form" novalidate>' +
          '<input type="email" id="ps-exit-email" name="email" required placeholder="you@work-email.com" aria-label="Email address" autocomplete="email">' +
          '<input type="hidden" name="_subject" value="New weekly-prompt subscriber (exit-intent)">' +
          '<input type="hidden" name="source" value="exit-intent pop">' +
          '<input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">' +
          '<button type="submit" id="ps-exit-btn">Send me the code \u2192</button>' +
        '</form>' +
        '<p class="ps-msg" id="ps-exit-msg" role="status" aria-live="polite"></p>' +
        '<p class="ps-note">One email a week. Unsubscribe in one click. First 10 subscribers only.</p>' +
        '<button class="ps-no" type="button" data-ps-close>No thanks, I\u2019ll keep browsing</button>' +
      '</div>';

    document.body.appendChild(wrap);
    return wrap;
  }

  /* ---- open / close ---------------------------------------------------- */
  var overlay = null, opened = false, lastFocus = null;

  function focusables() {
    return overlay.querySelectorAll('button, [href], input:not([type=hidden]), select, textarea, [tabindex]:not([tabindex="-1"])');
  }

  function open() {
    if (opened) return;
    if (!overlay) overlay = inject();
    lastFocus = document.activeElement;
    overlay.classList.add('ps-on');
    overlay.setAttribute('aria-hidden', 'false');
    document.documentElement.style.overflow = 'hidden';
    opened = true;
    var first = document.getElementById('ps-exit-email');
    if (first) { try { first.focus(); } catch (e) {} }
    track('exit_intent_shown');
  }

  function close(persist) {
    if (!overlay) return;
    overlay.classList.remove('ps-on');
    overlay.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
    opened = false;
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) {} }
    if (persist !== false) {
      var s = readState();
      s.dismissedAt = Date.now();
      writeState(s);
      track('exit_intent_dismiss');
    }
  }

  /* ---- wiring (delegated, so it survives re-injection) ----------------- */
  var wired = false;
  function wire() {
    if (wired) return;
    wired = true;
    document.addEventListener('keydown', function (e) {
      if (!opened) return;
      if (e.key === 'Escape' || e.keyCode === 27) { close(true); return; }
      if (e.key === 'Tab') {                                  // basic focus trap
        var f = focusables(); if (!f.length) return;
        var firstEl = f[0], lastEl = f[f.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) { e.preventDefault(); lastEl.focus(); }
        else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); firstEl.focus(); }
      }
    }, false);

    document.addEventListener('click', function (e) {
      var no = e.target.closest && e.target.closest('[data-ps-close]');
      if (no) { close(true); return; }
      var cp = e.target.closest && e.target.closest('#ps-exit-copy');
      if (cp) {
        var code = cp.getAttribute('data-code') || cfg.coupon;
        var done = function () {
          cp.textContent = 'Copied \u2713'; cp.classList.add('ps-done');
          setTimeout(function () { cp.textContent = 'Copy code'; cp.classList.remove('ps-done'); }, 1600);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(code).then(done).catch(function () { legacyCopy(code); done(); });
        } else { legacyCopy(code); done(); }
        track('exit_intent_copy_code', { code: code });
      }
    }, false);

    document.addEventListener('submit', function (e) {
      if (e.target && e.target.id === 'ps-exit-form') { handleSubmit(e); }
    }, false);
  }

  function legacyCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', '');
    ta.style.position = 'absolute'; ta.style.left = '-9999px';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
  }

  function handleSubmit(e) {
    e.preventDefault();
    var emailEl = document.getElementById('ps-exit-email');
    var msg = document.getElementById('ps-exit-msg');
    var btn = document.getElementById('ps-exit-btn');
    var email = (emailEl.value || '').trim();
    function show(kind, text) { msg.className = 'ps-msg ps-' + kind; msg.textContent = text; }

    if (!email || email.indexOf('@') === -1) { show('err', 'Please enter a valid email address.'); return; }

    // Not configured yet → graceful mailto fallback (same behaviour as the page form)
    if (cfg.endpoint.indexOf(PLACEHOLDER) !== -1) {
      var subject = encodeURIComponent('Please add me to the weekly prompt list (code ' + cfg.coupon + ')');
      var body = encodeURIComponent('My email: ' + email + '\n\nSend me one prompt system a week and my ' + cfg.coupon + ' code.');
      window.location.href = 'mailto:' + cfg.fallbackEmail + '?subject=' + subject + '&body=' + body;
      show('ok', 'Opening your email app\u2026 if nothing happens, write to ' + cfg.fallbackEmail);
      track('exit_intent_submit_mailto');
      return;
    }

    btn.disabled = true; btn.textContent = 'Sending\u2026';
    var fd = new FormData();
    fd.append('email', email);
    fd.append('_subject', 'New weekly-prompt subscriber (exit-intent)');
    fd.append('source', 'exit-intent pop');
    fetch(cfg.endpoint, { method: 'POST', headers: { 'Accept': 'application/json' }, body: fd })
      .then(function (r) {
        if (r.ok) {
          var s = readState(); s.subscribed = true; writeState(s);
          show('ok', 'You\u2019re in. Your code is ' + cfg.coupon + ' \u2014 check your inbox.');
          if (emailEl) emailEl.value = '';
          track('exit_intent_submit_ok');
          setTimeout(function () { window.location.href = cfg.thanksUrl; }, 1200);
        } else {
          return r.json().then(function (d) {
            var m = (d && d.errors && d.errors[0] && d.errors[0].message) ? d.errors[0].message : 'Something went wrong. Try again.';
            show('err', m);
          }).catch(function () { show('err', 'Something went wrong. Try again in a moment.'); });
        }
      })
      .catch(function () { show('err', 'Network error. Please try again.'); })
      .finally(function () { btn.disabled = false; btn.textContent = 'Send me the code \u2192'; });
  }

  /* ---- exit-intent triggers ------------------------------------------- */
  var armed = false;
  function arm() { armed = true; }

  function setupDesktop() {
    function onLeave(e) {
      if (!armed) return;
      var to = (e && (e.relatedTarget || e.toElement)) || null;
      if (!to && e && e.clientY <= 0) { open(); }
    }
    document.addEventListener('mouseout', onLeave, false);
    document.addEventListener('mouseleave', onLeave, false);
  }

  function setupTouch() {
    // No exit-intent on touch — use a scroll-depth + time fallback.
    var shownByScroll = false;
    function depthPct() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      if (h <= 0) return 100;
      return Math.min(100, Math.round((window.scrollY || window.pageYOffset) / h * 100));
    }
    window.addEventListener('scroll', function () {
      if (!armed || shownByScroll) return;
      if (depthPct() >= cfg.mobileScrollPct) { shownByScroll = true; open(); }
    }, { passive: true });
    setTimeout(function () { if (armed && !opened) open(); }, cfg.mobileSeconds * 1000);
  }

  function isTouch() {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) ||
           (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
  }

  function start() {
    wire();
    overlay = inject();
    if (force) { arm(); open(); return; }
    setTimeout(arm, cfg.minSeconds * 1000);       // don't fire too early
    if (isTouch()) setupTouch(); else setupDesktop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  /* ---- public QA/test API --------------------------------------------- */
  window.PSExitIntent = {
    open: function () { overlay = overlay || inject(); wire(); open(); },
    close: function () { close(true); },
    reset: function () { try { localStorage.removeItem(cfg.storeKey); } catch (e) {} },
    config: cfg
  };
})();
