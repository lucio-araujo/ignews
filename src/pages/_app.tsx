import type { AppProps } from "next/app";
import { Header } from "../components/Header";

import { Provider as NextAuthProvider } from "next-auth/client";

import "../styles/global.scss";
import { Session } from "next-auth";

export default function App({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}
