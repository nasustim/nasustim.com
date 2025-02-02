import { clsx } from "clsx";
import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = ({ children }) => (
  <div className="bg-white relative w-screen h-screen">
    <section className="absolute top-0 left-0 flex flex-col items-center justify-center w-screen min-h-screen z-50">
      <div
        className={clsx(
          "w-4/5 p-3", // mobile
          "tablet:w-tablet tablet:p-0", // tablet
          "desktop:w-tablet desktop:p-0", // desktop
        )}
      >
        {children}
      </div>
    </section>
    <section className="fixed top-0 left-0 w-screen h-screen z-10 overflow-hidden">
      {/**
       * append here if set a background component
       * @see https://github.com/nasustim/nasustim.com/pull/1001
       * */}
    </section>
  </div>
);
