import { ChevronUp } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

export const SideBtn = () => {
  const [isTop, setIsTop] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    handleScroll();
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ y: isTop ? 100 : 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 40 }}
      className="side-btn is-second"
      onClick={handleScroll}
    >
      <ChevronUp />
    </motion.button>
  );
};
