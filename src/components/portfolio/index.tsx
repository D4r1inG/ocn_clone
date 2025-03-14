import React, { useEffect } from 'react';
import MiniMasonry from 'minimasonry';
import { useTranslation } from 'next-i18next';
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogDescription,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogTitle,
  MorphingDialogTrigger,
} from '../common/MDialog';

interface ImageItemProps {
  title: string;
  category: string;
  src: string;
  content?: string;
}

const ImageItem: React.FC<ImageItemProps> = ({ title, category, src, content }) => {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: '12px',
        }}
        className="relative flex max-w-full flex-col overflow-hidden border"
      >
        <MorphingDialogImage src={src} alt="" className="h-[200px] lg:h-[300px] w-full object-cover" />
        <div className="flex grow flex-col w-full px-3 py-2 absolute bottom-0 left-0 bg-black/40">
          <MorphingDialogTitle className="text-gray-100 font-bold">{title}</MorphingDialogTitle>
          <MorphingDialogSubtitle className="text-gray-100 text-sm">{category}</MorphingDialogSubtitle>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="!rounded-2xl pointer-events-auto relative z-[100] flex flex-col lg:flex-row overflow-hidden bg-white h-fit lg:h-[400px] w-[90%] lg:w-[800px]">
          <MorphingDialogImage
            src={src}
            alt=""
            className="h-[200px] w-full lg:h-full lg:w-[400px] object-cover shrink-0"
          />
          <div className="p-4 border border-gray-100 border-solid">
            <MorphingDialogTitle className="text-2xl text-black font-bold">{title}</MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-black text-sm">{category}</MorphingDialogSubtitle>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <p className="mt-20 text-gray-700">{content}</p>
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className="text-white lg:text-black" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
};

export const Portfolio = () => {
  const { t } = useTranslation('portfolio');

  const IMG_METADATA = [
    {
      title: t('feat.1'),
      category: 'Computing',
      content: t('content.1'),
      src: '/img/portfolio/project-landscape-1.jpg',
    },
    {
      title: t('feat.2'),
      category: 'Firewall',
      content: t('content.2'),
      src: '/img/portfolio/project-portrait-1.jpg',
    },
    {
      title: t('feat.3'),
      category: 'Solution',
      content: t('content.3'),
      src: '/img/portfolio/project-landscape-2.jpg',
    },
    {
      title: t('feat.4'),
      category: 'IoT',
      content: t('content.4'),
      src: '/img/portfolio/project-portrait-2.jpg',
    },
    {
      title: t('feat.5'),
      category: 'Hardware',
      content: t('content.5'),
      src: '/img/portfolio/project-portrait-3.jpg',
    },
    {
      title: t('feat.6'),
      category: 'Service',
      content: t('content.6'),
      src: '/img/portfolio/project-portrait-4.jpg',
    },
    {
      title: t('feat.7'),
      category: 'Design',
      content: t('content.7'),
      src: '/img/portfolio/project-landscape-3.jpg',
    },
    {
      title: t('feat.8'),
      category: 'Disaster Recovery',
      content: t('content.8'),
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
          <div className="columns">
            {IMG_METADATA.slice(0, 3).map((metadata, index) => (
              <div key={index} className="column is-4">
                <ImageItem {...metadata} />
              </div>
            ))}
          </div>
          <div className="columns justify-center">
            {IMG_METADATA.slice(3, 6).map((metadata, index) => (
              <div key={index} className="column is-4">
                <ImageItem {...metadata} />
              </div>
            ))}
          </div>

          <div className="columns justify-center">
            {IMG_METADATA.slice(6).map((metadata, index) => (
              <div key={index} className="column is-4">
                <ImageItem {...metadata} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
