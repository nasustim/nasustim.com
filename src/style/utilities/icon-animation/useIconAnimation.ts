import { useEffect, useRef, useState } from "react";
import styles from "./icon-animation.module.scss";

const animationDurationSec = 5;
const defaultRadius = 58;

const generateRandomRadius = (): number => {
  return Math.floor(Math.random() * 14) + defaultRadius;
};

function* setRandomRadiusVariables(root: HTMLElement): Generator<void> {
  root.style.setProperty("--animation-duration", `${animationDurationSec}s`);
  let nextRadius = Array(4).fill(defaultRadius);

  while (true) {
    for (const [i, radius] of nextRadius.entries()) {
      root.style.setProperty(`--radius-${i}`, `${radius}px`);
    }
    yield;
    nextRadius = Array.from({ length: 4 }, () => generateRandomRadius());
  }
}

export const useIconAnimation = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const animationStepper = setRandomRadiusVariables(
      window.document.documentElement,
    );
    animationStepper.next();
    setIsReady(true);

    const interval = setInterval(() => {
      animationStepper.next();
    }, 5 * 1000);

    return () => clearInterval(interval);
  }, []);

  return {
    animationClassName: styles.animate,
    isReady,
    defaultRadius,
  };
};
