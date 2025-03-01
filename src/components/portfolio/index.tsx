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
      <a href="#!">
        <img src={src} alt="" />
      </a>
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
    new MiniMasonry({
      container: '.fortfolio-row',
      baseWidth: 400,
      gutter: 10,
    });
  });

  const IMG_METADATA = [
    {
      title: t('feat.1'),
      category: 'Computing',
      src: '/img/portfolio/1.jpg',
    },
    {
      title: t('feat.2'),
      category: 'Firewall',
      src: '/img/portfolio/2.jpg',
    },
    {
      title: t('feat.3'),
      category: 'Solution',
      src: '/img/portfolio/3.jpg',
    },
    {
      title: t('feat.4'),
      category: 'IoT',
      src: '/img/portfolio/4.jpg',
    },
    {
      title: t('feat.5'),
      category: 'Hardware',
      src: '/img/portfolio/5.jpg',
    },
    {
      title: t('feat.6'),
      category: 'Service',
      src: '/img/portfolio/6.jpg',
    },
    {
      title: t('feat.7'),
      category: 'Design',
      src: '/img/portfolio/7.jpg',
    },
    {
      title: t('feat.8'),
      category: 'Disaster Recovery',
      src: '/img/portfolio/8.jpg',
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
