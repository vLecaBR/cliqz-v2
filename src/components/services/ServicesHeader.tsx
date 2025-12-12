import { motion } from 'motion/react';
import { memo } from 'react';

export const ServicesHeader = memo(function ServicesHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-24"
    >
      <h1
        className="text-5xl md:text-7xl mb-6"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
      >
        Nossos <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500">Serviços</span>
      </h1>
      <p className="text-xl text-slate-400 max-w-3xl mx-auto">
        Soluções integradas para impulsionar seu crescimento digital
      </p>
    </motion.div>
  );
});