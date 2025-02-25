import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation('common');

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
    <header
      id="header"
      className={cn('sticky-top bsb-tpl-header-sticky bsb-tpl-header-sticky-animationX', {
        'pre-stuck stuck': isScrolled,
      })}
    >
      <nav
        id="scrollspyNav"
        className="navbar navbar-expand-lg bsb-tpl-bg-blue bsb-navbar bsb-navbar-hover bsb-navbar-caret bsb-tpl-navbar-sticky"
        data-bsb-sticky-target="#header"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="./img/branding/ocn-logo.png" className="bsb-tpl-logo" alt="" />
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <ul id="bsb-tpl-navbar" className="navbar-nav justify-content-end flex-grow-1">
                <li className="nav-item">
                  <h4>
                    <a
                      className="nav-link active"
                      href="#scrollspyNav"
                      aria-current="page"
                      data-bs-dismiss="offcanvas"
                      data-bs-target="#offcanvasNavbar"
                    >
                      {t('header.homePage')}
                    </a>
                  </h4>
                </li>
                <li className="nav-item">
                  <h4>
                    <a
                      className="nav-link"
                      href="#scrollspyServices"
                      data-bs-dismiss="offcanvas"
                      data-bs-target="#offcanvasNavbar"
                    >
                      {t('header.services')}
                    </a>
                  </h4>
                </li>
                <li className="nav-item">
                  <h4>
                    <a
                      className="nav-link"
                      href="#scrollspyPortfolio"
                      data-bs-dismiss="offcanvas"
                      data-bs-target="#offcanvasNavbar"
                    >
                      {t('header.projects')}
                    </a>
                  </h4>
                </li>
                <li className="nav-item">
                  <h4>
                    <a
                      className="nav-link"
                      href="#scrollspyAbout"
                      data-bs-dismiss="offcanvas"
                      data-bs-target="#offcanvasNavbar"
                    >
                      {t('header.aboutUs')}
                    </a>
                  </h4>
                </li>
                <li className="nav-item">
                  <h4>
                    <a
                      className="nav-link"
                      href="#scrollspyTeam"
                      data-bs-dismiss="offcanvas"
                      data-bs-target="#offcanvasNavbar"
                    >
                      {t('header.team')}
                    </a>
                  </h4>
                </li>
                <li className="nav-item">
                  <h4>
                    <a
                      className="nav-link"
                      href="#scrollspyPricing"
                      data-bs-dismiss="offcanvas"
                      data-bs-target="#offcanvasNavbar"
                    >
                      {t('header.pricing')}
                    </a>
                  </h4>
                </li>
                <li className="nav-item">
                  <h4>
                    <a
                      className="nav-link"
                      href="#scrollspyBlog"
                      data-bs-dismiss="offcanvas"
                      data-bs-target="#offcanvasNavbar"
                    >
                      {t('header.blogs')}
                    </a>
                  </h4>
                </li>
                <li className="nav-item">
                  <h4>
                    <a
                      className="nav-link"
                      href="#scrollspyContact"
                      data-bs-dismiss="offcanvas"
                      data-bs-target="#offcanvasNavbar"
                    >
                      {t('header.contact')}
                    </a>
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
