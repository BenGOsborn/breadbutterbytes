---
id: why-replica-reads-can-lag
title: Your write landed. Why is the read old?
description: A successful write and an up-to-date replica are two different things.
date: 2026-09-12
topic: Replication
diagram: /assets/replica.svg
related:
  - why-indexes-speed-up-reads
  - indexes-have-a-write-cost
---
With asynchronous replication, a primary can confirm a write before a replica has applied it. If the next read goes to that replica, it may return the previous value.

**The write succeeded. The copy has not caught up yet.**

## Follow one update

Imagine changing a display name from `Alex` to `Sam`:

1. The application writes `Sam` to the primary.
2. The primary confirms the write.
3. A read reaches a replica before it applies that change.
4. The replica still returns `Alex`.

<figure>
  <img src="{{ diagram | url }}" alt="The primary has the new value Sam while an asynchronous replica still has Alex; the update is not applied yet." width="640" height="360">
  <figcaption>Two copies can briefly show different values.</figcaption>
</figure>

## What the model tells you

Sending reads to replicas can spread read work across machines. It also makes the timing of replication part of the application's behavior.

For a screen that must show the user's latest change, reading from the primary is one possible approach. Other designs track replication progress before allowing a read. The right choice depends on the database and the application.

## What to test

- Write a value, then immediately read it through the application's normal route.
- Repeat under load and measure how long old values remain visible.
- Check which screens actually need to see the latest write immediately.

See [PostgreSQL's streaming replication documentation](https://www.postgresql.org/docs/current/warm-standby.html#STREAMING-REPLICATION) for one implementation of asynchronous replication.
