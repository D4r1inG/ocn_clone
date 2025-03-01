import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { NavMobile } from './MobileNav';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <BaseHeader isScrolled={isScrolled} isAlt />
      <BaseHeader />
    </>
  );
};

interface BaseHeaderProps {
  isScrolled?: boolean;
  isAlt?: boolean;
}

const BaseHeader: React.FC<BaseHeaderProps> = ({ isScrolled, isAlt }) => {
  const { t } = useTranslation('common');

  return (
    <header
      id={cn({
        'navbar-clone': isAlt,
      })}
      className={cn('navbar is-fresh is-transparent ', {
        'is-active': isScrolled,
        'no-shadow': !isScrolled,
      })}
    >
      <nav id="scrollspyNav" className="container">
        <Link className="navbar-brand" href="/">
          <img src="./img/branding/ocn-logo.png" alt="" />
        </Link>

        <div className="nav-mobile-menu">
          <NavMobile />
        </div>

        <div className="navbar-menu is-static">
          <div className="navbar-end">
            <a
              className="navbar-item is-secondary"
              href="#scrollspyNav"
              aria-current="page"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasNavbar"
            >
              {t('header.homePage')}
            </a>

            <a
              className="navbar-item is-secondary"
              href="#scrollspyServices"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasNavbar"
            >
              {t('header.services')}
            </a>

            <a
              className="navbar-item is-secondary"
              href="#scrollspyPortfolio"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasNavbar"
            >
              {t('header.projects')}
            </a>

            <a
              className="navbar-item is-secondary"
              href="#scrollspyAbout"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasNavbar"
            >
              {t('header.aboutUs')}
            </a>

            <a
              className="navbar-item is-secondary"
              href="#scrollspyTeam"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasNavbar"
            >
              {t('header.team')}
            </a>

            <a
              className="navbar-item is-secondary"
              href="#scrollspyPricing"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasNavbar"
            >
              {t('header.pricing')}
            </a>

            <a
              className="navbar-item is-secondary"
              href="#scrollspyBlog"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasNavbar"
            >
              {t('header.blogs')}
            </a>

            <a
              className="navbar-item is-secondary"
              href="#scrollspyContact"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasNavbar"
            >
              {t('header.contact')}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
