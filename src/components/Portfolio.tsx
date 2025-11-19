import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import type { Page } from '../App';

interface PortfolioProps {
  onNavigate: (page: Page, projectId?: string) => void;
}

type FilterType = 'all' | 'ia' | 'dev' | 'design' | 'marketing';

const projects = [
  {
    id: 'ecommerce-ai',
    title: 'E-commerce Inteligente',
    category: 'ia',
    tags: ['React', 'Python', 'IA'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    description: 'Plataforma com recomendações por IA',
  },
  {
    id: 'chatbot-whatsapp',
    title: 'Chatbot WhatsApp B2B',
    category: 'ia',
    tags: ['Python', 'NLP', 'API'],
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop',
    description: 'Atendimento automatizado 24/7',
  },
  {
    id: 'brand-redesign',
    title: 'Redesign de Marca',
    category: 'design',
    tags: ['Figma', 'Branding'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    description: 'Transformação visual completa',
  },
  {
    id: 'startup-website',
    title: 'Website StartupX',
    category: 'dev',
    tags: ['React', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    description: 'Site institucional de alta performance',
  },
  {
    id: 'social-media-campaign',
    title: 'Campanha Digital',
    category: 'marketing',
    tags: ['SEO', 'Social Media'],
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop',
    description: 'Estratégia 360° de marketing',
  },
  {
    id: 'mobile-app',
    title: 'App Fitness Pro',
    category: 'dev',
    tags: ['React Native', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    description: 'Aplicativo com gamificação',
  },
];

const filters: { label: string; value: FilterType }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'IA', value: 'ia' },
  { label: 'Dev', value: 'dev' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' },
];

export function Portfolio({ onNavigate }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl md:text-7xl mb-6"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            Nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">Portfólio</span>
          </h1>
          <p className="text-xl text-slate-400">
            Projetos que geraram resultados reais
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2.5 rounded-lg transition-all ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white'
                  : 'bg-slate-900/30 border border-slate-800/50 text-slate-400 hover:text-white'
              }`}
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => onNavigate('project', project.id)}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-900/30 border border-slate-800/50 hover:border-indigo-500/50 transition-all"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] via-transparent to-transparent" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/20 transition-all flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20"
                    >
                      <ExternalLink className="text-white" size={20} />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-indigo-400 text-xs mb-3">
                    {project.category.toUpperCase()}
                  </span>

                  <h3
                    className="text-2xl mb-2"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                  >
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
