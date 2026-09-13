# Articles

Read this when adding, editing, or reviewing an article.

## Location and Branches

- Keep Markdown in `src/articles/` and diagram source in `src/assets/`.
- Work may stay local while it is being refined.
- Normally use one feature branch per article, then raise a PR into `main`.
- Follow the private strategy repo's contributing and writing rules first.
- Agents do not stage, commit, push, or open PRs unless explicitly asked.

## Front Matter

- Each article needs `id`, `title`, `description`, `date`, `topic`, and `diagram`.
- Use a unique, lowercase, hyphenated `id` as the normal convention. Eleventy
  does not enforce this format.
- Do not reuse an `id` in two article files. Each article needs its own stable
  route.
- The `id` creates `/articles/<id>/`. Keep it unchanged after publishing.
- Titles and source filenames can change without changing the route.
- Use an asset path from `src/assets/` and useful alt text in image markup.
- Add up to two relevant article IDs in `related` when useful. Choose real next
  steps or prerequisites; do not add unrelated links just to fill the section.

## Checks

- Keep one main concept or question per article.
- Explain the answer, mechanism, example, production effect, and key caveat.
- Use public sources and general knowledge only. Do not use internal employer or
  client projects, even after removing names.
- Run `npm run build` and check the route, links, code, and diagram.

See [site design](design.md) for templates and [diagrams](diagrams.md) for visuals.
