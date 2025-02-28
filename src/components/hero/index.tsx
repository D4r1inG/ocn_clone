import React from 'react';
import { useTranslation } from 'next-i18next';
import { Header } from '../common/Header';

export const Hero = () => {
  const { t } = useTranslation('common');

  return (
    <section id="scrollspyHero" className="hero is-fullheight is-grey">
      <Header />
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6 landing-caption">
              <h1 className="title is-1 is-bold is-spaced">
                {t('hero.h1.prefix')}
                <mark className="text-hightlight main">{t('hero.h1.highlight')}</mark>
                {t('hero.h1.suffix')}
              </h1>
              <p className="subtitle is-5 is-muted">Đồng hành cùng phát triển bền vững của doanh nghiệp.</p>
              <div>
                <button type="button" className="button cta primary-btn raised mr-2">
                  Tìm hiểu thêm
                </button>
                <button type="button" className="button cta">
                  Liên hệ
                </button>
              </div>
            </div>

            <div className="column is-6">
              <img
                className="hero-image"
                loading="lazy"
                src="./img/hero/hero-home.jpg"
                alt=""
                style={{
                  WebkitMaskImage: 'url(./img/hero/hero-blob-1.svg)',
                  maskImage: 'url(./img/hero/hero-blob-1.svg)',
                  maskRepeat: 'no-repeat',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
