import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { NavMobile } from './MobileNav';
import { OcnCloudLogo } from '../icons';
import { Languages } from 'lucide-react';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const handleChangeLocale = () => {
    const currentLocale = router.locale;
    const locale = currentLocale === 'en' ? 'vi' : 'en';

    router.push(router.asPath, router.asPath, { locale, scroll: false });
  };

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
        <Link className="navbar-brand h-full ml-4" href="/">
          <OcnCloudLogo />
        </Link>

        <div className="nav-mobile-menu">
          <NavMobile />
        </div>

        <div className="navbar-menu is-static text-lg">
          <div className="navbar-end">
            <a className="navbar-item is-secondary" href="#scrollspyHero">
              {t('header.homePage')}
            </a>

            <a className="navbar-item is-secondary" href="#scrollspyServices">
              {t('header.services')}
            </a>

            <a className="navbar-item is-secondary" href="#scrollspyPortfolio">
              {t('header.projects')}
            </a>

            <a className="navbar-item is-secondary" href="#scrollspyAbout">
              {t('header.aboutUs')}
            </a>

            <a className="navbar-item is-secondary" href="#scrollspyTeam">
              {t('header.team')}
            </a>

            <a className="navbar-item is-secondary" href="#scrollspyPricing">
              {t('header.pricing')}
            </a>

            <a className="navbar-item is-secondary" href="#scrollspyBlog">
              {t('header.blogs')}
            </a>

            <a className="navbar-item is-secondary" href="#scrollspyContact">
              {t('header.contact')}
            </a>
          </div>
          <button className="navbar-item is-secondary " onClick={handleChangeLocale}>
            <Languages className="w-[36px] h-[36px]" />
          </button>
        </div>
      </nav>
    </header>
  );
};
