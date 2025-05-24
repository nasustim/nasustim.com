import { Blog, Facebook, GitHub, Keybase } from "@/components/icons/Products";
import { H1En } from "@/components/texts/H1/En";
import { Link } from "@/components/texts/Link";
import { PEn } from "@/components/texts/Plain/En";
import { getI18nContent } from "@/i18n";
import { Inline } from "@/i18n/renderer";
import IMAGE_profile from "@public/static/profile_400x400.jpg";
import { clsx } from "clsx";
import Image from "next/image";
import type { FC } from "react";
import { useIconAnimation } from "@/style/utilities/icon-animation/useIconAnimation";

const snsIconSize = 32;

export const ProfileSection: FC = () => {
  const { name, shortDescription } = getI18nContent();
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
          width={142}
          height={142}
          alt="Portrait"
          className={animationClassName}
        />
      </div>
      <div className={"flex flex-col gap-3 justify-center w-64"}>
        <H1En>
          <Inline content={name} />
        </H1En>
        <PEn>
          <Inline content={shortDescription} />
        </PEn>
        <div className="flex flex-row w-full gap-5">
          <Link
            href="https://github.com/nasustim"
            variant="none"
            ariaLabel="My GitHub account (nasustim)"
          >
            <GitHub size={snsIconSize} isButton={true} />
          </Link>
          <Link
            href="https://www.facebook.com/mitsuhibino"
            variant="none"
            ariaLabel="My Facebook account"
          >
            <Facebook size={snsIconSize} isButton={true} />
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

