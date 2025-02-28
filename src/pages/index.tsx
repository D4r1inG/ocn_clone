import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import type { ReactNode } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Services } from '@/components/services';
import { Portfolio } from '@/components/portfolio';
import { About } from '@/components/about';
import { Team } from '@/components/team';
import { Pricing } from '@/components/pricing';
import { Testimonial } from '@/components/testimonial';
import { Blogs } from '@/components/blogs';
import { HeroAlt } from '@/components/hero/HeroAlt';
import { Contact } from '@/components/contact';

export default function Home(): ReactNode {
  return (
    <>
      <Hero />
      <main id="main">
        <Services />
        <HeroAlt />
        <Portfolio />
        <About />
        <Team />
        <Pricing />
        <Testimonial />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'vi', ['common'])),
  },
});
