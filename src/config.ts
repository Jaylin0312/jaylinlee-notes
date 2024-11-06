const BASE_URL = new URL(import.meta.env.SITE);
const SITE_URL = BASE_URL.origin;

export default {
  TITLE: "Homepage",
  TITLE_SUFFIX: "Tech Notes @ JL",
  URL: SITE_URL,
  AUTHOR: "Jaylin Lee Jie Ling",
  DESCRIPTION: "Tech Notes Created by Jaylin",
  LATEST_POSTS: 3,
  POSTS_PER_PAGE: 5,
  SOCIAL: {
    LINKEDIN: "http://www.linkedin.com/in/lee-jie-ling",
    GITHUB: "http://github.com/Jaylin0312",
    TWITTER: "https://x.com/JAYLIN0312",
    EMAIL: "mailto:jielinglee01@gmail.com",
  },
  NAV: {
    HOME: {
      NAME: "Home",
      REL_PATH: "/",
    },
    NOTE: {
      NAME: "Note",
      REL_PATH: "/note",
    },
    PROJECT: {
      NAME: "Project",
      REL_PATH: "/project",
    },
  },
};
