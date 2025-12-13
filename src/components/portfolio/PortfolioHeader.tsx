import { motion } from 'motion/react';
import { memo } from 'react';

export const PortfolioHeader = memo(function PortfolioHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <h1
        className="text-5xl md:text-7xl mb-6"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
      >
        Nosso <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500">Portfólio</span>
      </h1>
      <p className="text-xl text-slate-400">
        Projetos que geraram resultados reais
      </p>
    </motion.div>
  );
});