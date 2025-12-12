import { motion } from 'motion/react';
import { memo } from 'react';

const statsData = [
  { number: '250+', label: 'Projetos Entregues' },
  { number: '80+', label: 'Clientes Ativos' },
  { number: '8+', label: 'Anos de Experiência' },
  { number: '99%', label: 'Satisfação' },
];

export const AboutStats = memo(function AboutStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
      {statsData.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="p-8 bg-slate-900/30 border border-slate-800/50 rounded-2xl text-center"
        >
          <div
            className="text-5xl mb-3 text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            {stat.number}
          </div>
          <div className="text-slate-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
});