import { MDXRemote } from 'next-mdx-remote';
import React, { useEffect, useState } from 'react';
import { TableOfContent } from './TOC';
import { Heading } from './TOC/heading';
import { SideBtn } from '../common/SideBtn';
import { useRouter } from 'next/router';

export const Post = ({ source }) => {
  const { frontmatter } = source;
  const [suspend, setSusupend] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setSusupend(true);
    });
    router.events.on('routeChangeComplete', () => {
      setSusupend(false);
    });
    return () => {
      router.events.off('routeChangeStart', () => {
        setSusupend(true);
      });
      router.events.off('routeChangeComplete', () => {
        setSusupend(false);
      });
    };
  }, []);

  return (
    <>
      <header
        className="masthead section is-medium"
        style={{
          backgroundImage: `url("${frontmatter?.image}")`,
        }}
      >
        <div className="overlay" />

        <div className="container">
          <div className="has-text-centered blog-title">
            <h2 className="title is-1 light-text">{frontmatter?.title}</h2>
            <div className="divider is-centered" />
          </div>
        </div>
      </header>
      <div className="section is-blog">
        <div className="container">
          <div className="post-wrapper">
            <aside className="toc-main">{!suspend && <TableOfContent />}</aside>
            <div className="content">
              <MDXRemote
                {...source}
                components={{
                  p: (props) => <p {...props} className="fs-5 text-black " />,
                  strong: (props) => <strong {...props} className="is-bold text-black " />,
                  li: (props) => <li {...props} className="fs-5 text-black " />,
                  h1: (props: any) => <Heading className="title is-1" as="h1" {...props} />,
                  h2: (props: any) => <Heading className="title is-2" as="h2" {...props} />,
                  h3: (props: any) => <Heading className="title is-3" as="h3" {...props} />,
                  h4: (props: any) => <Heading className="title is-4" as="h4" {...props} />,
                  h5: (props: any) => <Heading className="title is-5" as="h5" {...props} />,
                  h6: (props: any) => <Heading className="title is-6" as="h6" {...props} />,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <SideBtn />
    </>
  );
};
