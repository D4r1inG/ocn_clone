import React, { useRef } from 'react';
import { useTranslation } from 'next-i18next';
import { useScroll, motion, useTransform } from 'framer-motion';
import { CloudCog, Database, ScanEye, ShieldCheck } from 'lucide-react';
import cn from 'classnames';

export const AboutAlt = () => {
  const { t } = useTranslation('about');

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const CARDS = [
    {
      id: 1,
      Icon: ScanEye,
      title: t('product.1.title'),
      description: t('product.1.description'),
    },
    {
      id: 2,
      Icon: CloudCog,
      title: t('product.2.title'),
      description: t('product.2.description'),
    },
    {
      id: 3,
      Icon: ShieldCheck,
      title: t('product.3.title'),
      description: t('product.3.description'),
    },
    {
      id: 4,
      Icon: Database,
      title: t('product.4.title'),
      description: t('product.4.description'),
    },
  ];

  return (
    <>
      <div className="section is-medium">
        <div className="container">
          <div className="title-wrapper has-text-centered">
            <h2 className="title is-2">{t('title.prefix')}</h2>
            <h3 className="subtitle is-5 is-muted mt-20">{t('title.highlight')} </h3>
            <div className="divider is-centered" />
          </div>
        </div>
      </div>
      <div ref={ref} className="relative mt-16">
        {CARDS.map((c, idx) => (
          <Card
            key={c.id}
            card={c}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
            length={CARDS.length}
          />
        ))}
      </div>
    </>
  );
};

interface CardProps {
  position: number;
  card: {
    id: number;
    Icon: React.FC<any>;
    title: string;
    description: string;
  };
  scrollYProgress: any;
  key: any;
  length: number;
}

const Card: React.FC<CardProps> = ({ position, card, scrollYProgress, length }) => {
  const scaleFromPct = (position - 1) / length;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  const isOddCard = position % 2;

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y: position === length ? undefined : y,
        background: isOddCard ? '#f1f1f1' : 'white',
      }}
      className="sticky top-28 flex w-full origin-top flex-col items-center justify-center px-4 text-gray-800"
    >
      <card.Icon className={cn('w-20 h-20 mb-8')} />
      <h3 className="mb-6 text-center text-4xl font-semibold md:text-6xl">
        <mark className="text-hightlight">{card.title}</mark>
      </h3>
      <p className="mb-8 w-[80%] mx-auto text-center text-sm md:text-base">{card.description}</p>
    </motion.div>
  );
};

const CARD_HEIGHT = 500;
