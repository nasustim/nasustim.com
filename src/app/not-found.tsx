"use client";

import { H1 } from "@/ui/basic/texts/H1";
import { Link } from "@/ui/basic/texts/Link";

function Page() {
  return (
    <div>
      <H1 isCentered={true}>404 Not Found</H1>
      <p style={{ textAlign: "center" }}>
        <Link href="/" isInternal={true} ariaLabel="Back to top page">
          Back to top page
        </Link>
      </p>
    </div>
  );
}

export default Page;
