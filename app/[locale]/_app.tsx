import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);