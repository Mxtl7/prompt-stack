# Prompts for Law Firm Marketing: A Working Playbook for Small Firms

*Keyword: prompts for law firm marketing · 11 min read*

Your firm needs content: an intake page that converts, a blog that ranks locally, a newsletter clients open. But you bill by the hour, and writing is not where those hours belong. That is why small firms reach for prompts for law firm marketing to draft the first pass, then hand it to an attorney for the call software cannot make.

The default result is discouraging. Ask a chatbot for copy and you get the sentence every competitor already publishes: "we are committed to providing exceptional legal services." Paste in a real client scenario to sharpen it and you have to ask whether that information is privileged. Then your state bar's advertising rules remind you that every claim is a potential disciplinary matter, and the draft goes into a folder called "later." The fix is not a smarter AI; it is a better instruction — one that carries your voice, your jurisdiction, your intake stage, and your guardrails.

## Why Off-the-Shelf AI Prompts for Law Firms Produce Look-Alike Copy

### The undifferentiated voice problem

Generic tools optimize for the average. A personal-injury practice and a trusts-and-estates practice come back with the same rhythm and vocabulary — "aggressive advocacy" for one, "compassionate guidance" for the other, neither written by anyone who has met your clientele. When three firms in your county publish paragraphs that swap out cleanly, the reader learns nothing and clicks nothing.

### Unsupported claims creep in by default

Ask for "compelling" copy and the model reaches for superlatives: best, top-rated, guaranteed results. ABA Model Rule 7.1 forbids false or misleading communications about a lawyer's services, and a claim you cannot substantiate is misleading even when you believe it. State bars implement this differently, but you must be able to back up what you print — and a bare prompt never tells the model to avoid outcome promises.

### The confidentiality trap in a blank chat box

The most common mistake is pasting real matter details into a chat window to make copy "specific" — a client's injury date, an employer's name, the facts of a divorce. That is a disclosure to a third party and implicates your duty of confidentiality under ABA Model Rule 1.6; the ABA's 2024 guidance on generative AI reinforced that lawyers must weigh confidentiality before feeding client information into these systems. Prompts for law firm marketing should call for realistic-but-invented scenarios instead.

## What Good Prompts for Law Firm Marketing Actually Contain

A prompt that works is closer to a brief than a wish. It has six parts, and skipping any one is why the output comes back generic.

### Role and system instruction

Tell the tool who it is. "You are a legal marketing writer for a two-attorney Ohio firm who never promises outcomes" sets a bar the rest of the prompt must meet. Without a role, the model writes for everyone.

### Context you feed in

This is where the value lives: practice area, jurisdiction, the client you want, and the intake question that client is trying to answer. "A restaurant owner facing a wage-and-hour audit in Texas" produces sharper copy than "a business client."

### Constraints and output spec

State the deliverable precisely — headings, length, FAQ count, call-to-action. Constraints turn a vague pile of prose into something you can paste into a WordPress page.

### Parameters and review flags

Use bracketed placeholders you can swap per campaign — [PRACTICE AREA], [JURISDICTION], [TONE] — and end every prompt with flags telling the human what to check. A [VERIFY] flag for statutes plus a [CONFIRM] flag for claim language turn review into a checklist.

## Where Marketing Prompts for Law Firms Earn Their Keep

The same handful of prompts for law firm marketing covers your whole calendar once you build them right.

### Practice-area landing pages

One prompt produces the title, headings, and FAQ that match intent for queries like "child custody attorney near me." This is the highest-impact use, because the page that captures intake is the page that pays.

### Intake and FAQ pages

The questions your receptionist answers all day — "what does a consultation cost," "how long will this take" — become a structured FAQ that filters your pipeline and cuts dead-end calls.

### The monthly editorial calendar

Ask for twelve blog topics mapped to the questions clients ask at each funnel stage, not twelve generic "five tips" posts you will never write.

### Local SEO and Google Business Profile posts

Short, jurisdiction-specific updates for the map listing, where steady activity still moves visibility for "near me" searches.

### Email nurture for leads that went cold

A five-message sequence for people who called in January and hired nobody, each offering one useful next step instead of a hard pitch.

### Client-alert and legal-update newsletters

When a filing rule or deadline in your jurisdiction changes, a prompt turns a dry statutory update into a plain-language alert past clients will read.

### Referral-relationship follow-ups

Realtors, financial advisors, and accountants who send you work appreciate a short, specific note, not a mass mailer. A prompt keeps those relationships warm without eating an afternoon.

## The Free Prompt: A Practice-Area Landing Page + FAQ Brief Generator

Copy this into your AI tool of choice. It asks for a brief, not finished copy, so an attorney reviews a blueprint before anyone drafts the page.

```
System instruction:
You are a senior legal marketing writer for a small US law firm. You write in the firm's own voice, you never promise an outcome, and you flag anything a reviewing attorney must verify. Never invent statutes, deadlines, case results, award amounts, or client facts.

Context:
Firm: [FIRM NAME], a [FIRM SIZE]-attorney firm serving [GEOGRAPHY].
Practice area: [PRACTICE AREA]
Jurisdiction: [JURISDICTION]
Target client: [TARGET CLIENT] dealing with [CASE TYPE].
Tone: [TONE] (default: plain-spoken, confident, no hype)
Defensible differentiators: [DIFFERENTIATORS]

Output spec:
Return a content brief, not finished copy. Use markdown with these sections:
1. Page title (under 60 characters) and a meta description (150-160 characters).
2. One-sentence promise of the page, stated with no outcome guarantee.
3. An H1 plus 6-10 H2/H3 headings, each with a one-line note on what it covers.
4. An FAQ block: 5 questions a real [TARGET CLIENT] would type, each answered in 60-120 words.
5. A three-point call-to-action that routes the reader to intake.
Length: 600-900 words for the brief, or [WORD COUNT] if a longer brief is requested.
Tone: [TONE]. Do not draft the final page; this is the blueprint the attorney approves first.

Parameters:
[PRACTICE AREA] [JURISDICTION] [TARGET CLIENT] [CASE TYPE] [PRIMARY KEYWORD] [TONE] [WORD COUNT] [GEOGRAPHY] [DIFFERENTIATORS]

Flags:
[VERIFY] every statute, filing deadline, court name, and procedural step against the current [JURISDICTION] rule before it reaches the page.
[VERIFY] that no heading or sentence implies a guaranteed result, a specific recovery, or a success rate.
[CONFIRM] the copy contains no use of "specialist" or "expert" unless the attorney holds the relevant board certification in [JURISDICTION].
[CONFIRM] no client names, matter details, or privileged information appear in the input or the output.
[CONFIRM] the primary keyword appears in the title, one H2, and the first 100 words, used naturally and not stuffed.
```

That single prompt covers the page and its FAQ. For the rest of the month's assets, built with the same placeholders and flags, [a library of ready-to-use marketing prompts](https://mxtl7.github.io/prompt-stack/) is where I point most small firms.

## Guardrails Every Law Firm Prompt Needs

The prompt is the easy half. The rules keep your bar admission intact.

### Attorney review before publishing

Every AI-assisted piece gets read by a licensed attorney before it goes live — even a five-line Google Business Profile post. Review is fast when the draft is a brief, because you are checking facts and claims, not rewriting sentences.

### ABA Model Rule 7.1 and your state's version

Rule 7.1 bans false or misleading advertising, and most state bars build their own specifics on top. Two traps recur: unverifiable superlatives ("the best DUI lawyer in the county") and the word "specialist," which in several states may only be used with a recognized certification. Your prompt flags both; a human still decides what ships.

### Privilege and the third-party tool

Treat the chat window like any outside vendor. Do not paste client matter details to make a draft feel real; use invented scenarios. If a task truly needs client facts, that is a call to your malpractice carrier and your bar's ethics hotline, not a copywriting decision.

### The sign-off record

Keep a simple log: draft date, prompt used, reviewing attorney, publish date. If a claim is ever questioned, a record that an attorney reviewed and approved the work beats any disclaimer footnote.

## Turning One Prompt Into a Monthly Content Pipeline

A prompt is not a one-off; it is a system you run on a schedule. Here is the loop for a firm with no dedicated marketing hire:

1. **Day 1 — plan.** Run the editorial-calendar prompt for twelve topics mapped to your intake stages, and pick three you can support with real authority.
2. **Day 2-3 — brief.** Run the landing-page prompt once per topic. You now hold three briefs with headings and FAQs ready for review.
3. **Day 4 — review.** The attorney reads each brief, corrects any claim, deadline, or court name, and initials the sign-off log.
4. **Day 5-8 — draft and publish.** Turn each approved brief into the final page or post, then schedule the Google Business Profile and email pieces alongside it.
5. **Day 9 — repurpose.** Slice each approved piece into one client-alert newsletter, two social posts, and one referral follow-up.

Run that cycle once and you have a month of assets without a blank-page afternoon. The [template pack built for small firms](https://mxtl7.github.io/prompt-stack/) carries the same placeholders and flags across every asset type, so you are swapping [PRACTICE AREA] and [JURISDICTION], not rewriting instructions from scratch.

## FAQ

### Are AI-written legal marketing materials allowed by bar rules?

The tools are not banned, but the rules governing your advertising still apply to anything you publish, however it was drafted. ABA Model Rule 7.1 and your state's version require that communications not be false or misleading, and Rule 8.4(c) covers dishonesty. AI is a drafting aid, not a shield: you remain responsible for every claim. It is fine when a licensed attorney reviews the facts and removes anything the firm cannot substantiate.

### How do I stop our AI copy from sounding generic?

Feed it what generic output lacks: your role, your jurisdiction, your target client, and your differentiators. "We are a personal-injury firm" produces filler; "we represent rideshare drivers injured in Dallas and answer calls nights and weekends" produces copy only your firm could publish. A context block plus a constraint against superlatives beats any generic request. Then edit the flat sentences the model still writes.

### Can I paste client details into a chatbot?

No — not without treating it as a disclosure to a third party and checking confidentiality duties under ABA Model Rule 1.6 first. Build drafts from invented, representative scenarios that illustrate the practice area without identifying a real matter. If a task seems impossible without real facts, stop and raise it with your bar's ethics line or malpractice carrier. No blog post is worth a confidentiality problem.

### How many prompts do I need to run a full month of content?

Fewer than you think. One well-built brief generator handles landing pages, blog posts, and FAQ blocks because they share a structure. Add a second prompt for the calendar and repurposing, and you can run a month — three to nine pieces plus newsletters and social posts — off two or three prompts with different parameters. The work is in the input, not in a drawer full of prompts.

### What should I check before publishing AI-assisted content?

Run the same checklist every time. Verify statutes, deadlines, and court names against the current rule. Confirm no outcome guarantee, recovery figure, or success rate survived. Confirm "specialist" appears only with a certification. Confirm no client names or privileged facts slipped in. Confirm the piece reads like your firm wrote it — vary sentence length, cut filler, keep the concrete details. Then have the attorney sign off.

## Next Steps for Your Firm

Start with one prompt, not a library. Pick your highest-value practice area, fill in the placeholders, and run the brief generator on the landing page that earns the most intake. Send the result through attorney review before it goes near your site. Once that cycle works, add the calendar prompt and make it a monthly routine.

You can [grab the template pack](https://mxtl7.github.io/prompt-stack/) to skip the trial and error; it arrives with the placeholders, guardrail flags, and workflow already assembled. The rules will not write themselves, but the blank pages will.
