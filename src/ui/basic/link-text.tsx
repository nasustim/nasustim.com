import NextLink from "next/link";
import type { FC, ReactNode } from "react";

const variants = {
  none: "p-0 outline-none bg-transparent cursor-pointer appearance-none",
  primary: "text-indigo font-semibold underline hover:text-sky",
  secondary: "text-primary-sub font-medium underline hover:text-primary",
};

interface Props {
  children: ReactNode;
  href: string;
  isInternal?: boolean;
  variant?: keyof typeof variants;
  ariaLabel: string;
}

export const Link: FC<Props> = ({
  href,
  isInternal,
  children,
  variant = "primary",
  ariaLabel,
}) => (
  <NextLink
    href={href}
    className={variants[variant]}
    target={isInternal ? "" : "_blank"}
    aria-label={ariaLabel}
  >
    {children}
  </NextLink>
);
