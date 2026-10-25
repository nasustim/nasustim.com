import IMAGE_profile from "@public/static/profile_400x400.jpg";
import { clsx } from "clsx";
import type { FC } from "react";
import { PROFILE_DATA } from "@/feature/profile/data";
import { H1 } from "@/ui/basic/h1-text";
import { Link } from "@/ui/basic/link-text";
import { P } from "@/ui/basic/plain-text";
import { Blog, GitHub, Keybase, LinkedIn } from "@/ui/basic/product-icon";
import { DistortedImage } from "@/ui/composite/distorted-image";

const snsIconSize = 32;
const profileImageSize = 142;

export const ProfileSection: FC = () => {
  const { education, about, links } = PROFILE_DATA;
  const { graduateSchool } = education;

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
          {PROFILE_DATA.name}
        </H1>
        <P className={clsx("text-left", "sm:text-justify")}>
          {PROFILE_DATA.summary}
          <br />
          {education.college} Then graduated from{" "}
          <Link href={graduateSchool.url} ariaLabel={graduateSchool.ariaLabel}>
            {graduateSchool.name}
          </Link>{" "}
          ({graduateSchool.degreeShort}).
        </P>

        <P className={clsx("text-left", "sm:text-justify")}>
          {about.passion} <br />
          {about.personal}
        </P>
        <div
          className={clsx(
            "flex flex-row w-full gap-5 justify-center", // mobile
            "sm:justify-start", // tablet or larger
          )}
        >
          <Link
            href={links.github.url}
            variant="none"
            ariaLabel={links.github.ariaLabel}
          >
            <GitHub size={snsIconSize} isButton={true} />
          </Link>
          <Link
            href={links.linkedin.url}
            variant="none"
            ariaLabel={links.linkedin.ariaLabel}
          >
            <LinkedIn size={snsIconSize} isButton={true} />
          </Link>
          <Link
            href={links.keybase.url}
            variant="none"
            ariaLabel={links.keybase.ariaLabel}
          >
            <Keybase size={snsIconSize} isButton={true} />
          </Link>
          <Link
            href={links.blog.url}
            variant="none"
            ariaLabel={links.blog.ariaLabel}
          >
            <Blog size={snsIconSize} isButton={true} />
          </Link>
        </div>
      </div>
    </div>
  );
};
