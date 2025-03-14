import React, { SVGProps } from 'react';
import { useTranslation } from 'next-i18next';
import { Cursor } from '../common/Cursor';
import { Boxes, HardDrive, Lock, Monitor, ScanEye } from 'lucide-react';

const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={26} height={31} fill="none" {...props}>
      <g clipPath="url(#a)">
        <path
          fill={'#c4c4c4'}
          fillRule="evenodd"
          stroke={'#fff'}
          strokeLinecap="square"
          strokeWidth={2}
          d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill={'#22c55e'} d="M0 0h26v31H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card is-bordered has-text-centered is-feature-reveal">
      <Cursor
        attachToParent
        variants={{
          initial: { scale: 0.3, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.3, opacity: 0 },
        }}
        transition={{
          ease: 'easeInOut',
          duration: 0.15,
        }}
        className="left-12 top-4"
      >
        <MouseIcon className="h-6 w-6" />

        <div className="ml-4 mt-1 rounded-[4px] bg-gray-100 px-2 py-0.5 text-gray-800 max-w-[300px]">
          {description}
        </div>
      </Cursor>
      <div className="card-title">
        <h4>{title}</h4>
      </div>
      <div className="card-icon">{icon}</div>
    </div>
  );
};

export const Services = () => {
  const { t } = useTranslation('services');

  const FEATURES = [
    {
      icon: <HardDrive />,
      title: t('feat.cloud.title'),
      description: t('feat.cloud.description'),
    },
    {
      icon: <Lock />,
      title: t('feat.firewall.title'),
      description: t('feat.firewall.description'),
    },
    {
      icon: <ScanEye />,
      title: t('feat.consult.title'),
      description: t('feat.consult.description'),
    },
    {
      icon: <Monitor />,
      title: t('feat.service.title'),
      description: t('feat.service.description'),
    },
    {
      icon: <Boxes />,
      title: t('feat.rescue.title'),
      description: t('feat.rescue.description'),
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
          <div className="columns justify-center">
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
