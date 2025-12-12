import { motion } from 'motion/react';
import { BarChart3, type LucideIcon } from 'lucide-react';
import { memo } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  metric: string;
  metricLabel: string;
  index: number;
  isInView: boolean;
}

export const ServiceCard = memo(function ServiceCard({ title, description, icon: Icon, metric, metricLabel, index, isInView }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group p-8 bg-slate-900/30 border border-slate-800/50 rounded-2xl hover:border-indigo-500/50 transition-all"
    >
      {/* Icon */}
      <div className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600/20 transition-colors">
        <Icon className="text-slate-400 group-hover:text-indigo-400 transition-colors" size={24} />
      </div>

      {/* Content */}
      <h3
        className="text-2xl mb-3"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
      >
        {title}
      </h3>
      <p className="text-slate-400 mb-8 leading-relaxed">{description}</p>

      {/* Metric */}
      <div className="p-5 bg-slate-800/30 rounded-xl border border-slate-700/50">
        <div className="flex items-center justify-between">
          <div>
            <div
              className="text-3xl mb-1 text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
            >
              {metric}
            </div>
            <div className="text-xs text-slate-500">{metricLabel}</div>
          </div>
          <BarChart3 className="text-slate-700" size={32} />
        </div>
      </div>
    </motion.div>
  );
});