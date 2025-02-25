import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import ErrorBoundary from '@/components/ErrorBoundary';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.scss';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>ocn.com.vn</title>
      </Head>
      <ErrorBoundary>{getLayout(<Component {...pageProps} />)}</ErrorBoundary>
    </>
  );
}
