import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';

export const HeroAlt = () => {
  const { t } = useTranslation('heroAlt');

  return (
    <section className="hero-alt" style={{ backgroundImage: 'url("./img/cta/cta-img-1.jpg")' }}>
      <div className="hero-alt-overlay" />
      <div className="container">
        <div className="column is-5 landing-caption">
          <span className="subtitle is-5 light-gray-text text-hightlight">{t('title.prefix')}</span>
          <h1 className="title is-1 is-bold is-spaced light-text mt-20 mb-20">{t('title.highlight')}</h1>

          <Link href="/" className="navbar-item">
            <span type="button" className="button cta primary-btn raised">
              {t('btn')}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
