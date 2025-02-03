import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Text: FC<Props> = ({ children }) => (
  <h2 className="text-primary font-heading text-2xl leading-tight lg:leading-normal">
    {children}
  </h2>
);

export default Text;
