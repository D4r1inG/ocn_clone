import { ArrowDownIcon } from '@/components/icons';
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
    <div className="card-container relative flex rounded-md overflow-hidden">
      {/* <div className="relative card-img shrink-0">
        <Image src={image} fill alt="" className="object-cover" />
      </div> */}
      <div className="card-content flex flex-col justify-between h-full gap-3 p-4 bg-th-gray-30">
        <div>
          <Link href={`/blogs/${slug}`} className="text-th-text block text-xl font-semibold">
            {title}
          </Link>
          <p className="text-th-gray-600 text-sm mt-2">{desc}</p>
        </div>
        <div className="flex justify-between items-center text-sm">
          <Link href={`/blogs/${slug}`} className="flex items-center text-th-text !text-base">
            Xem chi tiết <ArrowDownIcon className="rotate-90 scale-75" />
          </Link>
          <span className="text-th-gray-600">{date}</span>
        </div>
      </div>
    </div>
  );
};
