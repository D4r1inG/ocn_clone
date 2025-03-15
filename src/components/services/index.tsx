import React from 'react';
import { useTranslation } from 'next-i18next';
import { Boxes, HardDrive, Lock, Monitor, ScanEye } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, index }) => {
  const [hasHover, setHasHover] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHasHover(true)}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          delay: hasHover ? 0 : index * 0.2,
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -4,
        borderColor: '#fff',
        boxShadow: '0 20px 15px -12px rgba(0, 0, 0, 0.25)',
        transition: { duration: 0.3 },
      }}
      className="is-bordered border-2 border-gray-200 border-solid p-6 rounded-2xl"
    >
      <div className="card-icon text-black mb-4">{icon}</div>
      <h4 className="font-bold text-2xl w-fit whitespace-nowrap">{title}</h4>
      <div className="line-clamp-2 text-gray-400" title={description}>
        {description}
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const { t } = useTranslation('services');

  const FEATURES = [
    {
      icon: <HardDrive width={32} height={32} />,
      title: t('feat.cloud.title'),
      description: t('feat.cloud.description'),
    },
    {
      icon: <Lock width={32} height={32} />,
      title: t('feat.firewall.title'),
      description: t('feat.firewall.description'),
    },
    {
      icon: <ScanEye width={32} height={32} />,
      title: t('feat.consult.title'),
      description: t('feat.consult.description'),
    },
    {
      icon: <Monitor width={32} height={32} />,
      title: t('feat.service.title'),
      description: t('feat.service.description'),
    },
    {
      icon: <Boxes width={32} height={32} />,
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
            {t('title.highlight')} {t('title.suffix')}
          </h2>
          <div className="divider is-centered" />
        </div>
        <div className="feature-cards content-wrapper">
          <div className="columns">
            {FEATURES.slice(0, 3).map((feature, index) => (
              <div className="column is-4" key={index}>
                <FeatureCard {...feature} index={index} />
              </div>
            ))}
          </div>
          <div className="columns justify-center">
            {FEATURES.slice(3).map((feature, index) => (
              <div className="column is-6" key={index}>
                <FeatureCard {...feature} index={index + 3} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
