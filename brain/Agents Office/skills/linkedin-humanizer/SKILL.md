---
name: linkedin-humanizer
description: Strip AI tells from a post or comment; build a voice profile; audit a draft before it ships
agents: [imail, ada, iggy, qa]
---
# LinkedIn Humanizer
Use to remove the AI tells human readers and LinkedIn's "AI slop" filter react to, to build a client's voice profile, or to audit a draft before it goes to the owner. Three modes:

- profile mode (VOICE PROFILER): read the client's own posts and write a reusable voice profile - tone, sentence length, vocabulary, punctuation habits, emoji use, and a do-not-say list.
- default (POST WRITER, REPURPOSER): rewrite a draft to remove AI tells while keeping the client's voice.
- audit mode (EDITOR QA): pass/fail review of a draft before it ships.

## What to strip
2026 AI-vocabulary at high density, reveal bridges ("here's the thing"), forced staccato fragments, stacked triads, performed sincerity, em-dash overuse. Cap - do not blanket-ban - and watch for over-correction that reads just as fake.

## Rules
- This does NOT make text pass GPTZero/Pangram/Turnitin - no edit reliably does. The goal is text that reads human and does not trip LinkedIn's slop filter (a flagged post loses ~40% of views).
- Expert readers cite vocabulary (53%) and sentence structure (36%) as the giveaways - fix those first.
- Keep the client's voice; never flatten it into generic "human".
- Audit mode returns a clear PASS or specific fixes.
- Full V3 taxonomy and modes: read "LinkedIn Skills Reference/linkedin-humanizer", "voice-rules" and "voice-profile" in the Brain.
