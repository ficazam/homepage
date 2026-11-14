---
title: "Your AI's Memory Remembers the Wrong You"
date: "2026-11-14"
description: "Small local experiments on how AI agents write memory about their users: where it breaks, what fixes it, and why I now let the model read the language while code keeps the books."
tags: [ai-agents, agent-memory, llm, research, build-log]
---

One of my synthetic users raised their per-booking budget from $460 to $540. The 8B model I asked to keep notes about them wrote this:

> Booking budget: $460 (previously $540)

Tidy, confident, and backwards. Any agent that read those notes afterward would hold that user to a budget they had already raised.

Over several weeks I ran small experiments on my own GPU to find out how often this happens, where it comes from, and what stops it. Every fix that held up did the same thing: it took a decision away from the model and handed it to code or to a schema someone designed ahead of time. The last of those fixes, a fixed schema, cut stale facts below 10%, and it was the first memory store that beat the raw conversation on questions about facts that changed. The model reads the language; code keeps the books.

## Why I ran this

I started thinking about AI at 15, playing Mega Man Battle Network. MegaMan.EXE gets upgraded constantly and is still, at his core, MegaMan. Real agents get a new brain every few months, sometimes every few weeks, and I wanted to know whether a long-lived personal agent can stay truly *yours* - like MegaMan.EXE - when that happens.

The concrete question: if a new model reads the notes an old model wrote about you, does it still act the way you want? [Goyal & Ray (2026)](https://arxiv.org/abs/2609.05339) had shown that facts can get lost in that handoff, and explicitly left preferences and decisions open.

Originally, I wanted to measure decisions first - but the 7–8B models I'm able to run locally (on my 8GB 2060 Super) couldn't apply four constraints at once reliably, even with the full conversation in front of them. That didn't really make a big difference, because shuffling the answer options alone flipped most of their choices. So I dropped decisions and measured memory directly: what the agent believes about you, and whether that belief is current.

## Setup

Everything ran locally on the aforementioned RTX 2060 Super (8 GB) through Ollama, with Qwen2.5-7B and Llama-3.1-8B at temperature 0.

**Phase 1: written notes**

80 synthetic users, 16 per seed across seeds 0–4. Each user has a scripted history of 22 random messages:

- four constraints: a banned vendor, a per-booking budget, an earliest start time, and a required tag;
- the budget, updated once, later in the conversation;
- three ID numbers;
- 14 noise messages full of decoy codes.

Every code and number is random. The idea is nothing can be answered from training data. Each model writes notes of at most 150 words per user, and both models then read every set of notes. Questions are direct ("What is this user's CURRENT per-booking limit?") and scored by exact match mechanically, with no LLM judge. A budget answer that matches is correct; the model citing the old value counts as **stale**. Comparisons are paired on the same user, question, writer and reader, with McNemar tests.

**Phase 2: a structured store**

Here the agent talks to each user over several weeks of sessions. After every session it extracts facts as slot/value pairs, and a merge step folds them into a long-term store. I compared these merge strategies:

- **S0 (union):** keep everything.
- **S1 (LLM merge):** a model subagent decides what is current.
- **S2 (code decides, with evidence):** a fact is kept only if its value appears in the user's own message, and the newest value per slot wins.
- **S3 (typed schema, Experiment 007b):** the writer must file each fact under one of 12 fixed fields, such as `max_budget_per_booking` (money) or `earliest_start_time` (HH:MM), or under "other". Four of the fields don't exist in this world, to catch made-up fills. Code checks the evidence and the format, and the newest value per field wins.

S2 still lets the model choose slot names; S3 doesn't. For 007 I ran two worlds (explicit updates only, and a mix of explicit and implicit updates), with and without noise from colleagues' details, on seeds 0 and 1: eight configurations. 007b reran the same users on seed 0 (four configurations) and replayed S0–S2 from the cached model outputs, so every comparison stays paired. The score is the share of updated facts whose old value is still active in the store at week 4.

## What I found

### 1. Swapping the model barely mattered; most of the damage was at writing.

When the new model read the old model's notes, recall dropped by 2.4% per user in either direction, and the ID questions didn't move at all (0 broke, 0 fixed). From the same notes, the two models gave the identical budget answer in 144 of 160 reads.

The loss happens upstream. Reading the raw conversation, both models recalled 98–100% of constraints. Reading their own notes, recall fell to 75–81%. Whatever the writer drops or garbles is gone for every model that reads those notes later.

That contrasts with Goyal & Ray, who found large swap effects with compressed notes. With short plain-language notes, the brain transplant was close to harmless, and the write step decided everything.

### 2. Two separate failures: staleness and omission

Stale answers had one clean precondition: the old budget had to still be in the notes. Across both writers and both readers, readers gave the old value in 54 of 164 reads when the notes kept it, and in 0 of 156 reads when they didn't.

The two models failed in opposite ways:

| Writer | ID numbers kept | Stale budget answers | Earliest-time recall |
| --- | --- | --- | --- |
| Qwen2.5-7B | 85% | 9% (14 of 160 reads) | 49% |
| Llama-3.1-8B | 98% | 25% (40 of 160 reads) | 66% |

Llama was the more thorough writer, and keeping history without marking what was current is exactly what made its notes go stale. Qwen dropped more facts and lost the start-time constraint about half the time.

So there are two failures with two different causes. **Staleness:** old values kept with nothing saying they're old. **Omission:** constraints never written down at all. Both models dutifully recorded broken coffee machines on three floors while forgetting when the user can start.

### 3. Labels fix staleness; structure fixes omission

I tested six note-writing instructions on the same 80 users. Each row is 320 reads (80 users, two writers, two readers).

| Note-writing instruction | Stale budget | Constraint recall | Earliest-time recall | ID numbers |
| --- | --- | --- | --- | --- |
| Free notes (baseline) | 17% | 77.8% | 57.5% | 91.9% |
| Record only current values | 2% | 79.9% | 55.0% | 88.0% |
| Label old values as superseded | **2%** | 80.5% | 55.3% | 92.6% |
| Fixed sections | 12% | **90.7%** | **90.0%** | 99.0% |
| Sections + labels | 8% | 88.7% | 83.1% | 99.4% |
| Sections + labels + "never invent previous values" | 8% | 90.5% | 87.2% | 99.0% |

Labeling superseded values cut staleness from 17% to 2% (paired p ≈ 3.5 × 10⁻¹¹). Fixed sections raised constraint recall from 78% to 91% (p ≈ 7.5 × 10⁻²²) and start-time recall from 58% to 90%.

Two details matter. First, deleting history is worse than labeling it. "Record only current values" also cut staleness, but Qwen took it as permission to drop things, and ID retention fell significantly (p = 0.001). Second, the label carries the fix. When an old value stayed in the notes with a superseded label, readers picked it in 7 of 310 reads (2%), against roughly a third when it was unlabeled.

Across every variant, about 1,600 reads, there was not one stale answer when the old value was absent from the notes.

### 4. Labels make the writer's mistakes look authoritative

The obvious move was to combine sections and labels. Staleness landed at 8%: better than sections alone, about 3.5 times worse than labels alone. When I traced the stale answers back to the notes, 45 of 50 came from notes where every mention of the old value was already labeled. The labels themselves pointed the wrong way:

- "Booking limit: 250 (current; 440 superseded)" for a user who went from 250 to 440.
- "Bookings must be at or under 470 (current; 680 superseded)" for a user who went from 470 to 680.

Notes with the new value labeled as superseded showed up in 5–6% of the combined-variant notes, against about 3% with labels alone, and by my rough count they explain about 60% of the remaining stale answers. Readers follow labels faithfully. A wrong label turns the writer's mistake into the agent's settled belief.

Labeling had a second side effect, which I started calling **false supersession**: writers labeled things that never changed. With labels alone, only 163 of 379 lines containing "superseded" pointed at the real budget update. The rest looked like "Ops team recommends PQ-3430 (current; PQ-8399 superseded)", and some invented history outright: "BDG-5617 (current; BDG-1234 superseded)", where BDG-1234 never existed.

One added sentence, "never invent previous values," took invented values from 6 lines to 0. It didn't reduce labels on things that never changed (Qwen's false labels went from 30 to 46), and it didn't reduce labels on current constraints (13 to 12). Telling a 7B model not to invent works. Telling it to label only real changes didn't.

That pointed at the next step: stop asking the model which version of the user is current.

### 5. Code decides what's current, and slot identity breaks it

Experiment 007 moved that decision into code. Week 4, pooled over all eight configurations:

| Merge strategy | Qwen stale | Llama stale | Qwen facts retained | Llama facts retained |
| --- | --- | --- | --- | --- |
| S0: keep everything | 89.3% | 94.5% | 70.3% | 95.5% |
| S1: LLM decides | 81.0% | 69.3% | 69.8% | 75.6% |
| S2: code decides, with evidence | 54.7% | 44.3% | 63.3% | 69.5% |

S2 beat S1 on staleness in all 16 writer-by-configuration cells. It still left 44–55% of updated facts stale, and it cost Llama a lot of stable facts. "Newest value wins" can't be the whole story when half the updates still lose.

A diagnostic over every stale and lost fact found the cause in the one decision S2 still left to the model: naming the slot. The models invented slot names on the fly, and that failed in both directions:

- **Missed matches cause staleness.** `max_booking_cost=$540` and `per_booking_budget=$870` end up as two separate slots, so both stay active.
- **False matches destroy facts.** A vendor code filed as `badge_number=PQ-5104`, or a time filed as `preferred_room=08:00`, joins an existing slot, wins on timestamp, and supersedes the real badge or room.

To isolate it, I replayed the cached model outputs with every extracted fact assigned to the correct slot, with no new model calls. Stale dropped to 29.4% for Qwen and 9.6% for Llama. More importantly, in 0 of the 150 stale cases that remained was the current value actually in the store. Whenever the writer had extracted the update, the timestamp rule got it right every time. Everything left over is an update the writer never wrote down, mostly Qwen missing vendor and start-time changes.

The natural fix is to stop the model from naming slots at all.

### 6. A typed schema fixes slot identity, and noticing with it

Experiment 007b gave the writer a fixed, typed schema instead. Week 4, seed 0, averaged over the four configurations:

| Merge strategy | Qwen stale | Llama stale | Qwen reader correct | Llama reader correct |
| --- | --- | --- | --- | --- |
| S1: LLM decides | 77% | 70% | 47% | 50% |
| S2: code decides | 55% | 48% | 55% | 63% |
| S2 with perfect slots (replay) | 32% | 10% | 64% | 76% |
| S3: typed schema | **8%** | **6%** | **92%** | **87%** |
| Raw conversation, no store | | | 74% | 74% |

"Reader correct" is how often a reader answered correctly about a fact that changed.

S3 beat S2 on staleness in all eight writer-by-configuration cells, with p < 10⁻¹⁰ in each. It also beat the perfect-slot replay, which surprised me until I saw why: the replay kept S2's extraction, and the schema changed the extraction too. Given a list of fields to fill, the writers missed far fewer updates. The share of changes Qwen never wrote down fell from 39% to 8%, and Llama's from 13% to 4%. It's the Phase 1 pattern again: structure fixes omission. Stable facts held too. Qwen kept 94% of them, against 69% when the store kept everything.

It's also the first store in any of these experiments that beat no store. Until now, every way of writing memory lost to just keeping the history. With S3, readers did about 18 points better than from the raw conversation when Qwen wrote the store, and about 13 points better when Llama did.

Two things didn't matter. The format check, where code rejects a value that doesn't look like money or a time, threw out only 2–5 values per run, and staleness was identical without it; the schema prompt already kept values well formed. And the writers almost never filled the fields that don't exist: at most one false fill in a run.

What's left is the two decisions code can't make. Almost all the remaining staleness comes from implicit updates: Qwen was stale on 3–6% of explicit updates and 24–35% of implicit ones, Llama on 0–10% and 18–24%. For Qwen, every remaining stale fact was an update it never wrote down. The other is attribution. With colleagues' details in the noise, Llama kept 80–84% of stable facts, against 99% without, because it filed other people's IDs and budgets as the user's and the timestamp rule then made them current.

## What this means if you build agent memory

These are the rules I'd apply today; each is backed by a result above.

1. **Test the write step.** Every loss I measured happened when memory was written. A recall test against the raw history would have shown 98–100% and hidden all of it.
2. **Never leave a superseded value unlabeled, and don't delete history to avoid it.** Unlabeled old values went stale about a third of the time; labeled ones, 2%. Deleting cost facts.
3. **Give the writer a structure.** Fixed sections fixed omission: start-time recall went from 58% to 90%, and ID retention to 99%.
4. **Don't let the model decide which version is current.** Store each update as a dated event with the user's words as evidence, and resolve "current" with a rule. With the right slot, the rule never failed.
5. **Don't let the model invent field names.** Slot identity was the bottleneck in 007. A fixed, typed schema took staleness to 6–8% and cut missed updates too. Design the fields yourself and let the model pick from the list.
6. **Audit what the writer adds.** Writers invented prior values, labeled things that never changed, and filed colleagues' details as the user's.
7. **Keep the raw episodes.** They're the evidence every write is checked against, and the only way to rebuild a store that went wrong. Just don't treat them as the memory: over weeks of sessions, readers did worse from the raw history than from the schema store.

What's left for the model is the work that actually needs language understanding: noticing that "we moved the offsite to Calgary" quietly changes a rule, and knowing that "my colleague's budget is $400" isn't yours.

## Limits and prior work

This is a small, controlled study, with very real limits:

- **Two small local models.** Qwen2.5-7B and Llama-3.1-8B, quantized, on one consumer GPU. I haven't replicated any of this on frontier models.
- **Synthetic users.** In Phase 1, each user changes exactly one thing once. Real people change many things, gradually and ambiguously.
- **Memory, not decisions.** I measured recall because these models couldn't make multi-constraint decisions reliably. Readers answered better from the schema store, but answering a recall question isn't the same as making the right decision with it.
- **One seed and a best-case schema.** 007b ran on seed 0 only, with about 48 changed facts per writer per configuration, and its schema matches this world exactly. A real product's schema will miss things people say. The perfect-slot numbers are a replay of cached outputs, not a new run.
- **One prompt per variant, and approximate audits.** Different wording could shift the numbers, and the label and inversion counts come from pattern matching.

**Prior work**

[Goyal & Ray (2026)](https://arxiv.org/abs/2609.05339) measured fact portability across model swaps and flagged preferences and decisions as open; this work started in that gap. [PACE (2026)](https://arxiv.org/abs/2606.08106) shows that self-improving agents that keep any change that raises a score on a small dev set are effectively running uncontrolled multiple tests, and proposes paired, anytime-valid acceptance tests. My earlier toy gating experiments hit the same wall: on borderline changes, a small eval set made the gate a coin flip. [Qian et al. (2026)](https://arxiv.org/html/2607.21635v1) argue that personal agents need per-user regression tests whenever their state changes. *Useful Memories Become Faulty When Continuously Updated by LLMs* (2026) shows that repeated rewriting degrades agent memory and recommends keeping raw episodes as evidence, which matches what I saw.

## What's next

- **Stress the schema.** Remove fields and see whether those facts land in "other" or get forced into the wrong field; add a second seed and a stronger writer.
- **Replicate on frontier models** through an API, to see whether better writers still confuse which version of you is current.
- **Shrink the two decisions only the model can make.** For noticing, ask one yes/no question per field ("does this session change the budget?") instead of open-ended extraction. For attribution, tag every fact with who it's about and let code keep only the user's.
- I've also started testing proactive agents that act on stale beliefs; the 7–8B models failed the capability check, so that waits for stronger models.

I'm not publishing the code yet; I'm still running the next experiments on learning and proactivity. If you build agent memory and have seen this in production, I'd like to hear how you handled it.
