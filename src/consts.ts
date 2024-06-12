import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "AdityaSR",
  DESCRIPTION: "Aditya Singh Rawat's personal portfolio website.",
  EMAIL: "rawatas0901@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to Aditya Singh Rawat's personal portfolio website.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};


export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/unreal0901",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/aditya-rawat-294a1b123/",
  },
];