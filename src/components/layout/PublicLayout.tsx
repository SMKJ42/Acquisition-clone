import Head from "next/head";
import { PublicNavigation } from "./PublicNavigation";
import { type ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Footer } from "./Footer";

export const PublicLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const [dropDown, setDropDown] = useState<string | boolean>(false);
  const [page, setPage] = useState<string>("");

  return (
    <>
      <Head>
        <title>Acquisition.com</title>
        <meta name="Description" content={`Acquision.com ${page}`} />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.css"
          rel="stylesheet"
        />
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
