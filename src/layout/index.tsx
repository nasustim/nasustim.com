import { clsx } from "clsx";
import type { FC, ReactNode } from "react";
import { DataCollectionConfirmationDialog } from "@/feature/data-collection/";

type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <div className="bg-white relative w-screen h-svh">
      <section className="absolute top-0 left-0 flex flex-col items-center justify-center w-screen min-h-svh z-50">
        <div
          className={clsx(
            "w-4/5", // mobile
            "sm:w-tablet sm:p-0", // tablet
            "lg:w-tablet lg:p-0", // desktop
          )}
        >
          {children}
        </div>
      </section>
      <section className="fixed top-0 left-0 w-screen h-svh z-10 overflow-hidden">
        {/**
         * append here if set a background component
         * @see https://github.com/nasustim/nasustim.com/pull/1001
         * */}
      </section>
      <section
        className={"fixed bottom-0 w-screen h-[100px] z-100 overflow-hidden"}
      >
        <DataCollectionConfirmationDialog />
      </section>
    </div>
  );
};
