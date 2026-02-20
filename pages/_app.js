import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Thailand 2026 Trip Dashboard</title>
        <meta name="description" content="Thailand trip planning and tracking dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="light" />
        <meta name="theme-color" content="#F8FAFC" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
