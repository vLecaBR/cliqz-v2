import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, TrendingUp, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback, memo } from 'react';
import type { Page } from '../../App';

interface FeaturedProjectsProps {
  onNavigate: (page: Page, projectId?: string) => void;
}

const projectsData = [
  { id: 'ecommerce-ai', title: 'E-commerce Inteligente', category: 'IA + Dev', image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop', metric: '+320%', metricLabel: 'Conversão' },
  { id: 'chatbot-whatsapp', title: 'Chatbot WhatsApp B2B', category: 'Inteligência Artificial', image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&h=800&fit=crop', metric: '80%', metricLabel: 'Automação' },
  { id: 'brand-redesign', title: 'Redesign de Marca', category: 'Design', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop', metric: '+180%', metricLabel: 'Engajamento' },
];

export const FeaturedProjects = memo(function FeaturedProjects({ onNavigate }: FeaturedProjectsProps) {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = useCallback(() => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
  }, []);

  const prevProject = useCallback(() => {
    setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  }, []);

  return (
    <section className="py-32 bg-linear-to-b from-transparent via-indigo-500/5 to-transparent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 backdrop-blur-xl border border-indigo-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300">Casos de Sucesso</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}>
            Projetos em <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-violet-500 to-purple-500">Destaque</span>
          </h2>
          <p className="text-slate-400 text-xl">Transformando ideias em resultados reais</p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <motion.div
                className="group relative h-[500px] md:h-[700px] rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => onNavigate("project", projectsData[currentProject].id)}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={projectsData[currentProject].image}
                  alt={projectsData[currentProject].title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0A0E27] via-[#0A0E27]/70 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-indigo-900/20 to-violet-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                    <span className="inline-block px-4 py-2 bg-indigo-600/30 backdrop-blur-2xl border border-indigo-500/50 rounded-full text-indigo-300 text-sm mb-4">
                      {projectsData[currentProject].category}
                    </span>
                    <h3 className="text-4xl md:text-6xl mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}>
                      {projectsData[currentProject].title}
                    </h3>
                    <div className="flex items-center gap-6 p-4 bg-slate-900/50 backdrop-blur-2xl border border-slate-800/50 rounded-2xl w-fit">
                      <div>
                        <div className="text-4xl text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-400" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}>
                          {projectsData[currentProject].metric}
                        </div>
                        <div className="text-sm text-slate-400">{projectsData[currentProject].metricLabel}</div>
                      </div>
                      <TrendingUp className="text-green-400" size={32} />
                    </div>
                  </motion.div>
                </div>
                <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="text-white" size={32} />
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <motion.button onClick={prevProject} className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-slate-900/90 backdrop-blur-2xl border border-slate-700/50 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-500 transition-all group" whileHover={{ scale: 1.1, x: -5 }} whileTap={{ scale: 0.9 }}>
            <ChevronLeft className="text-white group-hover:text-white" size={28} />
          </motion.button>
          <motion.button onClick={nextProject} className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-slate-900/90 backdrop-blur-2xl border border-slate-700/50 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-500 transition-all group" whileHover={{ scale: 1.1, x: 5 }} whileTap={{ scale: 0.9 }}>
            <ChevronRight className="text-white group-hover:text-white" size={28} />
          </motion.button>
          <div className="flex justify-center gap-3 mt-10">
            {projectsData.map((_, index) => (
              <motion.button key={index} onClick={() => setCurrentProject(index)} className={`h-2 rounded-full transition-all ${index === currentProject ? 'w-12 bg-linear-to-r from-indigo-500 to-violet-500' : 'w-2 bg-slate-700 hover:bg-slate-600'}`} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});