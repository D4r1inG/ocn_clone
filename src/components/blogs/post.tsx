import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Post = ({ source }) => {
  const { frontmatter } = source;

  return (
    <div className="relative z-10">
      <div className="h-[480px] absolute top-0 left-0 w-full bg-th-text z-10"></div>

      <div className="w-[90%] 2xl:w-[40%] mx-auto my-10 relative z-10 pt-10">
        <div className="flex gap-2 text-th-background">
          <Link className="text-th-background" href="/">
            Trang chủ
          </Link>
          &gt;
          <Link className="text-th-background" href="/news">
            Tin tức
          </Link>
        </div>
        <h1 className="text-3xl text-th-background pt-4">{frontmatter?.title}</h1>

        <div className="relative h-[480px] mt-10 -mx-14 px-14">
          <Image src={frontmatter?.image} fill alt="" className="object-cover" />
        </div>

        <div className="w-full max-w-full mt-10">
          <MDXRemote {...source} components={{}} />
        </div>
      </div>
      <div className="w-[90%] 2xl:w-[60%] bg-th-gray-100 h-[1px] mx-auto" />
    </div>
  );
};
