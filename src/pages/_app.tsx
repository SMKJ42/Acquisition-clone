import { api } from "~/utils/api";
import "~/styles/globals.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { Provider } from "react-redux";
import store from "~/redux/store";

export type NextPageWithLayout<P = NonNullable<unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  // //getting dark mode from client, then set it in redux from outside the store
  // useEffect(() => {
  //   const localColorTheme = getLocalStorageItem("color-theme");
  //   if (
  //     localColorTheme === "dark" ||
  //     (!("color-theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     store.dispatch(setDarkMode());
  //   } else {
  //     store.dispatch(setLightMode());
  //   }
  // }, []);

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}

export default api.withTRPC(MyApp);
