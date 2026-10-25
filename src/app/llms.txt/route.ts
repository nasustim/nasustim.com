import { SEO, SITE_DOMAIN, SITE_TITLE } from "@/config";
import { getProfileContent } from "@/feature/profile/content";

export const dynamic = "force-static";

export async function GET() {
  const { frontmatter, body } = getProfileContent();
  const cleanBody = body.replace(/\\\n/g, "\n");

  const markdown = [
    `# ${SITE_TITLE}`,
    "",
    `> ${SEO.description}`,
    "",
    "## Profile",
    "",
    cleanBody,
    "",
    "## Links",
    "",
    `- [Website](${SITE_DOMAIN}/)`,
    ...frontmatter.socials.map(
      (social) => `- [${social.label}](${social.url})`,
    ),
    "",
  ].join("\n");

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
