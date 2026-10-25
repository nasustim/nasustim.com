import { SEO, SITE_DOMAIN, SITE_TITLE } from "@/config";
import { PROFILE_DATA } from "@/feature/profile/data";

export const dynamic = "force-static";

export async function GET() {
  const { education, about, links } = PROFILE_DATA;
  const { graduateSchool } = education;

  const markdown = [
    `# ${SITE_TITLE}`,
    "",
    `> ${SEO.description}`,
    "",
    "## Profile",
    "",
    `- **Name**: ${PROFILE_DATA.name} (${PROFILE_DATA.handle})`,
    `- **Location**: ${PROFILE_DATA.location}`,
    `- **Role**: ${PROFILE_DATA.role}`,
    "- **Education**:",
    `  - ${education.college}`,
    `  - ${graduateSchool.degree}, [${graduateSchool.name} (${graduateSchool.fullName})](${graduateSchool.url})`,
    "- **About**:",
    `  - ${about.passion}`,
    `  - ${about.personal}`,
    "",
    "## Links",
    "",
    `- [Website](${SITE_DOMAIN}/)`,
    `- [${links.github.label}](${links.github.url})`,
    `- [${links.linkedin.label}](${links.linkedin.url})`,
    `- [${links.keybase.label}](${links.keybase.url})`,
    `- [${links.blog.label}](${links.blog.url})`,
    "",
  ].join("\n");

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
