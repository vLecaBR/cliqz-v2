import { motion, useInView } from 'motion/react';
import { useRef, memo } from 'react';
import { colorMap } from './servicesData';
import { ServiceCard } from './ServiceCard';
import type { LucideIcon } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  metric: string;
  metricLabel: string;
}

interface CategoryProps {
  category: string;
  icon: LucideIcon;
  color: string;
  services: ServiceItem[];
}

export const ServiceCategory = memo(function ServiceCategory({ category, icon: Icon, color, services }: CategoryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Resolve a cor dinamicamente com segurança de tipo
  const gradientClass = colorMap[color as keyof typeof colorMap] || 'from-slate-600 to-slate-700';

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {/* Category Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${gradientClass} flex items-center justify-center`}>
            <Icon className="text-white" size={32} />
          </div>
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            {category}
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
});