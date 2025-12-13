import { motion } from 'motion/react';
import { memo } from 'react';
import { Counter } from '../ui/Counter';
import type { ProjectResult } from './projectDetailData';

interface ProjectResultsProps {
  results: ProjectResult[];
}

export const ProjectResults = memo(function ProjectResults({ results }: ProjectResultsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2
        className="text-3xl mb-12 text-center"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
      >
        Resultados e <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500">Impacto</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {results.map((result, index) => {
          const Icon = result.icon;
          const improvement = result.before > 0 ? ((result.after - result.before) / result.before) * 100 : result.after;
          const maxVal = Math.max(result.before, result.after);

          return (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-slate-900/30 border border-slate-800/50 rounded-2xl hover:border-indigo-500/50 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-slate-400 text-sm mb-2">{result.label}</p>
                  <div className="flex items-baseline gap-3">
                    <span
                      className="text-5xl text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
                    >
                      {result.unit === 'R$' && result.unit}
                      <Counter value={result.after} unit={result.unit} type={result.unit === 'R$' ? 'currency' : 'default'} />
                      {result.unit !== 'R$' && result.unit}
                    </span>
                    {improvement > 0 && (
                      <span className="text-green-400">+{improvement.toFixed(0)}%</span>
                    )}
                  </div>
                </div>
                <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center">
                  <Icon className="text-indigo-400" size={24} />
                </div>
              </div>

              {/* Progress bars */}
              <div className="space-y-3">
                <ProgressBar label="ANTES" value={result.before} max={maxVal} unit={result.unit} colorClass="bg-red-500" />
                <ProgressBar label="DEPOIS" value={result.after} max={maxVal} unit={result.unit} colorClass="bg-linear-to-r from-indigo-500 to-violet-500" delay={0.3} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
});

// Sub-componente para barra de progresso
const ProgressBar = ({ label, value, max, unit, colorClass, delay = 0 }: any) => (
  <div>
    <div className="flex justify-between text-xs text-slate-500 mb-2">
      <span>{label}</span>
      <span>{unit === 'R$' && unit}{value}{unit !== 'R$' && unit}</span>
    </div>
    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${(value / max) * 100}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay }}
        className={`h-full ${colorClass} rounded-full`}
      />
    </div>
  </div>
);