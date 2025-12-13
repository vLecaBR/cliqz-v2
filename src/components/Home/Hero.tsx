import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useRef, memo } from 'react';
import type { Page } from '../../App'; // Ajuste o import conforme necessário

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export const Hero = memo(function Hero({ onNavigate }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Shapes Flutuantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-indigo-500/10 rounded-3xl"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              rotate: i * 45,
              willChange: 'transform'
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [i * 45, i * 45 + 180, i * 45],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="container mx-auto px-4 md:px-6 relative z-10"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 backdrop-blur-xl border border-indigo-500/20 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300 tracking-wide" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}>
              Agência Digital B2B
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}>
              <motion.span
                className="block mb-2"
                animate={{ textShadow: ['0 0 20px rgba(99, 102, 241, 0)', '0 0 40px rgba(99, 102, 241, 0.3)', '0 0 20px rgba(99, 102, 241, 0)'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Tecnologia que
              </motion.span>
              <motion.span
                className="block text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-violet-500 to-purple-500 relative"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                impulsiona resultados
                <motion.div
                  className="absolute -inset-2 bg-linear-to-r from-indigo-500/20 via-violet-500/20 to-purple-500/20 blur-3xl -z-10"
                  animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Desenvolvemos soluções digitais integradas que transformam desafios de negócio em oportunidades de crescimento sustentável.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                onClick={() => onNavigate("services")}
                className="group relative px-8 py-4 bg-linear-to-r from-indigo-600 via-violet-600 to-purple-600 rounded-full overflow-hidden"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div className="absolute inset-0 bg-linear-to-r from-violet-600 via-purple-600 to-indigo-600" animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }} transition={{ duration: 3, repeat: Infinity }} style={{ backgroundSize: '200% 200%' }} />
                <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }} animate={{ x: ['-100%', '200%'] }} transition={{ duration: 1.5, repeat: Infinity }} />
                <span className="relative z-10 flex items-center gap-2 text-white text-lg">
                  Nossos Serviços
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight size={20} /></motion.span>
                </span>
              </motion.button>

              <motion.button
                onClick={() => onNavigate("portfolio")}
                className="group relative px-8 py-4 bg-slate-900/50 backdrop-blur-xl border-2 border-indigo-500/30 rounded-full hover:border-indigo-500/60 transition-all"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white text-lg">Ver Portfólio</span>
                <motion.div className="absolute inset-0 bg-linear-to-r from-indigo-500/0 via-violet-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:via-violet-500/10 group-hover:to-purple-500/10 rounded-full blur-xl -z-10" whileHover={{ scale: 1.2 }} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
});