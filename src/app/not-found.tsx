"use client";

import { H1En } from "@/components/texts/H1/En";

const ERROR = new Error("404 Not Found");

function Page() {
  return <H1En isCentered={true}>{ERROR.message}</H1En>;
}

export default Page;
