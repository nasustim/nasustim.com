import IMAGE_profile from "@public/static/profile_180x180.webp";
import { clsx } from "clsx";
import type { FC } from "react";
import Markdown from "react-markdown";
import { getProfileContent, type SocialId } from "@/feature/profile/content";
import { H1 } from "@/ui/basic/h1-text";
import { Link } from "@/ui/basic/link-text";
import { P } from "@/ui/basic/plain-text";
import { Blog, GitHub, Keybase, LinkedIn } from "@/ui/basic/product-icon";
import { DistortedImage } from "@/ui/composite/distorted-image";

const snsIconSize = 32;
const profileImageSize = 142;

const socialIcons: Record<
  SocialId,
  FC<{ size: number; isButton?: boolean }>
> = {
  github: GitHub,
  linkedin: LinkedIn,
  keybase: Keybase,
  blog: Blog,
};

export const ProfileSection: FC = () => {
  const { frontmatter, body } = getProfileContent();

  return (
    <div
      className={clsx(
        "flex flex-col w-full h-svh items-center justify-center gap-9", // mobile
        "sm:gap-20 sm:flex-row", // tablet
        "lg:gap-20 lg:flex-row", // desktop
      )}
    >
      <div className="flex items-center justify-center">
        <DistortedImage
          src={IMAGE_profile}
          alt={"Portrait"}
          size={profileImageSize}
        />
      </div>
      <div
        className={clsx(
          "flex flex-col gap-4 justify-center w-76", // mobile
          "sm:gap-5 sm:w-94", // tablet or larger
        )}
      >
        <H1
          className={clsx(
            "text-center",
            "sm:text-left", // tablet or larger
          )}
        >
          {frontmatter.name}
        </H1>
        <Markdown
          components={{
            p: ({ children }) => (
              <P className={clsx("text-left", "sm:text-justify")}>{children}</P>
            ),
            a: ({ href = "", title, children }) => (
              <Link href={href} title={title}>
                {children}
              </Link>
            ),
          }}
        >
          {body}
        </Markdown>
        <div
          className={clsx(
            "flex flex-row w-full gap-5 justify-center", // mobile
            "sm:justify-start", // tablet or larger
          )}
        >
          {frontmatter.socials.map((social) => {
            const Icon = socialIcons[social.id];
            return (
              <Link
                key={social.id}
                href={social.url}
                variant="none"
                ariaLabel={social.ariaLabel}
              >
                <Icon size={snsIconSize} isButton={true} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
