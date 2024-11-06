import { defineCollection, z } from "astro:content";

const noteCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      intro: z.string(),
      tag: z.string(),
      image: image().optional(),
      pubDate: z.date(),
      type: z.string().optional(),
    }),
});

const pageCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      intro: z.string(),
      image: image().optional(),
      type: z.string().optional(),
    }),
});

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      intro: z.string(),
      image: image().optional(),
      pubDate: z.date(),
      url: z.string().url(),
    }),
});

export const collections = {
  note: noteCollection,
  page: pageCollection,
  project: projectCollection,
};
