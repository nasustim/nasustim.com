import { clsx } from "clsx";
import Image, { type StaticImageData } from "next/image";
import { type FC, useEffect, useState } from "react";

const defaultRadius = 58;

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
      () => Math.floor(Math.random() * 14) + defaultRadius, // generate a random number around defaultRadius
    );
  }
}

export const useIconAnimation = () => {
  const [radius, setRadius] = useState<Array<number>>(
    Array(4).fill(defaultRadius),
  );

  useEffect(() => {
    const animationStepper = setRandomRadiusVariables();
    animationStepper.next();

    const interval = setInterval(() => {
      const next = animationStepper.next();
      if (!next.done) {
        setRadius(next.value);
      }
    }, 5 * 1000);

    return () => clearInterval(interval);
  }, []);

  return radius;
};

export const DistortedImage: FC<Props> = ({ src, alt, className, size }) => {
  const radius = useIconAnimation();

  return (
    <Image
      src={src}
      width={size}
      height={size}
      alt={alt}
      className={clsx(className)}
      style={{
        borderRadius: radius.map((r) => `${r}px`).join(" "),
        transition: "border-radius 5s ease-in-out",
      }}
    />
  );
};
