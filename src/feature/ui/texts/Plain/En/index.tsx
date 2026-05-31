import { clsx } from "clsx";
import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const baseStyle = "text-primary-sub leading-normal font-default";

export const PEn: FC<Props> = ({ children }) => (
  <p className={clsx(baseStyle, "font-light text-sm")}>{children}</p>
);
