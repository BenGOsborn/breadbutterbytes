---
id: indexes-have-a-write-cost
title: Every index has a write cost
description: A faster lookup adds something else to maintain whenever the data changes.
date: 2026-09-11
topic: Performance
diagram: /assets/write.svg
socialImage: /assets/write-social.png
socialImageAlt: One insert creates work in the table and both indexes.
related:
  - why-indexes-speed-up-reads
  - why-replica-reads-can-lag
---
An index is stored data too. When a row is inserted, the database must add the relevant entries to its indexes as well as storing the row.

That means **one logical write can create work in several places.**

## Follow a new customer

Suppose a customer table has indexes on email and signup date. Adding a customer also adds entries to those two indexes.

<figure>
  <img src="{{ diagram | url }}" alt="One insert creates work in the customer table, the email index, and the signup date index." width="640" height="360">
  <figcaption>One insert, several structures to maintain.</figcaption>
</figure>

The exact cost depends on the database, index type, and workload. This diagram leaves out logging and other storage work so we can focus on the extra indexes.

## Start with the queries

An index can be worth its cost when it supports an important query. Adding indexes to every column without checking the workload can add storage and write overhead without a useful benefit.

Before adding one, name the query it should help. Then measure both that query and the writes your application performs.

## What to test

- Compare insert throughput with the current and proposed indexes.
- Keep the dataset size and workload the same between runs.
- Confirm the important read query actually improves.

The [PostgreSQL index documentation](https://www.postgresql.org/docs/current/indexes-intro.html) explains why indexes need maintenance when table data changes.
