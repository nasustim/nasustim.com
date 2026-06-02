import IMAGE_profile from "@public/static/profile_400x400.jpg";
import { clsx } from "clsx";
import Image from "next/image";
import type { FC } from "react";
import { useIconAnimation } from "@/style/utilities/icon-animation/useIconAnimation";
import { H1 } from "@/ui/basic/h1-text";
import { Link } from "@/ui/basic/link-text";
import { P } from "@/ui/basic/plain-text";
import { Blog, GitHub, Keybase, LinkedIn } from "@/ui/basic/product-icon";

const snsIconSize = 32;
const profileImageSize = 142;

export const ProfileSection: FC = () => {
  const { animationClassName } = useIconAnimation();

  return (
    <div
      className={clsx(
        "flex flex-col w-full h-svh items-center justify-center gap-9", // mobile
        "sm:gap-20 sm:flex-row", // tablet
        "lg:gap-20 lg:flex-row", // desktop
      )}
    >
      <div className={clsx("flex items-center justify-center")}>
        <Image
          src={IMAGE_profile}
          width={profileImageSize}
          height={profileImageSize}
          alt="Portrait"
          className={clsx(animationClassName)}
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
          Mitsuhiro Hibino
        </H1>
        <P className={clsx("text-justify")}>
          Software developer based in Tokyo, Japan.
          <br />
          Having passion for building web apps while focusing on users' desires
          and needs. <br />
          Loving wife and visiting oversea countries.
        </P>
        <div
          className={clsx(
            "flex flex-row w-full gap-5 justify-center", // mobile
            "sm:justify-start", // tablet or larger
          )}
        >
          <Link
            href="https://github.com/nasustim"
            variant="none"
            ariaLabel="My GitHub account (nasustim)"
          >
            <GitHub size={snsIconSize} isButton={true} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mitsuhibino/"
            variant="none"
            ariaLabel="My Linked In account"
          >
            <LinkedIn size={snsIconSize} isButton={true} />
          </Link>
          <Link
            href="https://keybase.io/nasustim"
            variant="none"
            ariaLabel="My Keybase account (nasustim)"
          >
            <Keybase size={snsIconSize} isButton={true} />
          </Link>
          <Link
            href="https://blog.nasustim.com/"
            variant="none"
            ariaLabel="My blog"
          >
            <Blog size={snsIconSize} isButton={true} />
          </Link>
        </div>
      </div>
    </div>
  );
};
