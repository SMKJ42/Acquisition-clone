import Head from "next/head";
import { PublicNavigation } from "./PublicNavigation";
import { Footer } from "./Footer";
import { type ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";

export const PublicLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const [dropDown, setDropDown] = useState<string | boolean>(false);
  const [page, setPage] = useState<string>("");

  useEffect(() => {
    if (router.pathname === "/") {
      setPage("home");
    } else {
      setPage(router.pathname);
    }
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>Acquisition.com</title>
        <meta name="Description" content={`Acquision.com ${page}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="flex flex-col items-center"
        onMouseEnter={() => setDropDown(false)}
      >
        <PublicNavigation dropDown={dropDown} setDropDown={setDropDown} />
        <div
          className="page mt-20 min-h-[calc(100vh-13rem)] w-full bg-texture"
          onMouseEnter={() => setDropDown(false)}
        >
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};
