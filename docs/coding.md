# Coding

Read this when changing implementation, templates, styles, or dependencies.

## Stack

- Eleventy renders Markdown and Nunjucks into static HTML.
- Tailwind CSS generates the stylesheet at build time.
- Browser JavaScript is not needed for reading or navigation.
- The site must build without the private strategy repo.
- Avoid dependencies unless they solve a real reader or author problem.

## Files

- `eleventy.config.js`: directories, collections, filters, and build hooks.
- `src/_includes/`: shared page and article layouts.
- `src/index.njk`: the article grid at `/`.
- `src/articles/`: Markdown articles and front matter.
- `src/styles.css`: the one place for Tailwind imports, color roles, fonts,
  sizes, and reusable component styles.
- `src/_data/site.json`: shared site values such as name, author, and LinkedIn.
- `src/assets/`: public diagrams and other static assets.

## Rules

- Before changing visual or design implementation, read the private strategy
  repo's [brand guide](../../breadbutterstrategy/docs/brand.md) and follow it.
- Keep shared design values in `src/styles.css`.
- Do not scatter inline styles or duplicate palette values across templates.
- Inline one-off styles with Tailwind utilities in the template.
- Create a named CSS class only when the style is reused or forms a meaningful
  shared pattern, such as article cards or article prose.
- Keep the smallest useful abstraction. Do not create a class just to name a
  single layout wrapper.
- Use shared layouts for repeated HTML.
- Use semantic HTML, accessible focus states, and responsive layouts.
- Use Eleventy URL filters for links and assets so root-relative URLs stay
  consistent across local development and the custom domain.
- Keep private guidance, credentials, and local-only files out of source and output.
- Do not add browser JavaScript, external services, or dependencies without a
  clear reason.

See [articles](articles.md) for content structure and [diagrams](diagrams.md)
for visual assets. Read the private strategy repo for brand rules.
