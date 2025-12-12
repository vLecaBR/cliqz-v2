import { motion } from 'motion/react';
import { Briefcase, Calendar, UsersRound, Globe, Code, Server } from 'lucide-react';
import { memo } from 'react';

interface TechnicalDetailsProps {
  category: string;
  duration: string;
  team: string;
  client: string;
  technologies: Record<string, string>;
  hosting: Record<string, string>;
}

export const TechnicalDetails = memo(function TechnicalDetails({ category, duration, team, client, technologies, hosting }: TechnicalDetailsProps) {
  return (
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
      
      {/* Basic Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <InfoCard icon={Briefcase} label="Categoria" value={category} delay={0} />
        <InfoCard icon={Calendar} label="Duração" value={duration} delay={0} />
        <InfoCard icon={UsersRound} label="Time" value={team} delay={0.1} />
        <InfoCard icon={Globe} label="Cliente" value={client} delay={0.1} />
      </div>

      {/* Tech & Hosting */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TechCard icon={Code} title="Tecnologias" data={technologies} delay={0} />
        <TechCard icon={Server} title="Infraestrutura" data={hosting} delay={0} />
      </div>
    </motion.div>
  );
});

// Sub-componentes internos para limpeza
const InfoCard = ({ icon: Icon, label, value, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, x: delay === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-6 bg-slate-900/30 border border-slate-800/50 rounded-xl hover:border-indigo-500/50 transition-all"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
        <Icon className="text-indigo-400" size={20} />
      </div>
      <h3 className="text-slate-400" style={{ fontWeight: 600 }}>{label}</h3>
    </div>
    <p className="text-white text-lg">{value}</p>
  </motion.div>
);

const TechCard = ({ icon: Icon, title, data, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, x: delay === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="p-8 bg-slate-900/30 border border-slate-800/50 rounded-2xl"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
        <Icon className="text-indigo-400" size={20} />
      </div>
      <h3 className="text-xl" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}>
        {title}
      </h3>
    </div>
    <div className="space-y-4">
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <p className="text-slate-500 text-sm mb-1.5 uppercase tracking-wider">{key}</p>
          <p className="text-white text-sm">{value as string}</p>
        </div>
      ))}
    </div>
  </motion.div>
);