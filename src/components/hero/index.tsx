import React from 'react';
import { useTranslation } from 'next-i18next';

export const Hero = () => {
  const { t } = useTranslation('common');

  return (
    <section id="scrollspyHero" className="bsb-hero-2 bsb-tpl-bg-blue py-5 py-xl-8 py-xxl-10">
      <div className="container overflow-hidden">
        <div className="row gy-3 gy-lg-0 align-items-lg-center justify-content-lg-between">
          <div className="col-12 col-lg-6 order-1 order-lg-0">
            <h1 className="display-3 fw-bolder mb-3">
              {t('hero.h1.prefix')}
              <mark className="text-accent bsb-tpl-highlight">{t('hero.h1.highlight')}</mark>
              {t('hero.h1.suffix')}
            </h1>
            <p className="fs-4 mb-5">Đồng hành cùng phát triển bền vững của doanh nghiệp.</p>
            <div className="d-grid gap-2 d-sm-flex">
              <button type="button" className="btn btn-primary bsb-btn-3xl rounded-pill">
                Tìm hiểu thêm
              </button>
              <button type="button" className="btn btn-outline-primary bsb-btn-3xl rounded-pill">
                Liên hệ
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-5 text-center">
            <img
              className="img-fluid"
              loading="lazy"
              src="./img/hero/hero-home.jpg"
              alt=""
              style={{
                WebkitMaskImage: 'url(./img/hero/hero-blob-1.svg)',
                maskImage: 'url(./img/hero/hero-blob-1.svg)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
