import { clsx } from "clsx";
import type { FC, JSX, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const P: FC<Props & JSX.IntrinsicElements["p"]> = ({
  children,
  className,
  ...props
}) => (
  <p
    className={clsx(
      "text-primary-sub leading-normal font-light text-sm",
      className,
    )}
    {...props}
  >
    {children}
  </p>
);
