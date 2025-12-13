import { motion } from 'motion/react';
import { Award, TrendingUp, Rocket, Shield, CheckCircle2 } from 'lucide-react';
import { memo } from 'react';

const achievementsData = [
  {
    icon: Award,
    title: 'Certificações & Parcerias',
    items: ['AWS Advanced Consulting Partner', 'Google Cloud Partner', 'ISO 27001 Certified', 'Microsoft Gold Partner'],
  },
  {
    icon: TrendingUp,
    title: 'Impacto no Mercado',
    items: ['R$ 150M+ em ROI para clientes', 'Crescimento médio de 320% em vendas', 'Redução de 65% em custos operacionais', 'NPS médio de 92 pontos'],
  },
  {
    icon: Rocket,
    title: 'Especialidades Técnicas',
    items: ['Machine Learning & IA', 'Cloud Architecture (AWS/GCP)', 'E-commerce de Alta Performance', 'Automação Empresarial'],
  },
  {
    icon: Shield,
    title: 'Compromisso com Qualidade',
    items: ['Code Review em 100% dos projetos', 'Testes automatizados completos', 'Segurança de dados LGPD/GDPR', 'SLA de 99.9% de uptime'],
  },
];

export const AchievementsSection = memo(function AchievementsSection() {
  return (
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
        {achievementsData.map((achievement, index) => (
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
              <h3 className="text-xl" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}>
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
  );
});