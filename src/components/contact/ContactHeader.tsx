import { motion } from 'motion/react';
import { memo } from 'react';

export const ContactHeader = memo(function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-20"
    >
      <h1
        className="text-5xl md:text-7xl lg:text-8xl mb-6"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
      >
        Vamos criar algo{' '}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500">
          extraordinário
        </span>
      </h1>

      <p className="text-xl text-slate-400">
        Entre em contato e descubra como podemos impulsionar seu negócio
      </p>
    </motion.div>
  );
});