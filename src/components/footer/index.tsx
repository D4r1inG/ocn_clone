import React from 'react';
import { Facebook, Instagram, Logo, Twitter, Youtube } from '../icons';
import { useTranslation } from 'next-i18next';

export const Footer = () => {
  const { t } = useTranslation('footer');

  return (
    <footer className="footer footer-dark !pb-8">
      <div className="container">
        <div className="columns">
          <div className="column mt-8">
            <Logo />
          </div>
          <div className="column">
            <div className="footer-column">
              <div className="footer-header">
                <h3>{t('contact.title')}</h3>
              </div>
              <p>{t('contact.content')} </p>
              <ul className="link-list">
                <li>
                  <a href="tel:+15057922430">(+84)376332287</a>
                </li>
                <li>
                  <a href="mailto:info@ocn.com.vn">info@ocn.com.vn</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="footer-column">
              <div className="footer-header">
                <h3>{t('link.name')}</h3>
              </div>
              <ul className="link-list">
                <li>
                  <a href="#">{t('link.1')}</a>
                </li>
                <li>
                  <a href="#">{t('link.2')}</a>
                </li>
                <li>
                  <a href="#">{t('link.3')}</a>
                </li>
                <li>
                  <a href="#">{t('link.4')}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="footer-column">
              <div className="footer-header">
                <h3>{t('info.title')}</h3>
              </div>
              <p>{t('info.content')} </p>
              <div className="footer-input-group">
                <input type="email" placeholder="Email" />
                <button className="button btn-align-md primary-btn raised">{t('info.btn')}</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - Bootstrap Brain Component */}
      <div className="container">
        <div className="border-top mt-40 footer-bottom">
          <div className="footer-bottom-content">
            <div>© 2025. All Rights Reserved.</div>
          </div>

          <div className="footer-social">
            <ul>
              <li>
                <a href="#!">
                  <Facebook />
                </a>
              </li>
              <li className="nav-item">
                <a href="#!">
                  <Youtube />
                </a>
              </li>
              <li className="nav-item">
                <a href="#!">
                  <Twitter />
                </a>
              </li>
              <li className="nav-item">
                <a href="#!">
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
