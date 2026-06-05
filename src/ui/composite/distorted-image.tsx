import { clsx } from "clsx";
import Image, { type StaticImageData } from "next/image";
import type { FC } from "react";
import { useIconAnimation } from "@/style/utilities/icon-animation/useIconAnimation";

type Props = {
  src: StaticImageData;
  alt: string;
  classNames?: string;
  size: number;
};

export const DistortedImage: FC<Props> = ({ src, alt, classNames, size }) => {
  const { animationClassName } = useIconAnimation();

  return (
    <Image
      src={src}
      width={size}
      height={size}
      alt={alt}
      className={clsx(classNames, animationClassName)}
    />
  );
};
