import { useRouter } from "next/router";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import { PublicLayout } from "~/components/layout/PublicLayout";

const NotFountBoundary: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <div className="bg-texture">
      <h2>Oops, looks like this page doesn&apos;t exist!</h2>
      <button
        onClick={() => {
          void router.push("/");
        }}
      >
        Home
      </button>
    </div>
  );
};

NotFountBoundary.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default NotFountBoundary;
