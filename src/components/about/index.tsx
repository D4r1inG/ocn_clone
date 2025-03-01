import React from 'react';
import { CloudMoon, Droplet, HeartPulse, OptimizeCost, PersonAdd, Services, Worker } from '../icons';
import { useTranslation } from 'next-i18next';

interface AchievementItemProps {
  title: string;
  count: string;
  icon: React.ReactNode;
  key: any;
}

const AchievementItem: React.FC<AchievementItemProps> = ({ title, count, icon }) => {
  return (
    <div className="column is-3">
      <div className="feature-icon has-text-centered">
        <div className="icon-wrap is-icon-reveal">{icon}</div>
        <h2 className="title is-2">{count}</h2> <p className="is-5 is-muted">{title}</p>
      </div>
    </div>
  );
};

export const About = () => {
  const { t } = useTranslation('about');

  const ACHIVEMENTS = [
    { title: t('achivements.1'), count: '30+', icon: <PersonAdd /> },
    { title: t('achivements.2'), count: '50+', icon: <HeartPulse /> },
    { title: t('achivements.3'), count: '10+', icon: <Droplet /> },
    { title: t('achivements.4'), count: '3+', icon: <CloudMoon /> },
  ];

  return (
    <section id="scrollspyAbout" className="section is-medium section-feature-grey">
      <div className="container">
        <div className="title-wrapper has-text-centered">
          <h2 className="title is-2">{t('title.prefix')}</h2>
          <h3 className="subtitle is-5 is-muted mt-20">{t('title.highlight')} </h3>
          <div className="divider is-centered" />
        </div>
        <div className="columns is-vcentered side-feature mt-80">
          <div className="column is-5 is-offset-1">
            <h3 className="title is-3 mb-10 is-title-reveal">{t('reasons.1.title')}</h3>
            <p className="subtitle is-5 is-muted">{t('reasons.1.description')}</p>
          </div>
          <div className="column is-5 pos-right ">
            <OptimizeCost />
          </div>
        </div>

        <div className="columns is-vcentered side-feature mt-80 is-not-reversed">
          <div className="column is-5 is-offset-1 pos-left">
            <Worker />
          </div>
          <div className="column is-5 is-offset-1">
            <h3 className="title is-3 mb-10 is-title-reveal">{t('reasons.2.title')}</h3>
            <p className="subtitle is-5 is-muted">{t('reasons.2.description')}</p>
          </div>
        </div>

        <div className="columns is-vcentered side-feature mt-80">
          <div className="column is-5 is-offset-1">
            <h3 className="title is-3 mb-10 is-title-reveal">{t('reasons.3.title')}</h3>
            <p className="subtitle is-5 is-muted">{t('reasons.3.description')}</p>
          </div>
          <div className="column is-5 pos-right">
            <Services />
          </div>
        </div>
      </div>

      <div className="container mt-60">
        <div className="content-wrapper">
          <div className="columns is-multiline icon-list">
            {ACHIVEMENTS.map((item, index) => (
              <AchievementItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
