---
name: linkedin-reply-handler
description: Reply to a LinkedIn comment from its URL, or sweep a whole thread and reply to every comment worth answering
agents: [legal]
---
# LinkedIn Reply Handler
Use to reply to comments on the client's own posts - one reply from a comment URL, or a full-thread sweep from just the post URL. Not for top-level comments on others' posts (that is linkedin-comment-drafter).

## Steps
1. Single: read the comment from its URL and draft one reply in the client's voice.
2. Sweep: from the post URL, list every top-level comment and its replies, filter out the low-value ones, and draft a reply to each one worth answering, in one batch.
3. Handle LinkedIn's 2-level thread flattening: when replying to a reply, the parent is the TOP-level comment, not the reply.

## Shape
For each comment: the comment (quoted) -> the drafted reply -> keep / skip decision for low-value ones.

## Rules
- Reply in the client's voice and add value - answer, extend, or ask a real question. Never generic praise.
- Prioritise the client's own posts first, then high-value target accounts.
- Author replies are the highest-value inbound - answer inside the warm window (see linkedin-thread-monitor).
- Draft only; the owner approves before anything is posted.
- Full method and thread-flattening detail: read "LinkedIn Skills Reference/linkedin-reply-handler" in the Brain.
