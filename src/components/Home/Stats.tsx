import { motion } from 'motion/react';
import { memo } from 'react';
import { AnimatedCounter } from '../ui/AnimatedCounter';

const statsData = [
  { value: 250, suffix: '+', label: 'Projetos Entregues' },
  { value: 80, suffix: '+', label: 'Clientes Ativos' },
  { value: 8, suffix: '+', label: 'Anos de Mercado' },
  { value: 99, suffix: '%', label: 'Satisfação' },
];

export const Stats = memo(function Stats() {
  return (
    <section className="py-20 border-y border-indigo-500/10 bg-linear-to-r from-indigo-500/5 via-transparent to-violet-500/5 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ backgroundPosition: ['0px 0px', '100px 100px'] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ backgroundImage: `repeating-linear-gradient(45deg, rgba(99, 102, 241, 0.1) 0px, rgba(99, 102, 241, 0.1) 1px, transparent 1px, transparent 20px)` }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative text-center group"
            >
              <div className="relative p-8 bg-slate-900/30 backdrop-blur-xl border border-indigo-500/10 rounded-3xl group-hover:border-indigo-500/30 transition-all">
                <motion.div className="absolute inset-0 bg-linear-to-br from-indigo-500/0 to-violet-500/0 group-hover:from-indigo-500/10 group-hover:to-violet-500/10 rounded-3xl blur-xl -z-10 transition-all duration-500" />
                <div className="text-5xl md:text-6xl mb-3 text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-violet-500 to-purple-500" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-indigo-500/20 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-indigo-500/20 rounded-br-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});