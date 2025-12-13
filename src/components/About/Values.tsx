import { motion } from 'motion/react';
import { Target, Zap, Users, Award } from 'lucide-react';
import { memo } from 'react';

const valuesData = [
  { icon: Target, title: 'Foco em Resultados', description: 'Cada decisão é guiada por dados e objetivos mensuráveis de negócio.' },
  { icon: Zap, title: 'Inovação Constante', description: 'Utilizamos as tecnologias mais avançadas para entregar soluções de ponta.' },
  { icon: Users, title: 'Parceria Estratégica', description: 'Trabalhamos lado a lado com nossos clientes como verdadeiros parceiros.' },
  { icon: Award, title: 'Excelência Técnica', description: 'Comprometidos com a qualidade máxima em cada linha de código.' },
];

export const Values = memo(function Values () {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-32"
    >
      <h2
        className="text-4xl md:text-5xl mb-16 text-center"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
      >
        Nossos Valores
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {valuesData.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="p-8 bg-slate-900/30 border border-slate-800/50 rounded-2xl hover:border-indigo-500/50 transition-all"
          >
            <div className="w-14 h-14 mb-6 rounded-xl bg-linear-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
              <value.icon className="text-white" size={28} />
            </div>

            <h3 className="text-xl mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}>
              {value.title}
            </h3>
            <p className="text-slate-400 leading-relaxed">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
});