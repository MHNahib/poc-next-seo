import Header from "../src/components/Header/Header";
import "../styles/globals.css";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
