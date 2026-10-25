import type { StaticImageData } from "next/image";
import type { ComponentProps, FC } from "react";

type Props = Omit<ComponentProps<"img">, "src"> & {
  src: StaticImageData | string;
};

export const Image: FC<Props> = ({ src, alt, ...props }) => {
  const resolvedSrc = typeof src === "string" ? src : src.src;
  return (
    // biome-ignore lint/performance/noImgElement: static export uses unoptimized images
    <img
      src={resolvedSrc}
      alt={alt}
      loading="eager"
      decoding="async"
      {...props}
    />
  );
};
