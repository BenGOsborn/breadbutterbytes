# Diagrams

Read this when adding or editing an explanatory visual.

## Standard

- Use a hand-authored SVG for small flows, relationships, state changes, and
  architecture sketches.
- Keep the SVG in `src/assets/` and reference it from article front matter.
- Use simple boxes, direct labels, arrows, and a clear reading direction.
- Use black outlines, brown labels where useful, and soft yellow fills for the
  highlighted state. Never use color as the only signal.

## Scope and Access

- One diagram should explain one relationship or step.
- Split large diagrams when labels become hard to read.
- Use general examples only. Never show employer or client systems.
- Explain every diagram in nearby article text.
- Add useful `alt` text that states the relationship or change.

## Workflow

1. Decide what the reader needs to see.
2. Draw the smallest useful SVG with the shared visual rules.
3. Save it in `src/assets/` and add its path to article front matter.
4. Explain it in prose and include useful alt text.
5. Run the build and check it at desktop and mobile widths.

Use Mermaid only when hand-authored SVG becomes difficult to maintain. Do not
add a diagram toolchain for a single simple diagram.
