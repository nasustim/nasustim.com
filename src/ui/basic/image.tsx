import NextImage from "next/image";
import type { ComponentProps, FC } from "react";

export const Image: FC<ComponentProps<typeof NextImage>> = (props) => (
  <NextImage loading="eager" {...props} />
);
