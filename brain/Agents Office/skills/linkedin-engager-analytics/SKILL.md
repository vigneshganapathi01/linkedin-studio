---
name: linkedin-engager-analytics
description: Pull the people who liked or commented on a client's post and segment them by ICP fit
agents: [invo]
---
# LinkedIn Engager Analytics
Use when the owner asks "who liked/engaged with my post", wants an engagers report, or audience analytics. Not for tracking author replies to the client's comments (that is linkedin-thread-monitor).

## Steps
1. Take the client's post URL. Pull every liker and commenter.
2. Segment each engager by ICP fit: peer / aspirational / prospect / other, using the client's audience map.
3. Produce the outputs: an engager roster, a tier breakdown, and outbound action lists - follow back, comment-drop, and DM-able with a one-line opener each.

## Shape
Post URL -> roster table (name, role, tier) -> tier counts -> action lists ready to feed the outreach queue.

## Rules
- The source repo uses Apify for this. That backend is not wired into this office, so work from the engager list the owner pastes, or the owner's Chrome.
- Openers are specific and personal - a real reason to reach out, no pitch in message one.
- Read-only analysis; any outreach is drafted and waits for the owner's OK.
- Full taxonomy: read "LinkedIn Skills Reference/linkedin-engager-analytics" and "engagement-metrics-taxonomy" in the Brain.
