# Bread Butter Bytes

## Start Here

- This public repo owns the Eleventy site, styles, diagrams, and article files.
- First read the private strategy repo's [AGENTS.md](../breadbutterstrategy/AGENTS.md).
  It is the source of truth for writing, brand, and shared contribution rules.
- Then read the task-specific guide below. Do not load every guide by default.
- Keep private guidance and plans out of public files, generated output, and
  public GitHub discussions.

## Private Context

- Local checkout: `../breadbutterstrategy` from this repository root.
- Canonical repo: <https://github.com/BenGOsborn/breadbutterstrategy>.
- If the sibling checkout is missing, clone it with existing authentication:
  `git clone git@github.com:BenGOsborn/breadbutterstrategy.git ../breadbutterstrategy`
- Check the remote before reading it. Never overwrite an existing directory.
- If it cannot be read, report that and do only work that does not need private
  context. The public build must work without the private repo.

## Guides

- [Coding](docs/coding.md): implementation rules, files, dependencies, and code style.
- [Diagrams](docs/diagrams.md): SVG conventions and the diagram workflow.
- [Articles](docs/articles.md): front matter, stable IDs, and article branches.

## Quickstart

- Run `npm ci` to install the build tools.
- Run `npm run dev` to serve the local site at the URL Eleventy prints.
- Run `npm run build` to write static output to `_site/`.
