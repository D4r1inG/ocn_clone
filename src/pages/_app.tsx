import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import ErrorBoundary from '@/components/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/bulma.scss';
import '@/styles/globals.scss';
import '@/styles/main.scss';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import nextI18nextConfig from 'next-i18next.config';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const emptyInitialI18NextConfig = {
  i18n: {
    defaultLocale: nextI18nextConfig.i18n.defaultLocale,
    locales: nextI18nextConfig.i18n.locales,
  },
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      {/* <Head>
        <title>ocn.com.vn</title>
      </Head> */}
      <ErrorBoundary>{getLayout(<Component {...pageProps} />)}</ErrorBoundary>
    </>
  );
}

export default appWithTranslation(App, emptyInitialI18NextConfig);
