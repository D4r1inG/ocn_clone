import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const date = process.env.buildId;

  return (
    <Html lang="en">
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
