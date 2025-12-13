import { motion } from 'motion/react';
import { memo } from 'react';

export const CTA = memo(function CTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-32 text-center p-12 md:p-16 bg-linear-to-br from-indigo-600/10 to-violet-600/10 border border-indigo-500/20 rounded-3xl"
    >
      <h3
        className="text-3xl md:text-4xl mb-6"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
      >
        Pronto para começar?
      </h3>
      <p className="text-slate-400 text-lg mb-10">
        Vamos conversar sobre como podemos ajudar sua empresa
      </p>

      <motion.button
        className="px-10 py-4 bg-linear-to-r from-indigo-600 to-violet-600 rounded-lg text-white"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Agendar Consultoria
      </motion.button>
    </motion.div>
  );
});