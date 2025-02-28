import React from 'react';

const TEAM = [
  {
    name: 'Zeron',
    role: 'Product Manager',
    image: './img/team/team-img-1.jpg',
  },
  {
    name: 'OceanD',
    role: 'Service Manager',
    image: './img/team/team-img-2.jpg',
  },
  {
    name: 'BunVN',
    role: 'Hardware Manager',
    image: './img/team/team-img-3.jpg',
  },
  {
    name: 'Nastago',
    role: 'Network Manager',
    image: './img/team/team-img-4.jpg',
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
      <img className="img-fluid" loading="lazy" src={image} alt="" />
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
  return (
    <section id="scrollspyTeam" className="section is-medium">
      <div className="container">
        <div className="title-wrapper has-text-centered">
          <h2 className="title is-2">
            Đội ngũ <br />
            <mark className="text-hightlight">sáng tạo, nhiều kinh nghiệm</mark>
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
