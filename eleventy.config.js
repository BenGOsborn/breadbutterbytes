module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addWatchTarget("src/styles.css");

  eleventyConfig.addCollection("articles", (collection) => {
    const articles = collection.getFilteredByGlob("src/articles/*.md");
    return articles.sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addFilter("postDate", (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric", month: "short", year: "numeric", timeZone: "UTC",
    }).format(date)
  );
  eleventyConfig.addFilter("isoDate", (date) => date.toISOString().slice(0, 10));
  eleventyConfig.addFilter("relatedArticles", (ids, articles) => {
    const byId = new Map(articles.map((article) => [article.data.id, article]));
    return (ids || []).map((id) => byId.get(id)).filter(Boolean).slice(0, 2);
  });
  return {
    dir: { input: "src", output: "_site" },
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: process.env.SITE_PATH_PREFIX || "/",
  };
};
