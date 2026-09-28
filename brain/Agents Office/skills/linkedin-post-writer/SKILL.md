---
name: linkedin-post-writer
description: Draft a new LinkedIn post from scratch using 2026 hook formulas, then humanize it
agents: [ada, newt]
---
# LinkedIn Post Writer
Use to write a new post for a client, or to produce hook options. Not for reviewing an existing draft (that is linkedin-humanizer audit) and not for repurposing (that is linkedin-repurposer).

## Steps
1. Read the client brief, voice profile and the relevant Story Bank entry. Take the angle and source from the RESEARCH brief.
2. Pick the hook formula by engagement goal (comments, reposts, likes, saves). HOOK WRITER supplies at least five options, each a different formula; POST WRITER chooses one and writes the full post.
3. Draft the body in the client's voice: short lines, generous white space, one idea, a real concrete detail, one clear CTA.
4. Run the linkedin-humanizer pass. Move any link to the first comment.

## Shape
Hook (approved) -> body in the client's voice -> one CTA -> "first comment: <link>" if there is a link. Aim ~900-1300 characters for long-form.

## Rules
- Voice profile governs every line. No AI-slop vocabulary.
- Use a concrete detail from the Story Bank; if none fits, ask - do not invent.
- Draft only; the owner approves before it is scheduled.
- Full hook library and founder angles: read "LinkedIn Skills Reference/linkedin-post-writer", "hook-formulas" and "founder-topics" in the Brain.
