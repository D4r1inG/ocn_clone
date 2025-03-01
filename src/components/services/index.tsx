import React from 'react';
import { Airplane, Alarm, ArrowRight, Aspect, Cloud } from '../icons';
import { useTranslation } from 'next-i18next';

const FeatureCard = ({ icon, title, description }) => {
  const { t } = useTranslation('services');

  return (
    <div className="feature-card is-bordered has-text-centered is-feature-reveal">
      <div className="card-title">
        <h4>{title}</h4>
      </div>
      <div className="card-icon">{icon}</div>
      <div className="card-text">
        <p>{description}</p>
      </div>
      <div className="card-action">
        <a href="#" className="button btn-align-md primary-btn raised">
          {t('btn')}
          <ArrowRight className="bi bi-arrow-right-short" />
        </a>
      </div>
    </div>
  );
};

export const Services = () => {
  const { t } = useTranslation('services');

  const FEATURES = [
    {
      icon: <Cloud className="bi bi-cloud" />,
      title: t('feat.cloud.title'),
      description: t('feat.cloud.description'),
    },
    {
      icon: <Aspect className="bi bi-aspect-ratio" />,
      title: t('feat.firewall.title'),
      description: t('feat.firewall.description'),
    },
    {
      icon: <Airplane className="bi bi-airplane-engines" />,
      title: t('feat.consult.title'),
      description: t('feat.consult.description'),
    },
    {
      icon: <Alarm className="bi bi-alarm" />,
      title: t('feat.service.title'),
      description: t('feat.service.description'),
    },
    {
      icon: <Alarm className="bi bi-alarm" />,
      title: t('feat.rescue.title'),
      description: t('feat.rescue.description'),
    },
    {
      icon: <Alarm className="bi bi-alarm" />,
      title: t('feat.hardware.title'),
      description: t('feat.hardware.description'),
    },
  ];

  return (
    <section id="scrollspyServices" className="section is-medium">
      <div className="container">
        <div className="title-wrapper has-text-centered">
          <h2 className="title is-2">
            <span
              dangerouslySetInnerHTML={{
                __html: t('title.prefix').replace('\n', '<br />'),
              }}
            />{' '}
            <mark className="text-hightlight">{t('title.highlight')}</mark> {t('title.suffix')}
          </h2>
          <div className="divider is-centered" />
        </div>
        <div className="feature-cards content-wrapper">
          <div className="columns">
            {FEATURES.slice(0, 3).map((feature, index) => (
              <div className="column is-4" key={index}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
          <div className="columns">
            {FEATURES.slice(3).map((feature, index) => (
              <div className="column is-4" key={index}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
