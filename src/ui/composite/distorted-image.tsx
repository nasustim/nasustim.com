import { clsx } from "clsx";
import type { StaticImageData } from "next/image";
import { type FC, useEffect, useState } from "react";
import { Image } from "@/ui/basic/image";

const defaultRadius = 56;
const range = 22;
const frequencySec = 3;

type Props = {
  src: StaticImageData;
  alt: string;
  className?: string;
  size: number;
};

function* setRandomRadiusVariables(): Generator<Array<number>, void, unknown> {
  while (true) {
    yield Array.from(
      { length: 4 },
      () => Math.floor(Math.random() * range) + defaultRadius, // generate a random number around defaultRadius
    );
  }
}

export const useFluctuatingRadius = () => {
  const [radius, setRadius] = useState<Array<number>>(
    Array(4).fill(defaultRadius),
  );

  useEffect(() => {
    const animationStepper = setRandomRadiusVariables();

    const interval = setInterval(() => {
      const next = animationStepper.next();
      if (!next.done) {
        setRadius(next.value);
      }
    }, frequencySec * 1000);

    return () => clearInterval(interval);
  }, []);

  return radius;
};

export const DistortedImage: FC<Props> = ({ src, alt, className, size }) => {
  const radius = useFluctuatingRadius();

  return (
    <Image
      src={src}
      width={size}
      height={size}
      alt={alt}
      className={clsx(className)}
      style={{
        borderRadius: radius.map((r) => `${r}px`).join(" "),
        transition: `border-radius ${frequencySec}s ease-in-out`,
      }}
    />
  );
};
