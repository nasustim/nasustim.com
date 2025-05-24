import styles from "./icon-animation.module.scss";
import { useEffect } from "react";

const generateRandomRadius = (): number => {
    return Math.floor(Math.random() * (72 - 45 + 1)) + 45;
  };
  
  const setRandomRadiusVariables = () => {
    const root = document.documentElement;
    for (let i = 0; i < 29; i++) {
      root.style.setProperty(`--radius-${i}`, `${generateRandomRadius()}px`);
    }
  };

export const useIconAnimation = () => {
    useEffect(() => {
        setRandomRadiusVariables();
        
        const interval = setInterval(() => {
          setRandomRadiusVariables();
        }, 2 * 60 * 1000);
    
        return () => clearInterval(interval);
      }, []);


    return {
        animationClassName: styles.animate,
    }
}