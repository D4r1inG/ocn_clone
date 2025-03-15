import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import ErrorBoundary from '@/components/ErrorBoundary';
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

const HeadCom = Head as any;

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <HeadCom>
        <title>OCN - Cloud Platform</title>
        <meta
          name="keywords"
          content="Cloud Platform, cloud, server, vps, iot, firewall, sass, software company"
        />
        <meta name="description" content="On Cloud Nine - OCN The CloudPlatform space" />
        <meta property="og:site_name" content="OCN" />
        <meta property="og:url" content="https://ocn.com.vn/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="OCN - Cloud Platform" />
      </HeadCom>

      <ErrorBoundary>{getLayout(<Component {...pageProps} />)}</ErrorBoundary>
    </>
  );
}

export default appWithTranslation(App, emptyInitialI18NextConfig);
