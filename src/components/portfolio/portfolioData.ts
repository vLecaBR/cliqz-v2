export type FilterType = 'all' | 'ia' | 'dev' | 'design' | 'marketing';

export interface Project {
  id: string;
  title: string;
  category: FilterType;
  tags: string[];
  image: string;
  description: string;
}

export const filters: { label: string; value: FilterType }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'IA', value: 'ia' },
  { label: 'Dev', value: 'dev' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' },
];

export const projects: Project[] = [
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