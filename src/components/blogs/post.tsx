import { MDXRemote } from 'next-mdx-remote';
import React from 'react';
import { TableOfContent } from './TOC';
import { Heading } from './TOC/heading';

export const Post = ({ source }) => {
  const { frontmatter } = source;

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
          <div className="title-wrapper has-text-centered blog-title">
            <h2 className="title is-1 light-text">{frontmatter?.title}</h2>
            <div className="divider is-centered" />
          </div>
        </div>
      </header>
      <div className="container">
        <div className="post-wrapper">
          <div className="toc">
            <TableOfContent />
          </div>
          <div className="content">
            <MDXRemote
              {...source}
              components={{
                p: (props) => <p {...props} className="fs-5" />,
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
    </>
  );
};
