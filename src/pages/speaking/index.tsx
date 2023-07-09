import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { PublicLayout } from "~/components/layout/PublicLayout";

const Speaking: NextPageWithLayout = () => {
  return (
    <h2 className="">
      DO YOU WANT TO <span>SCALE YOUR BUSINESS</span>?<br />
    </h2>
  );
};

Speaking.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Speaking;
