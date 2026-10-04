---
id: why-indexes-speed-up-reads
title: Why an index makes reads faster
description: A smaller map can save a lot of searching. But that map has a cost of its own.
date: 2026-09-13
topic: Fundamentals
diagram: /assets/index.svg
socialImage: /assets/index-social.png
socialImageAlt: An email lookup goes through an index to a matching table row.
related:
  - indexes-have-a-write-cost
  - why-replica-reads-can-lag
---
An index gives the database another way to find a row. Instead of checking every row in a table, it can look up a value in a separate structure and follow a reference to the matching data.

Think of the index at the back of a book: **look up the term, then turn to the page.** The database version has the same useful idea, though the details depend on the index type.

## A small example

Imagine a table of customers. You often look up one customer by email:

```sql
SELECT * FROM customers
WHERE email = 'alex@example.com';
```

Without a suitable index, the database may scan the table. With an index on `email`, it has a more direct route to matching rows.

<figure>
  <img src="{{ diagram | url }}" alt="An email lookup goes through an index to a matching table row, rather than checking every row." width="640" height="360">
  <figcaption>A simplified lookup: query, index, matching row.</figcaption>
</figure>

```sql
CREATE INDEX customers_email_idx
ON customers (email);
```

## The work does not disappear

The index takes storage. Inserts, deletes, and relevant updates also need to maintain it. You are trading extra work on writes for a potentially cheaper path on reads.

An index is not always the fastest route. If a query needs much of the table, scanning it can be cheaper than following many index references. The query planner chooses based on its cost estimates.

> An index is an extra route to the data. Whether that route is faster depends on how much data you need.

## What to test

- Compare the query plan with and without the index in a test database.
- Use a realistic number of rows and a realistic spread of values.
- Measure write performance too. Faster reads are only part of the tradeoff.

Read more in the [PostgreSQL introduction to indexes](https://www.postgresql.org/docs/current/indexes-intro.html).
