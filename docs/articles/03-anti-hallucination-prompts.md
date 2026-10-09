# Anti-Hallucination Prompts: How to Stop ChatGPT Making Things Up

*Keyword: how to stop chatgpt making things up · 9 min read*

ChatGPT makes things up because it's a language model, not a database: it predicts plausible text, and a plausible-looking statistic, price, or quote is exactly as fluent as a real one. You cannot patch the model. You can patch the prompt — and a structured prompt with explicit verification flags cuts hallucinated output far more reliably than asking the model to "please be accurate."

This article shows the verification patterns that work, why they work, and how a published 20-prompt stack builds them into every prompt by default.

## Why "please don't make things up" fails

Asking the model to be accurate is a wish, not a constraint. Wishes compete with the actual instruction ("write 1500 words citing statistics") and lose — the model still needs to fill the section, so it fills it with something fluent. Three things actually work:

1. **A role instruction that includes accuracy standards**, set before any content is written.
2. **An output spec with a place for uncertainty** — a flag, a field, a section — so the model has somewhere to put "I don't know" that isn't an invented fact.
3. **Explicit bans on the specific failure** — invented statistics, invented quotes, invented prices — named one by one.

The second one is the load-bearing part. Hallucination is often a routing problem: the model has no legitimate channel for uncertainty, so uncertainty leaks into the content as fabrication. Give it a channel and the leak stops.

## Pattern 1: The accuracy-bearing system instruction

Every prompt in the [Modern Freelancer's AI Prompt Stack](https://mxtl7.github.io/prompt-stack/) opens with a system instruction that carries accuracy standards, not just a role. Prompt 02 (the SEO content engine):

> You are an SEO content director. You produce rankable, useful content, not fluff. No keyword stuffing, no invented statistics.

The accuracy clause sits in the same instruction as the role, so it applies from the first token, not after the model has already decided how the article will sound. Prompt 04 (conversion copy) does the same with its own failure mode: the copywriter role is instructed to use plain language and bans marketing-speak like "solutions," "cutting-edge," "revolutionary" — so the output can't drift into the inflated register where invented claims feel natural.

The pattern: name the model's failure mode *for that task* in the system instruction, one clause, before the content starts.

## Pattern 2: Verification flags instead of invented facts

The stack's core anti-hallucination mechanism is the `[VERIFY]` / `[CONFIRM]` flag: when a prompt's output contains a claim the model can't ground — a statistic, a market number, a client name, a price — the prompt requires it to mark that claim for verification instead of presenting it as fact.

Prompt 02's spec makes it concrete: the article is written "citing where claims need sources I must verify." The model doesn't fabricate a benchmark study; it writes the claim and marks it. You then spend 30 seconds confirming or cutting it. The prompt also carries an absolute-claims rule — no medical/legal/financial absolutes unless *you* supply them — so the highest-stakes fabrication categories are blocked at the source, not just flagged.

This is the single most transferable pattern in the article: **a claim the model invents is a defect you find after publishing; a claim the model flags is a defect you find in 30 seconds before.** Same defect, two very different costs.

## Pattern 3: Output specs that leave room for "I don't know"

Hallucination thrives on specs that demand confident output. If the prompt asks for "3 market insights with numbers," the model will produce 3 insights with numbers, even when it only has 1.5. The fix is a spec with legitimate uncertainty channels:

- a **`[VERIFY]` field** for anything numeric the model didn't source,
- an **explicit option to return fewer items** than requested rather than padding to the count,
- a **separate section for assumptions**, so what the model guessed is visible as a guess.

That last one is the difference between a working system and a trap. Prompt 10 of the stack (Project Brief Intake) exists for exactly this: it turns messy client messages into a clean brief and catches ambiguity *before* you invoice — the assumptions are surfaced as assumptions, not silently baked into the deliverable. The same design idea applies to any prompt: make the model's guesses visible, and fabrication loses its hiding place.

## Pattern 4: Anti-hallucination in the workflow, not just the prompt

Flagging only works if verification actually happens. The stack builds it into the workflow at the points where invented facts cost the most:

- **Client content:** the SEO engine's citation instruction puts verification on your side of the desk, before the article ships.
- **Pricing and negotiation:** the negotiation prompt (Prompt 03) never lets the model state a price — prices come from your rate and their budget as bracket parameters, and the model's job is scope-trim responses, not invented numbers. The pricing-strategy prompt does the floor-rate math from *your* inputs, not the model's guess.
- **Outreach:** the outreach prompt (Prompt 01) requires one *real* researched detail per prospect as an input — the model personalizes from facts you supply, and the spec bans the filler it would otherwise invent ("I hope this finds you well").

That last division of labor is the core design: **facts come from you as bracket parameters; structure and language come from the model.** A model working from your facts has nothing to hallucinate about the substance — it only writes the connective tissue.

## A working checklist

Run any prompt-generated content through this before it ships:

1. **Every number has a source you verified**, or a `[VERIFY]` flag you resolved.
2. **Every name, price, and quote came from your inputs**, not the model's output.
3. **No absolute medical/legal/financial claims** unless you supplied them.
4. **The model's assumptions are visible** — surfaced as assumptions, not baked into the deliverable.
5. **Item counts match what was requested** — and where the model padded to hit a count, cut the padding.

Five checks, two minutes, and the failure mode that gets AI content corrected-in-public drops to near zero.

## FAQ

**Why not just ask the model to cite sources?**
Asking for sources gets you invented ones — fluent citations to papers that don't exist. The `[VERIFY]` flag inverts it: the model marks claims for *your* verification instead of fabricating grounding. You check the real world; the model checks the text.

**Does this work in Claude and Gemini too?**
Yes. These are prompt-level patterns, not model features: a role instruction with accuracy standards, an output spec with uncertainty channels, and explicit bans. They work in any language model.

**What about hallucinated code or file paths?**
Same pattern: facts come from your inputs. Paste the real file path, the real error message, the real API response into the prompt as parameters, and require the model to work from those instead of inventing plausible ones.

**Where do I get prompts with this built in?**
The [Modern Freelancer's AI Prompt Stack](https://mxtl7.github.io/prompt-stack/) ships 20 prompt systems with the verification patterns above built into every prompt — `[VERIFY]` flags, accuracy-bearing system instructions, and bracket parameters that keep facts on your side. Plain `.md` files, works in any AI.

---

*Related: [AI prompts for freelancers](/prompt-stack/articles/01-ai-prompts-for-freelancers.md) · [Prompt engineering for client work](/prompt-stack/articles/02-prompt-engineering-for-client-work.md)*
