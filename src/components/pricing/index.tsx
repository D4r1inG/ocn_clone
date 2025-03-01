import React from 'react';
import { BusinessPrice, Check, StarterPrice } from '../icons';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';

interface PriceCardProps {
  title: string;
  features: string[];
  hotFeatures: number[];
  icon: React.ReactNode;
  key: any;
}

const PriceCard: React.FC<PriceCardProps> = ({ title, features, hotFeatures, icon }) => {
  const { t } = useTranslation('pricing');
  const isBusiness = features.length === 5;

  return (
    <div className="feature-card is-pricing has-text-centered">
      <div>
        <h3 className="plan-name">{title}</h3>
        <div>{icon}</div>
        <div className="title is-2 mb-0">{t('price')}</div>
        <div className="mb-20">{t('unit')}</div>
        <div className="pos-left is-f-col">
          {features.map((feature, index) => (
            <p key={index} className={cn({ 'text-primary is-bold': hotFeatures.includes(index) })}>
              <Check /> {feature}
            </p>
          ))}
        </div>
      </div>

      <a
        className={cn('button cta is-fullwidth is-bold', {
          'primary-btn raised is-bold': isBusiness,
        })}
      >
        {t('btn2')}
      </a>
    </div>
  );
};

export const Pricing = () => {
  const { t } = useTranslation('pricing');

  const PRICES = [
    {
      title: t('packs.1.name'),
      features: [t('packs.1.feat.1'), t('packs.1.feat.2'), t('packs.1.feat.3'), t('packs.1.feat.4')],
      hotFeatures: [3],
      icon: <StarterPrice />,
    },
    {
      title: t('packs.2.name'),
      features: [
        t('packs.2.feat.1'),
        t('packs.2.feat.2'),
        t('packs.2.feat.3'),
        t('packs.2.feat.4'),
        t('packs.2.feat.5'),
      ],

      hotFeatures: [3, 4],
      icon: <BusinessPrice />,
    },
  ];

  return (
    <section id="scrollspyPricing" className="section section-feature-grey is-medium">
      <div className="container">
        <div className="title-wrapper has-text-centered">
          <h2 className="title is-2">{t('title.prefix')}</h2>
          <h3 className="subtitle is-5 is-muted">{t('title.highlight')}</h3>
          <div className="divider is-centered" />
        </div>
        <div className="pricing-wrap">
          {PRICES.map((item, index) => (
            <PriceCard {...item} key={index} />
          ))}
        </div>
        <div className="has-text-centered mt-80">
          <button className="button signup-button secondary-btn raised long">{t('btn')}</button>
        </div>
      </div>
    </section>
  );
};
