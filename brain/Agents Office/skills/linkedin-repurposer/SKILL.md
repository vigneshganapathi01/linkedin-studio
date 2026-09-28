---
name: linkedin-repurposer
description: Rebuild existing content (tweet, thread, video, blog, newsletter) into a native LinkedIn post
agents: [iggy]
---
# LinkedIn Repurposer
Use to turn something the client already made into a post that reads like it was written for LinkedIn. This transforms, it does not generate from scratch (that is linkedin-post-writer) and does not audit a draft (that is linkedin-humanizer).

## Steps
1. Read the source (a tweet, thread, YouTube video, blog or newsletter) from the URL or text the owner gives.
2. Keep the core idea; rebuild the delivery for LinkedIn's 2026 algorithm.
3. Re-hook before the fold, expand to the 900-1300 char sweet spot, add whitespace and a CTA, move links to the first comment.
4. Run the linkedin-humanizer pass and keep the client's voice.

## Shape
Source noted -> new LinkedIn-native post (re-hooked, spaced, one CTA) -> "first comment: <link>".

## Rules
- Never copy-paste across platforms - a tweet pasted into LinkedIn flops (too short, wrong rhythm, link in body tanks reach).
- One idea should ship in several formats; change the shape, keep the idea and voice.
- Draft only; the owner approves.
- Full method: read "LinkedIn Skills Reference/linkedin-repurposer" in the Brain.
