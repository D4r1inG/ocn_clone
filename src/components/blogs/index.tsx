import Link from 'next/link';
import React from 'react';
import { Card } from './card';
import { useTranslation } from 'next-i18next';

export const Blogs = ({ blogs }) => {
  const { t } = useTranslation('blog');

  return (
    <section id="scrollspyBlog" className="section is-medium">
      <div className="container">
        <div className="blog-main">
          <div className="title-wrapper has-text-centered blog-title">
            <h2 className="title is-2 ">Blogs</h2>
            <h3 className="subtitle is-5 is-muted my-2">{t('title')}</h3>
            <div className="divider is-centered" />
            <Link href="/blogs" className="button cta primary-btn mt-40">
              {t('btn')}
            </Link>
          </div>

          <div className="content-wrapper">
            <div className="columns is-multiline">
              {blogs?.map((blog) => (
                <div key={blog.slug} className="column is-5">
                  <Card content={blog} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
