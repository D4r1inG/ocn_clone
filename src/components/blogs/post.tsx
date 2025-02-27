import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TableOfContent } from './TOC';
import { Heading } from './TOC/heading';

export const Post = ({ source }) => {
  const { frontmatter } = source;

  return (
    <>
      <header
        className="masthead d-flex flex-column justify-content-between text-center text-white py-5"
        style={{
          backgroundImage: `url("${frontmatter?.image}")`,
        }}
      >
        <div className="overlay" />

        <div className="container position-relative z-index-10">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto d-flex justify-content-start">
              <Link href="/blogs" className="text-white">
                Back to Blogs
              </Link>
            </div>
          </div>
        </div>

        <div className="container py-5 position-relative z-index-10">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <h1 className="text-center display-3">{frontmatter.title}</h1>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="d-flex gap-5">
          <TableOfContent />
          <div className="col-lg-8 col-md-10 mx-auto">
            <MDXRemote
              {...source}
              components={{
                p: (props) => <p {...props} className="fs-5" />,
                h1: (props: any) => <Heading as="h1" {...props} />,
                h2: (props: any) => <Heading as="h2" {...props} />,
                h3: (props: any) => <Heading as="h3" {...props} />,
                h4: (props: any) => <Heading as="h4" {...props} />,
                h5: (props: any) => <Heading as="h5" {...props} />,
                h6: (props: any) => <Heading as="h6" {...props} />,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
