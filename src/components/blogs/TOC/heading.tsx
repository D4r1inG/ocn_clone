import { Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import cn from 'classnames';

type HeadingProps = {
  children: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  id?: string;
  hidden?: boolean;
};

function getId(children: string) {
  if (children.split(' ').length === 1) return children.toLowerCase();

  return children
    .split(' ')
    .map((word) => word.toLowerCase())
    .join('-');
}

export const Heading: React.FC<HeadingProps> = ({ as: Element, children, id, ...props }) => {
  const eleId = id ?? getId(children);

  return (
    <Element id={eleId} className={cn('position-relative blog-heading')} {...props}>
      <Link
        href={`#${eleId}`}
        className="position-absolute top-50 translate-middle toc-anchor"
        style={{
          left: '-1.5rem',
        }}
      >
        <LinkIcon />
      </Link>
      {children}
    </Element>
  );
};
