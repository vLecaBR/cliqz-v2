import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { memo } from 'react';

const differentialsData = [
  'Equipe multidisciplinar de 40+ especialistas',
  'Metodologia ágil adaptada ao contexto B2B',
  'Acompanhamento de resultados em tempo real',
  'Suporte técnico premium 24/7',
  'Workshops e treinamento inclusos',
  'Garantia de satisfação de 30 dias',
];

export const DifferentialsSection = memo(function DifferentialsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h2
        className="text-4xl md:text-5xl mb-16 text-center"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
      >
        Nossos Diferenciais
      </h2>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentialsData.map((differential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3 p-6 bg-slate-900/30 border border-slate-800/50 rounded-xl hover:border-indigo-500/50 transition-all"
            >
              <Sparkles className="text-indigo-500 shrink-0 mt-1" size={20} />
              <p className="text-slate-300">{differential}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
});