# Prompt Engineering for Client Work: A Working System, Not a One-Liner

*Keyword: prompt engineering for client work · 9 min read*

Client work runs on documents: cold outreach that gets a reply, articles that rank, landing pages that convert, social posts that fill the calendar. Every one of those is a prompt problem, and most freelancers solve it the same losing way — a five-word request followed by twenty minutes of rewriting whatever came back.

This article is the other approach. It shows how a small set of structured prompt systems covers the whole client-delivery path, what each system's output spec looks like, and how to run them so the editing time drops to minutes. Examples are pulled from a published 20-prompt stack so you can see the actual specs, not a paraphrase.

## The rule that separates prompt engineering from prompting

A prompt system has three fixed parts:

1. **A system instruction** that sets the model's role and standards before any content is written.
2. **A structured output spec** — an exact list of deliverables with word counts and counts of items, so the output shape is predictable.
3. **Bracket parameters** (`[niche]`, `[primary keyword]`, `[pain]`) that make the same prompt work across every client and market.

The output spec is the load-bearing part. "Write an article about SEO" gives the model total freedom, which means every run gives you something different to fix. A spec like "outline first, then 1500 words in short paragraphs, then a FAQ with question headings, then meta title + description under 160 characters" gives you the same skeleton every run. Same skeleton means you know exactly where to edit — and where editing isn't needed.

## System 1: The SEO content engine

Client content lives or dies on structure. Prompt 02 in the [Modern Freelancer's AI Prompt Stack](https://mxtl7.github.io/prompt-stack/) runs as an SEO director and produces, in one run:

- an outline with target keywords and search intent (informational vs. commercial),
- the full article in short paragraphs and subheadings, E-E-A-T style, **citing where claims need sources you must verify**,
- a FAQ section with question headings,
- meta title and description under 160 characters.

Two details in that spec do the heavy lifting. First, the outline comes *before* the article — you approve the direction before 1500 words exist, which is where content reviews actually get cheap. Second, the citation instruction: the prompt is forbidden from presenting invented statistics as fact and instead marks where a claim needs a source. For client work, that's not a nicety. A fabricated statistic in a client's blog post is a correction email and a credibility hit; a `[VERIFY]` flag is a 30-second source check on your side.

The system instruction also carries the ban list: no keyword stuffing, no fluff, no absolute medical/legal/financial claims unless you supply them. Client-safe by default.

## System 2: Conversion copy for landing pages and email

Landing page copy has a different failure mode: it doesn't rank or rank poorly, it just doesn't convert, and nobody tells you why. The usual reason is that the copy describes the product instead of the reader's pain.

Prompt 04 runs as a conversion copywriter with a spec that blocks that failure: a hero headline (max 8 words) plus subheadline, 3 benefit bullets each starting with an outcome, a 90-word body, one CTA, and a 3-item objection-handling FAQ. Two constraints matter for client work:

- **One CTA.** Stacked CTAs split the reader's intent. The spec physically prevents three competing buttons.
- **The framing input.** The prompt asks for the reader's biggest pain as a parameter and frames everything around it — and its system instruction bans marketing-speak outright: no "solutions," no "cutting-edge," no "revolutionary."

That ban list is why the output survives client review. Marketing-speak is the first thing a client's marketing lead flags, and the spec removes it at the source instead of in a revision round.

## System 3: Social repurposing from one idea

The hidden cost of client social work is the calendar: five platforms, five native formats, one core idea. Rewriting the same idea by hand for each format is pure overhead.

Prompt 05 takes the core idea and returns platform-native content in one run: 1 LinkedIn post (150–200 words, hook first, takeaway, soft closing question), 3 X threads of 4 tweets each with one idea per tweet, and a 5-slide carousel outline with 3 bullets per slide. The consistency constraint is a parameter — `[voice/tone]` — so every asset sounds like the client's brand, not like the model. And the anti-spam rule is built in: no hashtag spam, max 2 hashtags.

One run replaces an afternoon of format-swapping. Your review time is the only remaining cost, and the fixed output shapes make that review a checklist instead of a rewrite.

## Running the system on a real engagement

A client workflow, end to end:

1. **Brief.** Get the client's niche, the primary keyword, and their reader's biggest pain. Those are the bracket parameters for everything that follows.
2. **Content.** Run the SEO engine with those parameters. Approve the outline. Verify every flagged claim before the article ships. Hand over the article plus the FAQ and meta tags — the spec already produced the package.
3. **Landing page.** Run the copy prompt with the same pain parameter. Check the CTA count (the spec says one). Ship.
4. **Social.** Feed the article's core idea into the repurposing prompt. Schedule the LinkedIn post and threads. Cap stays at 2 hashtags.
5. **Iteration.** When rankings or conversions stall, the parameters — not the prompts — are what you change. The system stays fixed; the inputs carry the new information.

That last point is the actual discipline of prompt engineering for client work: separate the invariant (the prompt structure) from the variable (the client's inputs). Change the variable, keep the invariant, and your outputs stay consistent across every engagement.

## What the output spec buys you

- **Predictable edits.** Same skeleton every run means you know where every block lives.
- **Client-safe defaults.** Citation flags, ban lists, and claim constraints are inside the spec, not in your memory.
- **Parallel work.** Because every prompt produces a fixed package (article + FAQ + meta; hero + bullets + CTA + FAQ), you can run three client deliverables in one sitting without cross-contamination.
- **Faster reviews.** Clients approve outlines and bullets, not 1500-word drafts. The spec front-loads the approval.

## FAQ

**Is this just for agencies?**
No. The specs scale down fine: a solo freelancer running one client's blog uses the same three systems, just with fewer brackets filled per week.

**Does the model stay on-spec?**
Mostly, and the failure is obvious — a missing FAQ section or a 12-word headline is visible in seconds. That visibility is the point of the spec: defects are cheap to catch and cheap to fix.

**How do I handle a client who wants "more creative" copy?**
Change the parameter, not the spec. Loosen the tone input and keep the CTA count, the ban list, and the output shape. You keep the discipline and get the flavor.

**Where do I get these systems?**
The [Modern Freelancer's AI Prompt Stack](https://mxtl7.github.io/prompt-stack/) ships all 20 as plain `.md` files — the SEO engine, conversion copy, social repurposing, plus outreach, negotiation, and the rest of the client path. Every prompt includes its system instruction, exact output spec, and bracket parameters.

---

*Related: [AI prompts for freelancers](/prompt-stack/articles/01-ai-prompts-for-freelancers.md) · [Anti-hallucination prompts: how to stop AI making things up](/prompt-stack/articles/03-anti-hallucination-prompts.md)*
