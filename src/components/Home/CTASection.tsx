import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { memo } from 'react';
import type { Page } from '../../App';

interface CTAProps {
  onNavigate: (page: Page) => void;
}

export const CTASection = memo(function CTASection({ onNavigate }: CTAProps) {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto text-center p-12 md:p-20 bg-linear-to-br from-indigo-600/20 via-violet-600/20 to-purple-600/20 backdrop-blur-2xl border border-indigo-500/30 rounded-3xl overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
          />
          <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-violet-500/10 to-purple-500/10 blur-3xl" />
          <div className="relative z-10">
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 backdrop-blur-xl border border-indigo-500/30 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-indigo-300" />
              <span className="text-sm text-indigo-200">Vamos Trabalhar Juntos</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}>
              Pronto para transformar <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-violet-400 to-purple-400">seu negócio?</span>
            </h2>
            <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto">Vamos conversar sobre como podemos ajudar sua empresa a alcançar novos patamares</p>
            <motion.button
              onClick={() => onNavigate("contact")}
              className="group relative px-10 py-5 bg-linear-to-r from-indigo-600 via-violet-600 to-purple-600 rounded-full overflow-hidden"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(99, 102, 241, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }} animate={{ x: ['-100%', '200%'] }} transition={{ duration: 2, repeat: Infinity }} />
              <span className="relative z-10 text-white text-lg flex items-center gap-2">Iniciar Conversa <Sparkles className="w-5 h-5" /></span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
});