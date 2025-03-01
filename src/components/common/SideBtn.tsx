import { ChevronUp, EllipsisVertical, Languages } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export const SideBtn = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpen(false);
  };

  const handleChangeLocale = () => {
    const currentLocale = router.locale;
    const locale = currentLocale === 'en' ? 'vi' : 'en';

    router.push(router.asPath, router.asPath, { locale, scroll: false });
    setOpen(false);
  };

  return (
    <>
      <button className="side-btn" onClick={() => setOpen(!open)}>
        <EllipsisVertical />
      </button>
      <motion.button
        animate={{ x: !open ? 0 : -60 }}
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        className="side-btn is-second"
        onClick={handleScroll}
      >
        <ChevronUp />
      </motion.button>

      <motion.button
        animate={{ x: !open ? 0 : -120 }}
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        className="side-btn is-third "
        onClick={handleChangeLocale}
      >
        <Languages />
      </motion.button>
    </>
  );
};
