import Head from "next/head";
import { PublicNavigation } from "./PublicNavigation";
import { type ReactNode, useState } from "react";
import { Footer } from "./Footer";

export const PublicLayout = ({ children }: { children: ReactNode }) => {
  const [dropDown, setDropDown] = useState<string | boolean>(false);

  return (
    <>
      <Head>
        <title>Acquisition.com</title>
        <meta name="Description" content={`Acquision.com`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PublicNavigation dropDown={dropDown} setDropDown={setDropDown} />
      <main
        className="flex flex-col items-center"
        onMouseEnter={() => setDropDown(false)}
      >
        <div
          className="page min-h-[calc(100vh-13rem)] w-full"
          onMouseEnter={() => setDropDown(false)}
        >
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};
