import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import { ClientAquisition } from "~/components/ClientAquisition/Index";
import { PublicLayout } from "~/components/layout/PublicLayout";

const Home: NextPageWithLayout = () => {
  return (
    <div className="bg-texture">
      <div className="flex flex-col items-center ">
        <h2 className="my-4 text-xl font-bold">
          DO YOU WANT TO&nbsp;
          <span className="my-2 text-primary-100">SCALE YOUR BUSINESS</span>?
        </h2>
        <p className="mb-6">
          We&apos;re looking to invest in one great business per month. Will it
          be yours?
        </p>
      </div>
      <ClientAquisition />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Home;
