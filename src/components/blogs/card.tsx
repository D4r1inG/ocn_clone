import { ArrowDownIcon, Calendar, Comment, Eye } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';
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

  return (
    <article>
      <figure className="rounded overflow-hidden mb-3 bsb-overlay-hover">
        <a href="#!">
          <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={image} alt="" />
        </a>
        <figcaption>
          <Eye className="bi bi-eye text-white bsb-hover-fadeInLeft" />
          <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Chi tiết</h4>
        </figcaption>
      </figure>
      <div className="entry-header mb-3">
        {/* <ul className="entry-meta list-unstyled d-flex mb-2">
          <li>
            <a className="link-primary text-decoration-none" href="#!">
              Kinh doanh
            </a>
          </li>
        </ul> */}
        <h2 className="entry-title h4 mb-0">
          <Link href={`/blogs/${slug}`} className="link-dark text-decoration-none">
            {title}
          </Link>
        </h2>
      </div>
      <div className="entry-footer">
        <ul className="entry-meta list-unstyled d-flex align-items-center mb-0">
          <li>
            <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
              <Calendar />
              <span className="ms-2 fs-7">{date}</span>
            </a>
          </li>
          <li>
            <span className="px-3">•</span>
          </li>
          <li>
            <a className="link-secondary text-decoration-none d-flex align-items-center" href="#!">
              <Comment />
              <span className="ms-2 fs-7">55</span>
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};
