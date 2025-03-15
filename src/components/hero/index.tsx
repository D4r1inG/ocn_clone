import React from 'react';
import { useTranslation } from 'next-i18next';
import { Header } from '../common/Header';

// A9D1F2

export const Hero = () => {
  const { t } = useTranslation('hero');

  return (
    <section id="scrollspyHero" className="hero is-fullheight relative">
      <div
        className="absolute inset-0 rotate-180"
        style={{
          backgroundImage: 'url(./img/hero/original.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Header />
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6 landing-caption">
              <h1 className="title is-1 is-bold is-spaced !text-white">
                {t('title.prefix')}
                <mark className="text-hightlight main !text-white">{t('title.highlight')}</mark>
                {t('title.suffix')}
              </h1>
              <p className="subtitle is-5 is-muted mt-3 mb-8 !text-white"> {t('p')}</p>
              <div>
                <button type="button" className="button cta primary-btn raised mr-4">
                  {t('btn1')}
                </button>
                <button type="button" className="button cta">
                  {t('btn2')}
                </button>
              </div>
            </div>

            <div className="column is-6">
              <img
                className="hero-image"
                loading="lazy"
                src="./img/hero/hero-home.png"
                alt=""
                // style={{
                //   WebkitMaskImage: 'url(./img/hero/hero-blob-1.svg)',
                //   maskImage: 'url(./img/hero/hero-blob-1.svg)',
                //   maskRepeat: 'no-repeat',
                // }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
