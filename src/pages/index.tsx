import { Header } from '@/components/common/Header';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Main } from '@/components/main';
import type { ReactNode } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home(): ReactNode {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'vi', ['common'])),
  },
});
