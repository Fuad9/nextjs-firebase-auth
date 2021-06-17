import Head from "next/head";
import "../styles/globals.scss";
import { AuthProvider } from "../provider/AuthProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Apartment Hunt</title>
        <meta name="viewport" content="width=device-width, initial-scale" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />
      </Head>

      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
