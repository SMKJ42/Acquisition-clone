import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { PublicLayout } from "~/components/layout/PublicLayout";

const Courses: NextPageWithLayout = () => {
  return (
    <h2 className="bg-texture">
      DO YOU WANT TO <span>SCALE YOUR BUSINESS</span>?<br />
    </h2>
  );
};

Courses.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Courses;
