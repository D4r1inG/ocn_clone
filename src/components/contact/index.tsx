import React from 'react';
import { Envelope, Location, Phone } from '../icons';
import { useTranslation } from 'next-i18next';

export const Contact = () => {
  const { t } = useTranslation('contact');

  return (
    <section id="scrollspyContact" className="section is-medium">
      <div className="container">
        <div className="contact-main">
          <img className="img-fluid rounded" loading="lazy" src="./img/contact/contact-img-1.jpg" alt="" />

          <div className="contact-content">
            <div className="title-wrapper">
              <h2 className="title is-2">{t('title.prefix')}</h2>
              <div className="divider is-centered" />
            </div>
            <p className="lead fs-4 mb-5 text-center text-gray-700 mt-4">{t('title.highlight')}</p>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="text-primary">
                  <Location />
                </div>
                <div>
                  <h4>{t('location.title')}</h4>
                  <address className="subtitle is-5 is-muted">{t('location.detail')}</address>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="text-primary">
                  <Phone />
                </div>
                <div>
                  <h4 className="mb-3">{t('phone')}</h4>
                  <p className="mb-0">
                    <a className="subtitle is-5 is-muted" href="tel:+15057922430">
                      (+84)376332287
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="text-primary">
                  <Envelope />
                </div>
                <div>
                  <h4 className="mb-3">{t('email')}</h4>
                  <p>
                    <a className="subtitle is-5 is-muted" href="mailto:info@ocn.com.vn">
                      info@ocn.com.vn
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
