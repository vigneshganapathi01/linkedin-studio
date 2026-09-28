---
name: linkedin-thread-monitor
description: Track which of the client's comments earned author replies and route warm threads to follow-up
agents: [apay]
---
# LinkedIn Thread Monitor
Use when the owner asks which threads need follow-up, whether an author replied, or to monitor the client's comments. Not for analysing likers on a post (that is linkedin-engager-analytics).

## Steps
1. Take the client's recent comments. Check which earned an author reply.
2. Classify each thread: hot / warm / cool / dormant.
3. Flag the 6-24h warm-reply window where thread momentum peaks.
4. Route warm threads to REPLY HANDLER for a follow-up draft.

## Shape
A thread list with status, age, and a route decision (follow up now / watch / drop). Warm threads surfaced at the top.

## Rules
- The author-reply signal is the highest-value inbound LinkedIn produces - respond inside the window where it compounds.
- The source repo uses Apify for this. That backend is not wired into this office, so work from the comment URLs the owner pastes, or the owner's Chrome.
- Runs well as a scheduled routine (this pod supports routines).
- Full method: read "LinkedIn Skills Reference/linkedin-thread-monitor" in the Brain.
