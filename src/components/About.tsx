import { motion } from 'motion/react';
import { Target, Zap, Users, Award } from 'lucide-react';

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

const team = [
  {
    name: 'Ana Silva',
    role: 'CEO & Co-Founder',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    name: 'Carlos Mendes',
    role: 'CTO & Co-Founder',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    name: 'Mariana Costa',
    role: 'Head of Design',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
  {
    name: 'Rafael Santos',
    role: 'Lead Developer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
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

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl mb-16 text-center"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            Nosso Time
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group text-center"
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A0E27]/80 to-transparent" />
                </div>

                <h3
                  className="mb-1"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                >
                  {member.name}
                </h3>
                <p className="text-sm text-slate-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
