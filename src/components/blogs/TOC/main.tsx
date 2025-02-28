import Link from 'next/link';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { CircleDot } from 'lucide-react';
import { HeadingType, useTableOfContent } from '@/hooks/useTableOfContent';

const SPRING = {
  type: 'spring',
  stiffness: 300,
  damping: 40,
};

const TableOfContent = () => {
  const { headings, activeIds, activeIndex, currentHeight, getHeadingsHeight } = useTableOfContent();

  const percentageRead =
    (headings.findIndex(({ id }) => id === activeIds.at(-1)) / (headings.length - 1)) * 100;

  return (
    <aside className="toc-main">
      <nav className="p-5 toc-nav">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: headings.length && 1,
          }}
        >
          <header className="title is-5 text-center">Table of contents</header>
          <ul>
            <div className="bg-black progress-bar main" />
            <motion.div
              className="progress-bar secondary"
              initial={{
                y: 0,
              }}
              animate={{
                y: percentageRead === 100 ? '100%' : `${currentHeight}px`,
              }}
              transition={{
                // Last item should be delayed
                delay: headings.length - activeIndex === 2 ? 0.5 : undefined,
                ...SPRING,
              }}
            ></motion.div>
            {headings.map((heading) => {
              return (
                <TocItem
                  key={heading.id}
                  getHeadingsHeight={getHeadingsHeight}
                  heading={heading}
                  activeIds={activeIds}
                />
              );
            })}
          </ul>
        </motion.div>
      </nav>
    </aside>
  );
};

interface TocItemProps {
  key: any;
  heading: HeadingType;
  activeIds: string[];
  getHeadingsHeight: (height: number) => void;
}

const TocItem: React.FC<TocItemProps> = ({ heading, activeIds, getHeadingsHeight }) => {
  const ref = React.useRef<HTMLLIElement>(null);
  const anchorId = `#${heading.id}`;

  useEffect(() => {
    if (ref.current) {
      const height = ref.current.getBoundingClientRect().height;
      getHeadingsHeight(height);
    }
  }, []);

  return (
    <li
      ref={ref}
      key={heading.id}
      className={cn('toc-item', {
        'py-2': heading.level === 2,
        'py-1': heading.level > 2,
      })}
    >
      <Link
        className={cn('toc-link', {
          'muted-text': !activeIds.includes(heading.id),
        })}
        style={{
          marginLeft: `${heading.level - 2}em`,
          textDecoration: activeIds.includes(heading.id) ? 'underline' : '',
        }}
        href={anchorId}
      >
        {heading.text}
      </Link>
    </li>
  );
};

export default TableOfContent;
