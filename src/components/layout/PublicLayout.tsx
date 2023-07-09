import { Public } from "@prisma/client/runtime";
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
      <PublicNavigation dropDown={dropDown} setDropDown={setDropDown} />
      <main
        className="flex min-h-screen flex-col items-center "
        onMouseEnter={() => setDropDown(false)}
      >
        <div className="page h-[calc(100vh-13rem)] w-full bg-texture">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};
