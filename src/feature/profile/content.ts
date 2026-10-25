import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type SocialId = "github" | "linkedin" | "keybase" | "blog";

export interface SocialLink {
  id: SocialId;
  label: string;
  url: string;
  ariaLabel: string;
}

export interface ProfileFrontmatter {
  name: string;
  handle: string;
  socials: SocialLink[];
}

export interface ProfileContent {
  frontmatter: ProfileFrontmatter;
  body: string;
}

const CONTENT_PATH = path.join(process.cwd(), "src/feature/profile/content.md");

export function getProfileContent(): ProfileContent {
  const raw = fs.readFileSync(CONTENT_PATH, "utf-8");
  const { data, content } = matter(raw);

  return {
    frontmatter: data as ProfileFrontmatter,
    body: content.trim(),
  };
}
