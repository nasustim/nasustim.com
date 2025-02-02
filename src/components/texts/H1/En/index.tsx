import { clsx } from "clsx";
import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  isCentered?: boolean;
}

export const H1En: FC<Props> = ({ isCentered, children }) => (
  <h1
    className={clsx(
      "text-primary font-heading text-3xl leading-none font-bold",
      isCentered ? "text-center" : null,
    )}
  >
    {children}
  </h1>
);
