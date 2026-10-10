# AI Prompts for Cold Email: A Working Stack for People Who Actually Send Cold Email

*Keyword: ai prompts for cold email · 11 min read*

If you send cold email for a living, you already know the problem with generic AI output: it writes emails that sound like every other AI-written email. "I hope this finds you well." "I came across your profile and was impressed." Nobody replies to that. Not because AI can't write cold email — because most people use AI as a text generator instead of a research-and-structure system.

This is a practical guide to AI prompts for cold email, written for cold emailers: agencies running outbound for clients, freelancers hunting their first ten customers, SDRs who have to hit a reply quota, and founders who send their own sequences. No theory about "personalization at scale." Just the structure that separates prompts producing reply-worthy emails from prompts producing slop.

---

## Why Most Cold Email Fails Before the Prompt Even Runs

The failure isn't usually in the writing. It's before the model is even called.

Three patterns show up constantly:

**1. The prompt asks for an email; the work needed is a hypothesis.** A good cold email rests on one guess: *this specific person has this specific problem, and my service removes it.* If the prompt doesn't force the model to state that hypothesis and flag what it doesn't know, the model fills the gap with invention. Invented details get caught. Trust dies on the first line.

**2. There's no output spec.** Ask for "a cold email" and you get a blob: greeting, three paragraphs of throat-clearing, a vague CTA. Ask for "subject line, preheader, body under 90 words, one observable opener, one outcome, one soft CTA, and a list of what you assumed" — and you get something you can actually send, QA, and A/B test.

**3. Personalization is done wrong.** Real personalization is not "I saw you went to university X." It's connecting something observable about the prospect to a problem your service solves. The model is good at the connection. It's bad at knowing which observation is true unless you make it say so.

Fix those three things and the same model that produced slop produces usable drafts. That's the whole point of the prompt structure below.

---

## What a Cold Email Prompt Actually Needs

Every prompt worth keeping in an outbound workflow has four parts. This structure is shared across every system in [a documented prompt stack built for freelancers and outbound senders](https://mxtl7.github.io/prompt-stack/), and it's the reason those prompts get reused instead of one-shot pasted.

### 1. A system instruction (who the model is)

Not "you are a helpful assistant." Something like: *you are a B2B outbound researcher and copywriter writing on behalf of a specific sender, for a specific ICP, under a strict length and tone constraint.* The role sets the boundaries. Boundaries are what stop the model from drifting into marketing voice.

### 2. An output spec (the shape of the deliverable)

Cold email prompts should return a fixed structure. Fixed structure means you can compare variants, drop them into a sequencer, and see which component changed when reply rates move. Unstructured output is untestable output.

### 3. `[Bracket]` parameters (the parts only you know)

Your offer, your ICP, the trigger you're writing around, your proof, your CTA. Brackets force you to make decisions before the model makes them for you — badly — on your behalf.

### 4. `[VERIFY]` and `[CONFIRM]` flags (the anti-hallucination layer)

This is the part almost everyone skips, and it's the most important one for cold email.

- `[VERIFY]` marks any claim about the prospect that the model could not have known from the input you gave it. You check it before sending.
- `[CONFIRM]` marks anything the model had to assume about your offer, pricing, availability, or results.

An email with three `[VERIFY]` flags is an email you fix in ninety seconds. An email with three confident invented details is an email that burns a domain.

---

## The Free Prompt: Cold Outreach Research Engine

Here's a working prompt in the exact style of the pack. It's the outreach system from the base pack (Prompt 01, Client Acquisition & Outreach) — run it once per prospect.

```markdown
## SYSTEM
You are a B2B outbound researcher and copywriter working for [YOUR_NAME],
who sells [YOUR_SERVICE] to [ICP_DESCRIPTOR]. You write plain, specific,
low-friction cold email. You never invent facts about the prospect, never
use marketing adjectives, and never write more than the spec allows.
When you lack information, you flag it instead of filling it in.

## INPUTS
- Prospect: [COMPANY / ROLE / NAME]
- Observed signal (copy-paste the raw text you found): [OBSERVATION_RAW]
- Source of that observation: [SOURCE_URL_OR_CONTEXT]
- My offer in one sentence: [OFFER]
- Proof I can point to: [PROOF]
- The one outcome I want them to want: [DESIRED_OUTCOME]
- CTA type: [SOFT | DIRECT | REFERRAL]
- Sent from: [SENDER_IDENTITY]

## TASK
1. Assume-vs-know pass. List every claim a good email would need about this
   prospect. Mark each: KNOWN (from the observation above) or UNKNOWN.
   Output as a two-column list. Do not proceed past this step silently —
   print the list.
2. Hypothesis. In one sentence, state the problem this prospect most likely
   has, given the observation. Prefix it with "Hypothesis:".
3. Write 3 email variants, each:
   - Subject line (<=6 words, lowercase, no emoji, no clickbait)
   - Preheader (<=40 chars)
   - Body (<=90 words, 1 idea, no bullet lists, no "I hope this finds you")
   - One CTA matching the CTA type above
   Variant A: leads with the observation. Variant B: leads with the outcome.
   Variant C: leads with a question about their current process.
4. Follow-up #1 for Variant A only: <=35 words, adds one new piece of value,
   no guilt, no "just bumping this".

## FLAGS (required in output)
- [VERIFY] any statement about the prospect not directly supported by
  OBSERVATION_RAW or SOURCE. One flag per statement.
- [CONFIRM] any claim about [YOUR_SERVICE], pricing, timeline, results,
  capacity, or availability that you inferred rather than received.
- [RISK] any line that could read as presumptuous, condescending, or spammy,
  with a one-line rewrite suggestion.

## OUTPUT SPEC
Return exactly, in this order, in markdown:
## Assumptions
## Hypothesis
## Variant A / ## Variant B / ## Variant C
## Follow-up #1
## Flags
## Send Checklist
The Send Checklist must be <=5 lines and must include: what to verify before
sending, and which variant to send to a cold list vs. a warm one.

## CONSTRAINTS
- No adjectives that don't carry information ("powerful", "cutting-edge").
- No claims about the prospect's feelings or intent.
- No more than one link, and only if PROOF requires it.
- If OBSERVATION_RAW is empty, stop and say so. Do not fabricate one.
```

That's the whole system. Fill the brackets, run it on one prospect, and read the Assumptions block first — that block is where you learn whether your research was good enough to send anything at all.

---

## How to Run It Without Wasting a Domain

### Step 1 — Feed it raw observation, not summaries

Paste the actual text you found: a job post, a funding announcement, a changelog entry, a LinkedIn "we're hiring" post, a review complaining about a specific tool. Summary input produces summary output. Raw input produces emails that quote something real.

### Step 2 — Read the Assumptions block before the emails

Nine times out of ten, the reason a cold email feels off is that the research was thin. The Assumptions block surfaces that in ten seconds: half the claims come back UNKNOWN, which means your observation didn't carry enough signal. Go get better input instead of asking the model to be more creative.

### Step 3 — Kill every `[VERIFY]`

Open the source. Confirm the claim. If you can't confirm it, delete the sentence — don't soften it. Softened unverified claims ("I believe you might be…") read worse than no claim at all.

### Step 4 — Send one variant to ten people, not ten variants to one

Variant A/B/C exist for testing, not for variety. Pick one per segment, send it, measure replies, then change one component. If you change the subject line and the body at once, you learned nothing.

### Step 5 — Log the `[CONFIRM]` flags

Every `[CONFIRM]` is a gap in your own offer documentation. Fix the gap once in your prompt inputs and it disappears from every future send.

---

## AI Prompts for Cold Email: The Five Failure Modes to Watch

Even with a good prompt, these five show up:

**The "impressed" opener.** "I was impressed by your company's growth." It carries zero information and marks the email as automated. Ban it in the prompt constraints — the variant above does.

**Paragraphs that talk about the sender.** Prospected senders care about their problem, not your process, your stack, or how passionate you are. Keep the sender's identity to a line.

**Multiple CTAs.** "Would love to chat, or feel free to check out this case study, or reply with a time." Each extra ask cuts the response rate. One email, one ask.

**Length creep.** The model will happily write 200 words if you let it. Cap at 90 words in the spec and hold the cap. Long cold emails get skimmed, and skimming is where the CTA dies.

**Fabricated personalization.** A confidently wrong detail is worse than a generic opener. This is exactly what the `[VERIFY]` flag exists for. Treat every unverified prospect claim as a deliverability and reputation risk, not a style issue.

---

## Where Cold Email Prompt Chains Beat Single Prompts

One good prompt writes one decent email. A chain does the rest of the job:

- **Research → angle.** Take the week's observations for a segment and have the model rank which ones suggest the highest-intent problem. You send to the top ones first.
- **Email → follow-up sequence.** Follow-up #1 is in the prompt above. A sequence prompt turns a single email into five touches that each add something new instead of nagging.
- **Reply → objection handling.** Paste the reply and get a structured read of the objection plus a response that holds price without discounting.
- **Send → deliverability hygiene.** Have the model flag subject lines and body phrases likely to trigger spam filters before you send.

That's the argument for systems over snippets: the emails are the visible part, but the connecting prompts are where reply rates actually move. If you want the rest of that path documented rather than assembled from scratch, [browse the full stack here](https://mxtl7.github.io/prompt-stack/) — it covers outreach, negotiation, content, and the delivery side, all in the same bracket-and-flag format as the prompt above.

---

## FAQ

**Do AI prompts for cold email actually improve reply rates?**

The prompt doesn't improve reply rates — the structure it enforces does. Research-backed opening lines, one outcome per email, one CTA, and a hard word cap consistently outperform unconstrained AI drafts. If your prompt doesn't force those four things, it won't move your numbers.

**Will my emails look obviously AI-written?**

Only if you let the model write generic transitions and adjectives. The constraints in the prompt above ban both ("I hope this finds you well", "cutting-edge", empty compliments). Read every draft out loud. If a sentence would embarrass you on a call, cut it.

**What about using AI for the personalization line only?**

That's the highest-leverage used case and the safest one. Let the model generate and fact-check the opening observation, then write the rest yourself. It cuts research time per prospect from minutes to seconds without making the email sound synthetic.

**How many prospects should I run through one prompt?**

One per execution. Batching ten prospects into one call produces averaged, cross-contaminated output — details bleed between rows. Loop the prompt, don't stack the prospects.

**Does it work for non-English markets?**

Yes, if you set the market context in the inputs. Add fields for platform (email vs. WhatsApp), currency, and formality level. Generic prompts produce US-style directness that reads as rude in some markets.

**How do the `[VERIFY]` and `[CONFIRM]` flags differ?**

`[VERIFY]` is about the prospect: something the model asserted that you must check against the source. `[CONFIRM]` is about you: something the model assumed about your offer, pricing, or capacity that you must confirm or correct.

---

## The One Rule Worth Keeping

Every email you send cold is a bet on a hypothesis. The AI's job is to make that hypothesis explicit, write around it, and flag everything it couldn't verify — not to generate text that sounds plausible. Prompts built this way turn a 50-prospect research session into an afternoon instead of three days, and they keep you from sending the kind of email that gets a domain burned.

Start with the free prompt above. Run it on three real prospects this week, read the Assumptions block first, and watch how much of the improvement comes from the research step rather than the sentence-writing. Then decide whether you need [the rest of the workflow documented](https://mxtl7.github.io/prompt-stack/) or just the outreach piece.
