import { Html, Head, Main, NextScript } from 'next/document';
import i18nextConfig from '../../next-i18next.config';

export default function Document() {
  const date = process.env.buildId;
  const currentLocale = i18nextConfig.i18n.defaultLocale;

  return (
    <Html lang={currentLocale}>
      <Head>
        <meta app-version={date} />
        <link rel="icon" href="/img/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Satisfy&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
