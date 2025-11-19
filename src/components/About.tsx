import { motion } from 'motion/react';
import { Target, Zap, Users, Award, Rocket, Shield, TrendingUp, Lightbulb, Code2, Sparkles, CheckCircle2} from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Foco em Resultados',
    description: 'Cada decisão é guiada por dados e objetivos mensuráveis de negócio.',
  },
  {
    icon: Zap,
    title: 'Inovação Constante',
    description: 'Utilizamos as tecnologias mais avançadas para entregar soluções de ponta.',
  },
  {
    icon: Users,
    title: 'Parceria Estratégica',
    description: 'Trabalhamos lado a lado com nossos clientes como verdadeiros parceiros.',
  },
  {
    icon: Award,
    title: 'Excelência Técnica',
    description: 'Comprometidos com a qualidade máxima em cada linha de código.',
  },
];

const stats = [
  { number: '250+', label: 'Projetos Entregues' },
  { number: '80+', label: 'Clientes Ativos' },
  { number: '8+', label: 'Anos de Experiência' },
  { number: '99%', label: 'Satisfação' },
];


const achievements = [
  {
    icon: Award,
    title: 'Certificações & Parcerias',
    items: [
      'AWS Advanced Consulting Partner',
      'Google Cloud Partner',
      'ISO 27001 Certified',
      'Microsoft Gold Partner',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Impacto no Mercado',
    items: [
      'R$ 150M+ em ROI para clientes',
      'Crescimento médio de 320% em vendas',
      'Redução de 65% em custos operacionais',
      'NPS médio de 92 pontos',
    ],
  },
  {
    icon: Rocket,
    title: 'Especialidades Técnicas',
    items: [
      'Machine Learning & IA',
      'Cloud Architecture (AWS/GCP)',
      'E-commerce de Alta Performance',
      'Automação Empresarial',
    ],
  },
  {
    icon: Shield,
    title: 'Compromisso com Qualidade',
    items: [
      'Code Review em 100% dos projetos',
      'Testes automatizados completos',
      'Segurança de dados LGPD/GDPR',
      'SLA de 99.9% de uptime',
    ],
  },
];

const methodology = [
  {
    step: '01',
    title: 'Descoberta',
    description: 'Análise profunda do seu negócio, objetivos e desafios para criar uma estratégia personalizada.',
    icon: Lightbulb,
  },
  {
    step: '02',
    title: 'Estratégia',
    description: 'Planejamento detalhado com roadmap, arquitetura técnica e definição de KPIs mensuráveis.',
    icon: Target,
  },
  {
    step: '03',
    title: 'Desenvolvimento',
    description: 'Execução ágil com sprints semanais, testes contínuos e entregas incrementais.',
    icon: Code2,
  },
  {
    step: '04',
    title: 'Lançamento',
    description: 'Deploy estratégico com monitoramento, otimização contínua e suporte dedicado.',
    icon: Rocket,
  },
];

const differentials = [
  'Equipe multidisciplinar de 40+ especialistas',
  'Metodologia ágil adaptada ao contexto B2B',
  'Acompanhamento de resultados em tempo real',
  'Suporte técnico premium 24/7',
  'Workshops e treinamento inclusos',
  'Garantia de satisfação de 30 dias',
];

export function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-slate-900/30 border border-slate-800/50 rounded-2xl text-center"
            >
              <div
                className="text-5xl mb-3 text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
              >
                {stat.number}
              </div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Mission */}
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

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2
            className="text-4xl md:text-5xl mb-16 text-center"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            Nossos Valores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-slate-900/30 border border-slate-800/50 rounded-2xl hover:border-indigo-500/50 transition-all"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-linear-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
                  <value.icon className="text-white" size={28} />
                </div>

                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                >
                  {value.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2
            className="text-4xl md:text-5xl mb-16 text-center"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            Por Que Escolher a <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500">CliqZ</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-900/30 border border-slate-800/50 rounded-2xl hover:border-indigo-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-600 to-violet-600 flex items-center justify-center shrink-0">
                    <achievement.icon className="text-white" size={24} />
                  </div>
                  <h3
                    className="text-xl"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                  >
                    {achievement.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {achievement.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400">
                      <CheckCircle2 className="text-indigo-500 shrink-0 mt-0.5" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2
            className="text-4xl md:text-5xl mb-16 text-center"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            Nossa Metodologia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative p-8 bg-linear-to-br from-slate-900/50 to-slate-900/30 border border-slate-800/50 rounded-2xl hover:border-indigo-500/50 transition-all"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-linear-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
                  <span
                    className="text-white"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
                  >
                    {step.step}
                  </span>
                </div>

                <div className="w-14 h-14 mb-6 rounded-xl bg-slate-800/50 flex items-center justify-center">
                  <step.icon className="text-indigo-400" size={28} />
                </div>

                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                >
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Differentials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2
            className="text-4xl md:text-5xl mb-16 text-center"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            Nossos Diferenciais
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {differentials.map((differential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-6 bg-slate-900/30 border border-slate-800/50 rounded-xl hover:border-indigo-500/50 transition-all"
                >
                  <Sparkles className="text-indigo-500 shrink-0 mt-1" size={20} />
                  <p className="text-slate-300">{differential}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}