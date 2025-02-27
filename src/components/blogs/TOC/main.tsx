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
      <nav className="p-2 toc-nav">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: headings.length && 1,
          }}
          className="position-relative"
        >
          <header className="pb-4">
            <h3 className="m-0 fs-2 text-black text-center pt-4">Table of contents</h3>
          </header>
          <ul
            className="position-relative overflow-hidden"
            style={{
              listStyle: 'none',
            }}
          >
            <div
              className="position-absolute top-0 w-[4px] h-full z-[4] bg-black"
              style={{ width: '4px', left: '1rem' }}
            />
            <motion.div
              className="position-absolute top-0 w-[4px] bg-white h-full z-[5]"
              style={{ width: '4px', left: '1rem' }}
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
            >
              <div
                className="position-absolute"
                style={{
                  width: '20px',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    background: 'white',
                    border: '2px solid black',
                    borderRadius: '50%',
                  }}
                />
              </div>
            </motion.div>
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
      className={cn('ms-4', {
        'py-2': heading.level === 2,
        'py-1': heading.level > 2,
      })}
    >
      <Link
        className={cn('toc-link', {
          'fw-medium': activeIds.includes(heading.id),
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
