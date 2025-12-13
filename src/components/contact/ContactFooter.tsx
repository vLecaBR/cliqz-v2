import { motion } from 'motion/react';
import { memo } from 'react';

export const ContactFooter = memo(function ContactFooter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto p-12 md:p-16 bg-linear-to-br from-indigo-600/10 to-violet-600/10 border border-indigo-500/20 rounded-3xl text-center"
    >
      <h2
        className="text-3xl md:text-4xl mb-6"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
      >
        Resposta em até 24 horas
      </h2>
      <p className="text-slate-400 text-lg mb-8">
        Nossa equipe está pronta para entender suas necessidades e propor soluções personalizadas.
      </p>

      <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span>Online agora</span>
        </div>
        <div>Segunda a Sexta: 9h - 18h</div>
        <div>Atendimento em PT e EN</div>
      </div>
    </motion.div>
  );
});