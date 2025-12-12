import { TrendingUp, Search, Globe, BarChart3, Brain, MessageSquare, Zap, Code, Smartphone, Palette } from 'lucide-react';

export const colorMap = {
  indigo: 'from-indigo-600 to-indigo-700',
  violet: 'from-violet-600 to-violet-700',
  blue: 'from-blue-600 to-blue-700',
  purple: 'from-purple-600 to-purple-700',
};

export const servicesData = [
  {
    category: 'Marketing Digital',
    icon: TrendingUp,
    color: 'indigo',
    services: [
      { title: 'SEO & Performance', description: 'Otimização avançada para mecanismos de busca com foco em resultados', icon: Search, metric: '+180%', metricLabel: 'Tráfego Orgânico' },
      { title: 'Gestão de Mídia', description: 'Campanhas multi-canal com ROI maximizado', icon: Globe, metric: '5x', metricLabel: 'Retorno Médio' },
      { title: 'Analytics & Insights', description: 'Decisões baseadas em dados e inteligência de mercado', icon: BarChart3, metric: '+65%', metricLabel: 'Precisão' },
    ],
  },
  {
    category: 'Inteligência Artificial',
    icon: Brain,
    color: 'violet',
    services: [
      { title: 'Chatbot Empresarial', description: 'Atendimento automatizado 24/7 com IA conversacional', icon: MessageSquare, metric: '+85%', metricLabel: 'Eficiência' },
      { title: 'Automação de Processos', description: 'Workflows inteligentes que economizam tempo e recursos', icon: Zap, metric: '-80%', metricLabel: 'Tempo Manual' },
      { title: 'Machine Learning', description: 'Modelos preditivos para tomada de decisão estratégica', icon: BarChart3, metric: '+92%', metricLabel: 'Acurácia' },
    ],
  },
  {
    category: 'Desenvolvimento',
    icon: Code,
    color: 'blue',
    services: [
      { title: 'Aplicações Web', description: 'Sistemas escaláveis e de alta performance', icon: Globe, metric: '0.5s', metricLabel: 'Load Time' },
      { title: 'E-commerce', description: 'Plataformas de venda online completas e otimizadas', icon: TrendingUp, metric: '+320%', metricLabel: 'Conversão' },
      { title: 'Apps Mobile', description: 'Aplicativos nativos para iOS e Android', icon: Smartphone, metric: '4.9★', metricLabel: 'Avaliação' },
    ],
  },
  {
    category: 'Design de Produto',
    icon: Palette,
    color: 'purple',
    services: [
      { title: 'UI/UX Design', description: 'Interfaces intuitivas que maximizam conversão', icon: Palette, metric: '+92%', metricLabel: 'Satisfação' },
      { title: 'Branding', description: 'Identidade visual que conecta com seu público', icon: Globe, metric: '100%', metricLabel: 'Consistência' },
      { title: 'Design System', description: 'Sistemas escaláveis para produtos digitais', icon: Code, metric: '-70%', metricLabel: 'Tempo Dev' },
    ],
  },
];