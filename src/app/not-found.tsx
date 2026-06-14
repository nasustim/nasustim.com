"use client";

import { H1 } from "@/ui/basic/h1-text";
import { Link } from "@/ui/basic/link-text";

function Page() {
  return (
    <div>
      <H1 isCentered={true}>404 Not Found</H1>
      <p style={{ textAlign: "center" }}>
        <Link href="/" ariaLabel="Back to top page">
          Back to top page
        </Link>
      </p>
    </div>
  );
}

export default Page;
