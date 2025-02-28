import React from 'react';
import { Card } from './card';

export const Posts = ({ blogs }) => {
  return (
    <div className="section is-medium">
      <div className="container">
        <div className="title-wrapper has-text-centered blog-title">
          <h2 className="title is-2 ">Blogs</h2>
          <h3 className="subtitle is-5 is-muted">
            Cập nhật các tin tức mới nhất về hạ tầng công nghệ thông tin.
          </h3>
          <div className="divider is-centered" />
        </div>
        <div className="content-wrapper">
          <div className="columns is-multiline">
            {blogs?.map((blog) => (
              <div key={blog.id} className="column is-6">
                <Card content={blog} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
