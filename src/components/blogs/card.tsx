import { ArrowDownIcon, Calendar, Comment, Eye } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface IProps {
  content: {
    title: string;
    desc: string;
    date: string;
    image: string;
    slug: string;
  };
}

export const Card: React.FC<IProps> = ({ content }) => {
  const { title, desc, date, image, slug } = content;
  const router = useRouter();

  return (
    <article>
      <figure onClick={() => router.push(`/blogs/${slug}`)}>
        <img src={image} alt="" />
        <figcaption>
          <Eye className="text-white card-icon" />
          <div className="light-gray-text">Chi tiết</div>
        </figcaption>
      </figure>
      <Link href={`/blogs/${slug}`} className="title is-5 m-0">
        {title}
      </Link>
      <ul className="entry-meta">
        <li>
          <Calendar />
          <span className="ms-2 fs-7">{date}</span>
        </li>
        <li>
          <span className="px-3">•</span>
        </li>
        <li>
          <Comment />
          <span className="ms-2 fs-7">55</span>
        </li>
      </ul>
    </article>
  );
};
