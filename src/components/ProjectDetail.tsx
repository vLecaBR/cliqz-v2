import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { 
  ArrowLeft, 
  TrendingUp, 
  Users, 
  Clock, 
  DollarSign, 
  Code, 
  Server, 
  Calendar, 
  UsersRound, 
  Briefcase, 
  Globe 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { useEffect, useRef } from 'react';
import type { Page } from '../App';

// --- Interfaces ---
interface ProjectResult {
  label: string;
  before: number;
  after: number;
  unit: string;
  icon: LucideIcon;
}

interface Project {
  title: string;
  client: string;
  category: string;
  duration: string;
  team: string;
  overview: string;
  challenge: string;
  solution: string;
  heroImage: string;
  gallery: string[];
  // Usamos Record<string, string> para permitir chaves com espaços como 'inteligência artificial'
  technologies: Record<string, string>;
  hosting: Record<string, string>;
  results: ProjectResult[];
}

interface ProjectDetailProps {
  projectId: string;
  onNavigate: (page: Page) => void;
}

// --- Componente Auxiliar de Animação ---
const Counter = ({ value, unit, type = 'default' }: { value: number; unit: string; type?: 'currency' | 'default' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    duration: 2000
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        if (type === 'currency') {
          ref.current.textContent = latest.toFixed(0);
        } else if (unit === 'min') {
          ref.current.textContent = latest.toFixed(1);
        } else {
          ref.current.textContent = latest.toFixed(0);
        }
      }
    });
  }, [springValue, type, unit]);

  return <span ref={ref} />;
};

// --- Dados ---
const projectsData: Record<string, Project> = {
  'ecommerce-ai': {
    title: 'E-commerce Inteligente',
    client: 'E-Shop Pro',
    category: 'E-commerce & IA',
    duration: '4 meses',
    team: '6 pessoas',
    overview: 'Desenvolvimento de uma plataforma de e-commerce de última geração com inteligência artificial integrada.',
    challenge: 'O cliente enfrentava desafios críticos com baixa taxa de conversão (2.3%) e dificuldade em recomendar produtos relevantes.',
    solution: 'Implementamos um sistema de recomendação baseado em IA que analisa padrões de comportamento em tempo real.',
    heroImage: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
    ],
    technologies: {
      frontend: 'React, TypeScript, Tailwind CSS',
      backend: 'Node.js, Python, FastAPI',
      'inteligência artificial': 'TensorFlow, Scikit-learn',
      ferramentas: 'Docker, Git, CI/CD Pipelines',
    },
    hosting: {
      cloud: 'Amazon Web Services (AWS)',
      compute: 'EC2 Auto Scaling',
      storage: 'S3 + CloudFront CDN',
      database: 'PostgreSQL RDS + Redis ElastiCache',
      região: 'São Paulo (sa-east-1)',
    },
    results: [
      { label: 'Taxa de Conversão', before: 2.3, after: 6.9, unit: '%', icon: TrendingUp },
      { label: 'Ticket Médio', before: 150, after: 320, unit: 'R$', icon: DollarSign },
      { label: 'Tempo de Sessão', before: 2.5, after: 6.2, unit: 'min', icon: Clock },
      { label: 'Satisfação', before: 72, after: 94, unit: '%', icon: Users },
    ],
  },
  'chatbot-whatsapp': {
    title: 'Chatbot WhatsApp B2B',
    client: 'TechCorp',
    category: 'Automação & IA',
    duration: '3 meses',
    team: '4 pessoas',
    overview: 'Sistema de atendimento automatizado via WhatsApp utilizando processamento de linguagem natural.',
    challenge: 'A equipe de atendimento estava sobrecarregada com mais de 500 atendimentos diários.',
    solution: 'Desenvolvemos um chatbot inteligente com IA conversacional que compreende intenções e contexto.',
    heroImage: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
    ],
    technologies: {
      frontend: 'React, Next.js, TypeScript',
      backend: 'Python, FastAPI, Node.js',
      'inteligência artificial': 'OpenAI GPT-4, NLP Libraries',
      integração: 'WhatsApp Business API, REST APIs',
    },
    hosting: {
      cloud: 'Google Cloud Platform (GCP)',
      compute: 'Cloud Run + Kubernetes (GKE)',
      storage: 'Cloud Storage + Cloud CDN',
      database: 'MongoDB Atlas + Redis Cloud',
      região: 'southamerica-east1',
    },
    results: [
      { label: 'Tempo de Resposta', before: 15, after: 0.5, unit: 'min', icon: Clock },
      { label: 'Resoluções', before: 52, after: 89, unit: '%', icon: TrendingUp },
      { label: 'Redução de Custos', before: 0, after: 60, unit: '%', icon: DollarSign },
      { label: 'Disponibilidade', before: 40, after: 100, unit: '%', icon: Users },
    ],
  },
  'brand-redesign': {
    title: 'Redesign de Marca',
    client: 'TechCorp',
    category: 'Branding & Design',
    duration: '2 meses',
    team: '5 pessoas',
    overview: 'Transformação completa da identidade visual de uma empresa de tecnologia.',
    challenge: 'A identidade visual estava desatualizada e não refletia a inovação.',
    solution: 'Desenvolvemos uma nova identidade visual baseada em pesquisa de mercado.',
    heroImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
    ],
    technologies: {
      design: 'Figma, Adobe Illustrator, Photoshop',
      frontend: 'React, Storybook, Tailwind CSS',
      ferramentas: 'Sketch, InVision, Abstract',
      'design tokens': 'Style Dictionary, Figma Tokens',
    },
    hosting: {
      'design system': 'Figma (Editor + FigJam)',
      componentes: 'Storybook via Netlify',
      assets: 'CDN via Cloudflare',
      documentação: 'Notion + GitBook',
      versionamento: 'GitHub + Abstract',
    },
    results: [
      { label: 'Reconhecimento', before: 35, after: 87, unit: '%', icon: TrendingUp },
      { label: 'Engajamento', before: 2500, after: 15000, unit: '', icon: Users },
      { label: 'Consistência', before: 45, after: 98, unit: '%', icon: TrendingUp },
      { label: 'NPS Score', before: 42, after: 78, unit: '', icon: Users },
    ],
  },
};

export function ProjectDetail({ projectId, onNavigate }: ProjectDetailProps) {
  const project = projectsData[projectId] || projectsData['ecommerce-ai'];

  if (!project) return <div className="text-white text-center pt-40">Projeto não encontrado.</div>;

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => onNavigate('portfolio')}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
        >
          <ArrowLeft size={20} />
          Voltar ao Portfólio
        </motion.button>
      </div>

      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden mb-20">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0A0E27] via-[#0A0E27]/70 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 md:px-6 pb-12">
          <h1
            className="text-4xl md:text-6xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            {project.title}
          </h1>
          <p className="text-xl text-slate-300">Cliente: {project.client}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pb-20">
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
            <p className="text-slate-300 text-lg leading-relaxed">{project.overview}</p>
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
            <p className="text-slate-300 leading-relaxed">{project.challenge}</p>
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
            <p className="text-slate-300 leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2
            className="text-3xl mb-8"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            Galeria do Projeto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative aspect-4/3 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`${project.title} - ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2
            className="text-3xl mb-8"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            Detalhes Técnicos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-900/30 border border-slate-800/50 rounded-xl hover:border-indigo-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                  <Briefcase className="text-indigo-400" size={20} />
                </div>
                <h3 className="text-slate-400" style={{ fontWeight: 600 }}>Categoria</h3>
              </div>
              <p className="text-white text-lg">{project.category}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-900/30 border border-slate-800/50 rounded-xl hover:border-indigo-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                  <Calendar className="text-indigo-400" size={20} />
                </div>
                <h3 className="text-slate-400" style={{ fontWeight: 600 }}>Duração</h3>
              </div>
              <p className="text-white text-lg">{project.duration}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-slate-900/30 border border-slate-800/50 rounded-xl hover:border-indigo-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                  <UsersRound className="text-indigo-400" size={20} />
                </div>
                <h3 className="text-slate-400" style={{ fontWeight: 600 }}>Time</h3>
              </div>
              <p className="text-white text-lg">{project.team}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-slate-900/30 border border-slate-800/50 rounded-xl hover:border-indigo-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                  <Globe className="text-indigo-400" size={20} />
                </div>
                <h3 className="text-slate-400" style={{ fontWeight: 600 }}>Cliente</h3>
              </div>
              <p className="text-white text-lg">{project.client}</p>
            </motion.div>
          </div>

          {/* Technologies & Hosting */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-900/30 border border-slate-800/50 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                  <Code className="text-indigo-400" size={20} />
                </div>
                <h3 className="text-xl" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}>
                  Tecnologias
                </h3>
              </div>
              <div className="space-y-4">
                {Object.entries(project.technologies).map(([category, value]) => (
                  <div key={category}>
                    <p className="text-slate-500 text-sm mb-1.5 uppercase tracking-wider">{category}</p>
                    <p className="text-white text-sm">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-900/30 border border-slate-800/50 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                  <Server className="text-indigo-400" size={20} />
                </div>
                <h3 className="text-xl" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}>
                  Infraestrutura
                </h3>
              </div>
              <div className="space-y-4">
                {Object.entries(project.hosting).map(([category, value]) => (
                  <div key={category}>
                    <p className="text-slate-500 text-sm mb-1.5 uppercase tracking-wider">{category}</p>
                    <p className="text-white text-sm">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Results */}
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
            {project.results.map((result, index) => {
              const Icon = result.icon;
              const improvement = result.before > 0 ? ((result.after - result.before) / result.before) * 100 : result.after;

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
                    <div>
                      <div className="flex justify-between text-xs text-slate-500 mb-2">
                        <span>ANTES</span>
                        <span>{result.unit === 'R$' && result.unit}{result.before}{result.unit !== 'R$' && result.unit}</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(result.before / Math.max(result.before, result.after)) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5 }}
                          className="h-full bg-red-500 rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-slate-500 mb-2">
                        <span>DEPOIS</span>
                        <span>{result.unit === 'R$' && result.unit}{result.after}{result.unit !== 'R$' && result.unit}</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(result.after / Math.max(result.before, result.after)) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.3 }}
                          className="h-full bg-linear-to-r from-indigo-500 to-violet-500 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center p-12 md:p-16 bg-linear-to-br from-indigo-600/10 to-violet-600/10 border border-indigo-500/20 rounded-3xl"
        >
          <h3
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            Quer resultados assim?
          </h3>
          <p className="text-slate-400 text-lg mb-10">
            Vamos conversar sobre como transformar seu negócio
          </p>

          <motion.button
            onClick={() => onNavigate('contact')}
            className="px-10 py-4 bg-linear-to-r from-indigo-600 to-violet-600 rounded-lg text-white"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Iniciar Meu Projeto
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}