import { clsx } from "clsx";
import type { FC, JSX, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const baseStyle = "text-primary-sub leading-normal font-default";

export const P: FC<Props & JSX.IntrinsicElements["p"]> = ({
  children,
  className,
  ...props
}) => (
  <p className={clsx(baseStyle, "font-light text-sm", className)} {...props}>
    {children}
  </p>
);
