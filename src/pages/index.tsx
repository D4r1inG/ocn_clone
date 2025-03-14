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
import { read } from '@/utils/file-helper';
import matter from 'gray-matter';
import { SideBtn } from '@/components/common/SideBtn';
import { AboutAlt } from '@/components/about/about-alt';

export default function Home({ blogs }): ReactNode {
  return (
    <>
      <Hero />
      <main id="main">
        <Services />
        <HeroAlt />
        <Portfolio />
        <AboutAlt />
        <Team />
        <Pricing />
        <Testimonial />
        <Blogs blogs={blogs} />
        <Contact />
      </main>
      <Footer />
      <SideBtn />
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  const fileNames = read(`/public/contents/${locale}`, 'dir');

  const blogPosts = [];

  for (const fileName of fileNames) {
    const rawContent = read(`/public/contents/${locale}/${fileName}`, 'file') as string;

    const { data: frontmatter } = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace('.mdx', ''),
      ...frontmatter,
    });
  }

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'vi', [
        'common',
        'hero',
        'heroAlt',
        'services',
        'portfolio',
        'about',
        'team',
        'pricing',
        'testimonial',
        'blog',
        'contact',
        'footer',
      ])),
      blogs: blogPosts.sort((p1, p2) => (p1.date < p2.date ? 1 : -1)),
    },
  };
};
