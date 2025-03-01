import React, { useEffect, useState, useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '@/hooks/useDimensions';
import cn from 'classnames';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import { useTranslation } from 'next-i18next';

interface IProps {
  toggle: () => void;
  isOpen: boolean;
}

const sidebar = {
  open: (height = 800) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 100% 0px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const variantsNav = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const NavMobile = () => {
  const { t } = useTranslation('common');

  const [isOpen, toggleOpen] = useCycle(false, true);
  const [shouldPreserveHeight, setShouldPreserveHeight] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const { height } = useDimensions(containerRef as React.MutableRefObject<HTMLElement>);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    const root = document.documentElement;

    if (!isOpen) {
      root.style.overflow = 'auto';
      id = setTimeout(() => setShouldPreserveHeight(false), 1000);
    } else {
      // Disable scroll when menu is open
      root.style.overflow = 'hidden';
      setShouldPreserveHeight(true);
    }

    return () => clearTimeout(id);
  }, [isOpen]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const NAVS = [
    {
      label: t('header.homePage'),
      href: '#scrollspyNav',
    },
    {
      label: t('header.services'),
      href: '#scrollspyServices',
    },
    {
      label: t('header.projects'),
      href: '#scrollspyPortfolio',
    },
    {
      label: t('header.aboutUs'),
      href: '#scrollspyAbout',
    },
    {
      label: t('header.team'),
      href: '#scrollspyTeam',
    },
    {
      label: t('header.pricing'),
      href: '#scrollspyPricing',
    },
    {
      label: t('header.blogs'),
      href: '#scrollspyBlog',
    },
    {
      label: t('header.contact'),
      href: '#scrollspyContact',
    },
  ];

  if (!isMounted) return null;

  return (
    <div>
      {createPortal(
        <>
          <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
            className={'nav-mobile-main'}
            style={{
              width: shouldPreserveHeight ? '100%' : 'auto',
              height: shouldPreserveHeight ? '100%' : 'auto',
            }}
          >
            <motion.div className="nav-overlay" variants={sidebar} />
            <div className="nav-content">
              <motion.ul
                variants={variantsNav}
                className={cn({
                  'is-hidden': !shouldPreserveHeight,
                })}
              >
                {NAVS.map((nav) => (
                  <MenuItem
                    nav={nav}
                    key={nav.label}
                    onClick={() => {
                      toggleOpen();
                    }}
                  />
                ))}
              </motion.ul>
            </div>
            <MenuToggle
              isOpen={isOpen}
              toggle={() => {
                toggleOpen();
              }}
            />
          </motion.nav>
        </>,
        document.body
      )}
    </div>
  );
};

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    strokeLinecap="round"
    className="stroke-th-gray-50"
    {...props}
  />
);

const MenuToggle: React.FC<IProps> = ({ toggle, isOpen }) => (
  <button
    onClick={toggle}
    className={cn('menu-toggle-alt', {
      'text-secondary ': isOpen,
    })}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        fill="currentColor"
        stroke="currentColor"
        animate={{
          d: isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5',
        }}
      />
      <Path
        fill="currentColor"
        stroke="currentColor"
        d="M 2 9.423 L 20 9.423"
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        fill="currentColor"
        stroke="currentColor"
        animate={{
          d: isOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346',
        }}
      />
    </svg>
  </button>
);

interface IPropMenuItem {
  nav: {
    label: string;
    href: string;
  };
  onClick?: () => void;
  key: any;
}

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: {
        type: 'spring',
        stiffness: 300,
        damping: 40,
      },
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: {
      x: {
        type: 'spring',
        damping: 3,
        stiffness: 50,
      },
    },
  },
};

export const MenuItem: React.FC<IPropMenuItem> = ({ nav, onClick }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="list-none"
    >
      <Link className="title is-5" href={nav.href}>
        {nav.label}
      </Link>
    </motion.li>
  );
};
