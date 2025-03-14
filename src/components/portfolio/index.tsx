import React, { useEffect } from 'react';
import MiniMasonry from 'minimasonry';
import { useTranslation } from 'next-i18next';

interface ImageItemProps {
  title: string;
  category: string;
  src: string;
  key: any;
}

const ImageItem: React.FC<ImageItemProps> = ({ title, category, src }) => {
  return (
    <figure
      style={{
        position: 'absolute',
      }}
    >
      <img src={src} alt="" />
      <figcaption>
        <h3 className="title is-2 is-bold light-text text-center">{title}</h3>
        <div className="light-gray-text">{category}</div>
      </figcaption>
    </figure>
  );
};

export const Portfolio = () => {
  const { t } = useTranslation('portfolio');

  useEffect(() => {
    setTimeout(() => {
      new MiniMasonry({
        container: '.fortfolio-row',
        baseWidth: 330,
        gutter: 10,
      });
    }, 300);
  });

  const IMG_METADATA = [
    {
      title: t('feat.1'),
      category: 'Computing',
      src: '/img/portfolio/project-landscape-1.jpg',
    },
    {
      title: t('feat.2'),
      category: 'Firewall',
      src: '/img/portfolio/project-portrait-1.jpg',
    },
    {
      title: t('feat.3'),
      category: 'Solution',
      src: '/img/portfolio/project-landscape-2.jpg',
    },
    {
      title: t('feat.4'),
      category: 'IoT',
      src: '/img/portfolio/project-portrait-2.jpg',
    },
    {
      title: t('feat.5'),
      category: 'Hardware',
      src: '/img/portfolio/project-portrait-3.jpg',
    },
    {
      title: t('feat.6'),
      category: 'Service',
      src: '/img/portfolio/project-portrait-4.jpg',
    },
    {
      title: t('feat.7'),
      category: 'Design',
      src: '/img/portfolio/project-landscape-3.jpg',
    },
    {
      title: t('feat.8'),
      category: 'Disaster Recovery',
      src: '/img/portfolio/project-landscape-4.jpg',
    },
  ];

  return (
    <section id="scrollspyPortfolio" className="section is-medium">
      <div className="container">
        <div className="title-wrapper has-text-centered">
          <h2 className="title is-2">
            {t('title.prefix')} <mark className="text-hightlight"> {t('title.highlight')}</mark>{' '}
            {t('title.suffix')}
          </h2>
          <div className="divider is-centered" />
        </div>

        <div className="content-wrapper">
          <div className="fortfolio-row">
            {IMG_METADATA.map((metadata, index) => (
              <ImageItem key={index} {...metadata} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
