import React from 'react';
import { Card } from './card';

export const Posts = ({ blogs }) => {
  return (
    <div>
      <div className="h-[290px] bg-th-text"></div>
      <div className="w-[90%] 2xl:w-[60%] mx-auto pt-8">
        <div className="w-full grid grid-cols-6 gap-8">
          <div className="card-outer col-span-6">
            <Card content={blogs?.[0]} />
          </div>
          <div className="card-outer xl:col-span-3 col-span-6">
            <Card content={blogs?.[1]} />
          </div>
          <div className="card-outer xl:col-span-3 col-span-6">
            <Card content={blogs?.[2]} />
          </div>

          {blogs?.slice(3).map((blog) => (
            <div key={blog.id} className="card-outer xl:col-span-2 col-span-6">
              <Card content={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
