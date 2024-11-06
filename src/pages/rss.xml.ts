import rss from "@astrojs/rss";
import config from "../config.ts";
import { getCollection } from "astro:content";

export async function get() {
  const note = await getCollection("note");
  return rss({
    title: config.TITLE + config.TITLE_SUFFIX,
    description: config.DESCRIPTION,
    site: config.URL,
    items: note.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.intro,
      link: `/note/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
