import { motion } from 'motion/react';
import { Lightbulb, Target, Code2, Rocket } from 'lucide-react';
import { memo } from 'react';

const methodologyData = [
  { step: '01', title: 'Descoberta', description: 'Análise profunda do seu negócio, objetivos e desafios para criar uma estratégia personalizada.', icon: Lightbulb },
  { step: '02', title: 'Estratégia', description: 'Planejamento detalhado com roadmap, arquitetura técnica e definição de KPIs mensuráveis.', icon: Target },
  { step: '03', title: 'Desenvolvimento', description: 'Execução ágil com sprints semanais, testes contínuos e entregas incrementais.', icon: Code2 },
  { step: '04', title: 'Lançamento', description: 'Deploy estratégico com monitoramento, otimização contínua e suporte dedicado.', icon: Rocket },
];

export const MethodologySection = memo(function MethodologySection() {
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
        Nossa Metodologia
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {methodologyData.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="relative p-8 bg-linear-to-br from-slate-900/50 to-slate-900/30 border border-slate-800/50 rounded-2xl hover:border-indigo-500/50 transition-all"
          >
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-linear-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
              <span className="text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}>
                {step.step}
              </span>
            </div>

            <div className="w-14 h-14 mb-6 rounded-xl bg-slate-800/50 flex items-center justify-center">
              <step.icon className="text-indigo-400" size={28} />
            </div>

            <h3 className="text-xl mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}>
              {step.title}
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
});