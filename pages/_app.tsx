import type { AppProps /*, AppContext */ } from 'next/app'
import "../styles/index.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps } :AppProps ) {
  return <Component {...pageProps} />;
}
