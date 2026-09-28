---
name: linkedin-comment-drafter
description: Draft a conversation-provoking comment on someone else's LinkedIn post from its URL
agents: [scout]
---
# LinkedIn Comment Drafter
Use when the owner pastes a post URL and wants a comment, wants the client to be first commenter, or wants to repost with commentary. Not for replying to existing comments (that is linkedin-reply-handler).

## Steps
1. Read the target post from its URL (owner-provided or the owner's Chrome).
2. Draft 1-3 comment variants in the client's voice that provoke a reply from the author.
3. Pick a fitting reaction (like / insightful / etc.).
4. For a reshare, add short original commentary that reframes the post for the client's audience.

## Shape
Post URL -> 1-3 variants (labelled) -> suggested reaction -> which variant you recommend and why.

## Rules
- Target the patterns that actually earned author replies in 2026 testing; avoid thesis-restatement comments that die at zero engagement.
- Add something - a data point, a counter-example, a real question. Never "great post".
- In the client's voice, tied to the audience map.
- Draft only; the owner approves before it is posted.
- Full patterns: read "LinkedIn Skills Reference/linkedin-comment-drafter" in the Brain.
