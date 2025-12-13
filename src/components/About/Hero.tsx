import { motion } from 'motion/react';
import { memo } from 'react';

export const Hero = memo(function Hero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <h1
          className="text-5xl md:text-7xl mb-6"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
        >
          Sobre a <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500">CliqZ</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Somos uma agência digital B2B focada em entregar soluções tecnológicas que geram resultados reais.
        </p>
      </motion.div>
    </>
  );
});

export const MissionSection = memo(function MissionSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-32 max-w-4xl mx-auto text-center p-12 md:p-16 bg-linear-to-br from-indigo-600/10 to-violet-600/10 border border-indigo-500/20 rounded-3xl"
    >
      <h2
        className="text-4xl md:text-5xl mb-8"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
      >
        Nossa Missão
      </h2>
      <p className="text-lg text-slate-400 leading-relaxed">
        Impulsionar a transformação digital de empresas através de soluções inovadoras que combinam 
        tecnologia de ponta, design excepcional e estratégias baseadas em dados. Acreditamos que o 
        futuro é construído hoje, e estamos aqui para liderar essa mudança.
      </p>
    </motion.div>
  );
});