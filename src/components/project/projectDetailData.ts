import { 
  TrendingUp, Users, Clock, DollarSign, type LucideIcon 
} from 'lucide-react';

export interface ProjectResult {
  label: string;
  before: number;
  after: number;
  unit: string;
  icon: LucideIcon;
}

export interface Project {
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
  technologies: Record<string, string>;
  hosting: Record<string, string>;
  results: ProjectResult[];
}

export const projectsData: Record<string, Project> = {
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