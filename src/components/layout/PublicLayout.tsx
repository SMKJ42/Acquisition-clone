import Head from "next/head";
import { PublicNavigation } from "./PublicNavigation";
import { type ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Footer } from "./Footer";

export const PublicLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const [dropDown, setDropDown] = useState<string | boolean>(false);
  const [page, setPage] = useState<string>("");

  useEffect(() => {
    if (router.pathname === "/") {
      setPage("home");
    } else {
      const regex = /\/([^/]+)$/;
      const match = regex.exec(router.pathname);
      if (match && match[1]) {
        if (match[1] === "[slug]") {
          const newRegex = /\/([^/]+)\/[^/]+\/?$/;
          const newMatch = newRegex.exec(router.pathname);
          if (newMatch && newMatch[1]) {
            const newPage = newMatch[1].replace(/_/g, " ");
            setPage(newPage);
          }
          return;
        }
        const page = match[1].replace(/_/g, " ");
        setPage(page);
      }
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>Acquisition.com</title>
        <meta name="Description" content={`Acquision.com ${page}`} />
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
