import slugify from "slugify";
import { defineConfig, s } from "velite";

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

export default defineConfig({
  collections: {
    posts: {
      name: "Post", // collection type name
      pattern: "posts/**/*.md", // content files glob pattern
      schema: s
        .object({
          title: s.string(), // Zod primitive type
          toc: s.toc(),
          date: s.isodate(), // input Date-like string, output ISO Date string.
          metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
          excerpt: s.excerpt(), // excerpt of markdown content
          abstract: s.string(), // excerpt of markdown content
          content: s.markdown(), // transform markdown to html
          tags: s.array(s.string()),
        })
        // more additional fields (computed fields)
        .transform((data) => {
          const slug = slugify(data.title, {
            lower: true,
          });
          const date = new Date(data.date);

          return (
            {
              ...data,
              date,
              prettyDate: date.toLocaleDateString(undefined, {
                day: "numeric",
                month: "short",
                year: "numeric",
              }),
              slug,
              permalink: `/blog/${slug}`,
            }
          );
        }),
    },
  },
});
