import React from 'react';
import { Card } from './card';

export const Posts = ({ blogs }) => {
  return (
    <div className="bsb-tpl-bg-sea-shell">
      <div className="container py-5">
        <h1 className="pb-5 text-center">Blogs</h1>
        <div className="w-full">
          <div className="row g-4">
            {blogs?.map((blog) => (
              <div key={blog.id} className="col-12 col-lg-6">
                <Card content={blog} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
