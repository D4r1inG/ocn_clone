import React from 'react';
import { useTranslation } from 'next-i18next';

const TEAM = [
  {
    name: 'Zeron',
    role: 'Product Manager',
    image: './img/team/team1.svg',
  },
  {
    name: 'OceanD',
    role: 'Service Manager',
    image: './img/team/team2.svg',
  },
  {
    name: 'BunVN',
    role: 'Hardware Manager',
    image: './img/team/team3.svg',
  },
  {
    name: 'Nastago',
    role: 'Network Manager',
    image: './img/team/team4.svg',
  },
];

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  key: any;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image }) => {
  return (
    <div className="column is-3">
      <div className="flex justify-center bg-white border border-b-0 border-gray-100 border-solid pt-3">
        <img className="img-fluid" loading="lazy" src={image} alt="" />
      </div>
      <div className="feature-card is-bordered has-text-centered is-feature-reveal">
        <div className="card-title">
          <h4>{name}</h4>
        </div>
        <p>{role}</p>
      </div>
    </div>
  );
};

export const Team = () => {
  const { t } = useTranslation('team');

  return (
    <section id="scrollspyTeam" className="section section-feature-grey is-medium">
      <div className="container">
        <div className="title-wrapper has-text-centered">
          <h2 className="title is-2">
            {t('title.prefix')} <br />
            {t('title.highlight')}
          </h2>
          <div className="divider is-centered" />
        </div>
      </div>

      <div className="container mt-60">
        <div className="content-wrapper">
          <div className="columns is-multiline icon-list">
            {TEAM.map((item, index) => (
              <TeamCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
