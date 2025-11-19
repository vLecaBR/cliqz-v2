import { motion } from 'motion/react';
import { Brain, Code, Palette, TrendingUp, MessageSquare, Smartphone, Zap, BarChart3, Search, Globe } from 'lucide-react';

const services = [
  {
    category: 'Marketing Digital',
    icon: TrendingUp,
    color: 'indigo',
    services: [
      {
        title: 'SEO & Performance',
        description: 'Otimização avançada para mecanismos de busca com foco em resultados',
        icon: Search,
        metric: '+180%',
        metricLabel: 'Tráfego Orgânico',
      },
      {
        title: 'Gestão de Mídia',
        description: 'Campanhas multi-canal com ROI maximizado',
        icon: Globe,
        metric: '5x',
        metricLabel: 'Retorno Médio',
      },
      {
        title: 'Analytics & Insights',
        description: 'Decisões baseadas em dados e inteligência de mercado',
        icon: BarChart3,
        metric: '+65%',
        metricLabel: 'Precisão',
      },
    ],
  },
  {
    category: 'Inteligência Artificial',
    icon: Brain,
    color: 'violet',
    services: [
      {
        title: 'Chatbot Empresarial',
        description: 'Atendimento automatizado 24/7 com IA conversacional',
        icon: MessageSquare,
        metric: '+85%',
        metricLabel: 'Eficiência',
      },
      {
        title: 'Automação de Processos',
        description: 'Workflows inteligentes que economizam tempo e recursos',
        icon: Zap,
        metric: '-80%',
        metricLabel: 'Tempo Manual',
      },
      {
        title: 'Machine Learning',
        description: 'Modelos preditivos para tomada de decisão estratégica',
        icon: BarChart3,
        metric: '+92%',
        metricLabel: 'Acurácia',
      },
    ],
  },
  {
    category: 'Desenvolvimento',
    icon: Code,
    color: 'blue',
    services: [
      {
        title: 'Aplicações Web',
        description: 'Sistemas escaláveis e de alta performance',
        icon: Globe,
        metric: '0.5s',
        metricLabel: 'Load Time',
      },
      {
        title: 'E-commerce',
        description: 'Plataformas de venda online completas e otimizadas',
        icon: TrendingUp,
        metric: '+320%',
        metricLabel: 'Conversão',
      },
      {
        title: 'Apps Mobile',
        description: 'Aplicativos nativos para iOS e Android',
        icon: Smartphone,
        metric: '4.9★',
        metricLabel: 'Avaliação',
      },
    ],
  },
  {
    category: 'Design de Produto',
    icon: Palette,
    color: 'purple',
    services: [
      {
        title: 'UI/UX Design',
        description: 'Interfaces intuitivas que maximizam conversão',
        icon: Palette,
        metric: '+92%',
        metricLabel: 'Satisfação',
      },
      {
        title: 'Branding',
        description: 'Identidade visual que conecta com seu público',
        icon: Globe,
        metric: '100%',
        metricLabel: 'Consistência',
      },
      {
        title: 'Design System',
        description: 'Sistemas escaláveis para produtos digitais',
        icon: Code,
        metric: '-70%',
        metricLabel: 'Tempo Dev',
      },
    ],
  },
];

const colorMap = {
  indigo: 'from-indigo-600 to-indigo-700',
  violet: 'from-violet-600 to-violet-700',
  blue: 'from-blue-600 to-blue-700',
  purple: 'from-purple-600 to-purple-700',
};

export function Services() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1
            className="text-5xl md:text-7xl mb-6"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            Nossos <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500">Serviços</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Soluções integradas para impulsionar seu crescimento digital
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-32">
          {services.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-12">
                <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${colorMap[category.color as keyof typeof colorMap]} flex items-center justify-center`}>
                  <category.icon className="text-white" size={32} />
                </div>
                <h2
                  className="text-4xl md:text-5xl"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
                >
                  {category.category}
                </h2>
              </div>

              {/* Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: serviceIndex * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10 }}
                    className="group p-8 bg-slate-900/30 border border-slate-800/50 rounded-2xl hover:border-indigo-500/50 transition-all"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600/20 transition-colors">
                      <service.icon className="text-slate-400 group-hover:text-indigo-400 transition-colors" size={24} />
                    </div>

                    {/* Content */}
                    <h3
                      className="text-2xl mb-3"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-slate-400 mb-8 leading-relaxed">{service.description}</p>

                    {/* Metric */}
                    <div className="p-5 bg-slate-800/30 rounded-xl border border-slate-700/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <div
                            className="text-3xl mb-1 text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500"
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
                          >
                            {service.metric}
                          </div>
                          <div className="text-xs text-slate-500">{service.metricLabel}</div>
                        </div>
                        <BarChart3 className="text-slate-700" size={32} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center p-12 md:p-16 bg-linear-to-br from-indigo-600/10 to-violet-600/10 border border-indigo-500/20 rounded-3xl"
        >
          <h3
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            Pronto para começar?
          </h3>
          <p className="text-slate-400 text-lg mb-10">
            Vamos conversar sobre como podemos ajudar sua empresa
          </p>

          <motion.button
            className="px-10 py-4 bg-linear-to-r from-indigo-600 to-violet-600 rounded-lg text-white"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar Consultoria
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
