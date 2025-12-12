import { motion } from 'motion/react';
import { memo } from 'react';

interface ProjectContentProps {
  overview: string;
  challenge: string;
  solution: string;
}

export const ProjectContent = memo(function ProjectContent({ overview, challenge, solution }: ProjectContentProps) {
  return (
    <>
      {/* Overview Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2
          className="text-3xl mb-6"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
        >
          Visão Geral do Projeto
        </h2>
        <div className="p-8 md:p-10 bg-linear-to-br from-indigo-600/5 to-violet-600/5 border border-indigo-500/20 rounded-2xl">
          <p className="text-slate-300 text-lg leading-relaxed">{overview}</p>
        </div>
      </motion.div>

      {/* Challenge & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 bg-red-600/5 border border-red-500/20 rounded-2xl"
        >
          <h2
            className="text-2xl mb-6 text-red-400"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Desafio
          </h2>
          <p className="text-slate-300 leading-relaxed">{challenge}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-8 md:p-10 bg-linear-to-br from-indigo-600/10 to-violet-600/10 border border-indigo-500/20 rounded-2xl"
        >
          <h2
            className="text-2xl mb-6 text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-violet-400"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Solução
          </h2>
          <p className="text-slate-300 leading-relaxed">{solution}</p>
        </motion.div>
      </div>
    </>
  );
});