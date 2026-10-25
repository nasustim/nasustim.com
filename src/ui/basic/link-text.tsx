import NextLink from "next/link";
import type { FC, ReactNode } from "react";

const variants = {
  none: "p-0 outline-none bg-transparent cursor-pointer appearance-none",
  primary: "text-indigo font-semibold underline hover:text-sky",
  secondary: "text-white font-medium underline hover:text-white/80",
};

interface Props {
  children: ReactNode;
  href: string;
  variant?: keyof typeof variants;
  ariaLabel?: string;
  title?: string;
}

export const Link: FC<Props> = ({
  href,
  children,
  variant = "primary",
  ariaLabel,
  title,
}) => {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  if (isExternal) {
    return (
      <a
        href={href}
        className={variants[variant]}
        aria-label={ariaLabel}
        title={title}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      className={variants[variant]}
      aria-label={ariaLabel}
      title={title}
    >
      {children}
    </NextLink>
  );
};
