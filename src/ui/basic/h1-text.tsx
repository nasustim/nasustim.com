import { clsx } from "clsx";
import type { FC, JSX, ReactNode } from "react";

interface Props {
  children: ReactNode;
  isCentered?: boolean;
}

export const H1: FC<Props & JSX.IntrinsicElements["h1"]> = ({
  isCentered,
  children,
  className,
  ...props
}) => (
  <h1
    className={clsx(
      "text-primary text-3xl leading-none",
      "font-heading",
      isCentered ? "text-center" : null,
      className,
    )}
    {...props}
  >
    {children}
  </h1>
);
