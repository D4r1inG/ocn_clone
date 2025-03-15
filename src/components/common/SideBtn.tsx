import { ChevronUp } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

export const SideBtn = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 40 }}
      className="side-btn is-second"
      onClick={handleScroll}
    >
      <ChevronUp />
    </motion.button>
  );
};
