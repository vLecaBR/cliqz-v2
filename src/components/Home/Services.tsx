import { motion } from 'motion/react';
import { Target, Zap, TrendingUp, Brain, Code, Palette } from 'lucide-react';
import { memo } from 'react';
import { Card3D } from '../ui/Card3D';

const servicesData = [
  { icon: TrendingUp, title: 'Marketing Digital', description: 'Estratégias data-driven para crescimento escalável e resultados mensuráveis.', gradient: 'from-blue-600 to-cyan-600', stats: '+320%' },
  { icon: Brain, title: 'Inteligência Artificial', description: 'Automação e soluções de IA para maximizar eficiência operacional.', gradient: 'from-violet-600 to-purple-600', stats: '80% automação' },
  { icon: Code, title: 'Desenvolvimento', description: 'Aplicações web e mobile robustas com as melhores práticas.', gradient: 'from-indigo-600 to-blue-600', stats: '0.5s load' },
  { icon: Palette, title: 'Design de Produto', description: 'Experiências digitais que combinam estética e funcionalidade.', gradient: 'from-pink-600 to-rose-600', stats: '+92% satisfação' },
];

export const Services = memo(function Services() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 backdrop-blur-xl border border-indigo-500/20 rounded-full mb-6">
            <Target className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300">Nossas Soluções</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}>
            Especialidades <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-violet-500 to-purple-500">Premium</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">Soluções completas e integradas para impulsionar seu negócio digital</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Card3D className="h-full">
                <div className="group relative h-full p-8 bg-slate-900/50 backdrop-blur-xl border border-indigo-500/10 rounded-3xl hover:border-indigo-500/30 transition-all overflow-hidden">
                  <motion.div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity">
                    <div className="h-full w-full" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
                  </div>
                  <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
                    <motion.div className={`w-16 h-16 mb-6 rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center relative`} whileHover={{ scale: 1.1, rotate: 5 }}>
                      <service.icon className="text-white" size={32} />
                      <motion.div className={`absolute inset-0 bg-linear-to-br ${service.gradient} rounded-2xl blur-xl opacity-50`} animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
                    </motion.div>
                    <h3 className="text-2xl mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}>{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full">
                      <Zap className="w-4 h-4 text-indigo-400" />
                      <span className="text-sm text-indigo-300" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}>{service.stats}</span>
                    </div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});