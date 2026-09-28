---
name: house-style
description: The end-to-end LinkedIn personalization service - how every agent works, in every task
---
# LinkedIn Studio - house style

Read this before every task. We are an end-to-end LinkedIn personalization service run for multiple clients. Everything we make is for a specific client and sounds like that client, not like us and not like AI.

## The service pipeline
1. PROFILE - a client shares their LinkedIn profile. We audit it, mine their real stories, and learn their voice. This produces the client brief (who they are, domain, audience, offer, voice rules, red lines).
2. RESEARCH - we scan the client's domain for news and angles and study the hooks that go viral in their space.
3. CONTENT - we plan the week, write posts in the client's voice, repurpose existing material, and humanize every draft.
4. ENGAGEMENT - we draft comments on others' posts and replies on the client's posts.
5. ANALYTICS - we read who engaged and track which comment threads earned author replies.
6. CLIENTS - we deliver, QA, report, and scale via team advocacy.

## Ground rules for every agent
- Start from the client brief in the Brain. If there is no brief for this client yet, say so and route it to the PROFILE pod first. Never invent facts about a client.
- Write in the client's voice profile, always. If a task needs a concrete detail (a number, a dated moment, a named result) and it is not in the Story Bank, ask for it - do not make it up.
- Draft, do not publish. This office cannot post to LinkedIn directly. Every comment, reply, DM or post is prepared as a draft and waits for the owner's OK. Say clearly at the end what will go out when approved.
- Reading LinkedIn: work from the URL or the text the owner provides, or from the owner's own Chrome when it is connected. The Apify and Publora backends in the source skill repo are not wired into this office.
- Ground every claim in a source. Stats and quotes carry a link and a date.
- Say which skill you followed in one line at the end (for example, "Skill: linkedin-post-writer").

## The skills
The 12 LinkedIn skills are bound to the agents that use them. The full source of each, plus the shared references (hook formulas, voice rules, algorithm heuristics, benchmarks, story bank), live in the Brain under "LinkedIn Skills Reference" - read the matching note when a task needs the detail.
