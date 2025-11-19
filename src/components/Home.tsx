import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { Brain, Code, Palette, TrendingUp, ArrowRight, ChevronLeft, ChevronRight, Sparkles, Zap, Target } from 'lucide-react';
import type { Page } from '../App';

interface HomeProps {
  onNavigate: (page: Page, projectId?: string) => void;
}

const services = [
  {
    icon: TrendingUp,
    title: 'Marketing Digital',
    description: 'Estratégias data-driven para crescimento escalável e resultados mensuráveis.',
    gradient: 'from-blue-600 to-cyan-600',
    stats: '+320%',
  },
  {
    icon: Brain,
    title: 'Inteligência Artificial',
    description: 'Automação e soluções de IA para maximizar eficiência operacional.',
    gradient: 'from-violet-600 to-purple-600',
    stats: '80% automação',
  },
  {
    icon: Code,
    title: 'Desenvolvimento',
    description: 'Aplicações web e mobile robustas com as melhores práticas.',
    gradient: 'from-indigo-600 to-blue-600',
    stats: '0.5s load',
  },
  {
    icon: Palette,
    title: 'Design de Produto',
    description: 'Experiências digitais que combinam estética e funcionalidade.',
    gradient: 'from-pink-600 to-rose-600',
    stats: '+92% satisfação',
  },
];

const featuredProjects = [
  {
    id: 'ecommerce-ai',
    title: 'E-commerce Inteligente',
    category: 'IA + Dev',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop',
    metric: '+320%',
    metricLabel: 'Conversão',
  },
  {
    id: 'chatbot-whatsapp',
    title: 'Chatbot WhatsApp B2B',
    category: 'Inteligência Artificial',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&h=800&fit=crop',
    metric: '80%',
    metricLabel: 'Automação',
  },
  {
    id: 'brand-redesign',
    title: 'Redesign de Marca',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
    metric: '+180%',
    metricLabel: 'Engajamento',
  },
];

const stats = [
  { value: 250, suffix: '+', label: 'Projetos Entregues' },
  { value: 80, suffix: '+', label: 'Clientes Ativos' },
  { value: 8, suffix: '+', label: 'Anos de Mercado' },
  { value: 99, suffix: '%', label: 'Satisfação' },
];

// 3D Card component
function Card3D({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animated counter
function AnimatedCounter({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const increment = end / (duration * 60);
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 1000 / 60);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  );
}

export function Home({ onNavigate }: HomeProps) {
  const [currentProject, setCurrentProject] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <div className="pt-20" ref={containerRef}>
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-indigo-500/10 rounded-3xl"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
                rotate: i * 45,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [i * 45, i * 45 + 180, i * 45],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="container mx-auto px-4 md:px-6 relative z-10"
        >
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 backdrop-blur-xl border border-indigo-500/20 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-300 tracking-wide" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}>
                Agência Digital B2B
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </motion.div>

            {/* Main Headline with 3D effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-tight"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
              >
                <motion.span
                  className="block mb-2"
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(99, 102, 241, 0)',
                      '0 0 40px rgba(99, 102, 241, 0.3)',
                      '0 0 20px rgba(99, 102, 241, 0)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Tecnologia que
                </motion.span>
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 relative"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  impulsiona resultados
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-purple-500/20 blur-3xl -z-10"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [0.9, 1.1, 0.9],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                Desenvolvemos soluções digitais integradas que transformam desafios de negócio
                em oportunidades de crescimento sustentável.
              </motion.p>

              {/* CTA Buttons with magnetic effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.button
                  onClick={() => onNavigate('services')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 rounded-full overflow-hidden"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ backgroundSize: '200% 200%' }}
                  />

                  {/* Shimmer */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    }}
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />

                  <span className="relative z-10 flex items-center gap-2 text-white text-lg">
                    Nossos Serviços
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={20} />
                    </motion.span>
                  </span>
                </motion.button>

                <motion.button
                  onClick={() => onNavigate('portfolio')}
                  className="group relative px-8 py-4 bg-slate-900/50 backdrop-blur-xl border-2 border-indigo-500/30 rounded-full hover:border-indigo-500/60 transition-all"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white text-lg">Ver Portfólio</span>

                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-violet-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:via-violet-500/10 group-hover:to-purple-500/10 rounded-full blur-xl -z-10"
                    whileHover={{ scale: 1.2 }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-slate-500 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}>
              Scroll
            </span>
            <div className="w-6 h-10 border-2 border-indigo-500/30 rounded-full p-1">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full mx-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section with animated counters */}
      <section className="py-20 border-y border-indigo-500/10 bg-gradient-to-r from-indigo-500/5 via-transparent to-violet-500/5 relative overflow-hidden">
        {/* Animated background lines */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, rgba(99, 102, 241, 0.1) 0px, rgba(99, 102, 241, 0.1) 1px, transparent 1px, transparent 20px)`,
          }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative text-center group"
              >
                {/* Card with glassmorphism */}
                <div className="relative p-8 bg-slate-900/30 backdrop-blur-xl border border-indigo-500/10 rounded-3xl group-hover:border-indigo-500/30 transition-all">
                  {/* Glow on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-violet-500/0 group-hover:from-indigo-500/10 group-hover:to-violet-500/10 rounded-3xl blur-xl -z-10 transition-all duration-500"
                  />

                  <div
                    className="text-5xl md:text-6xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
                  >
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>

                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-indigo-500/20 rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-indigo-500/20 rounded-br-3xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with 3D Cards */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 backdrop-blur-xl border border-indigo-500/20 rounded-full mb-6"
            >
              <Target className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-300">Nossas Soluções</span>
            </motion.div>

            <h2
              className="text-5xl md:text-7xl mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
            >
              Especialidades <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500">
                Premium
              </span>
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              Soluções completas e integradas para impulsionar seu negócio digital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <Card3D className="h-full">
                  <div className="group relative h-full p-8 bg-slate-900/50 backdrop-blur-xl border border-indigo-500/10 rounded-3xl hover:border-indigo-500/30 transition-all overflow-hidden">
                    {/* Animated gradient background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Grid pattern */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity">
                      <div
                        className="h-full w-full"
                        style={{
                          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                          backgroundSize: '20px 20px',
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
                      {/* Icon with glow */}
                      <motion.div
                        className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center relative`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <service.icon className="text-white" size={32} />
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-50`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>

                      <h3
                        className="text-2xl mb-3"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>

                      {/* Stats badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full">
                        <Zap className="w-4 h-4 text-indigo-400" />
                        <span className="text-sm text-indigo-300" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}>
                          {service.stats}
                        </span>
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-indigo-500/10 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-indigo-500/10 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="py-32 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 backdrop-blur-xl border border-indigo-500/20 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-300">Casos de Sucesso</span>
            </motion.div>

            <h2
              className="text-5xl md:text-7xl mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
            >
              Projetos em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500">
                Destaque
              </span>
            </h2>
            <p className="text-slate-400 text-xl">Transformando ideias em resultados reais</p>
          </motion.div>

          {/* Carousel */}
          <div className="relative max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <motion.div
                  className="group relative h-[500px] md:h-[700px] rounded-3xl overflow-hidden cursor-pointer"
                  onClick={() => onNavigate('project', featuredProjects[currentProject].id)}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Image */}
                  <motion.img
                    src={featuredProjects[currentProject].image}
                    alt={featuredProjects[currentProject].title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] via-[#0A0E27]/70 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-violet-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {/* Category badge */}
                      <span className="inline-block px-4 py-2 bg-indigo-600/30 backdrop-blur-2xl border border-indigo-500/50 rounded-full text-indigo-300 text-sm mb-4">
                        {featuredProjects[currentProject].category}
                      </span>

                      <h3
                        className="text-4xl md:text-6xl mb-4"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
                      >
                        {featuredProjects[currentProject].title}
                      </h3>

                      {/* Metric */}
                      <div className="flex items-center gap-6 p-4 bg-slate-900/50 backdrop-blur-2xl border border-slate-800/50 rounded-2xl w-fit">
                        <div>
                          <div
                            className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
                          >
                            {featuredProjects[currentProject].metric}
                          </div>
                          <div className="text-sm text-slate-400">{featuredProjects[currentProject].metricLabel}</div>
                        </div>
                        <TrendingUp className="text-green-400" size={32} />
                      </div>
                    </motion.div>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowRight className="text-white" size={32} />
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <motion.button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-slate-900/90 backdrop-blur-2xl border border-slate-700/50 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-500 transition-all group"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="text-white group-hover:text-white" size={28} />
            </motion.button>

            <motion.button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-slate-900/90 backdrop-blur-2xl border border-slate-700/50 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-500 transition-all group"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="text-white group-hover:text-white" size={28} />
            </motion.button>

            {/* Dots indicator */}
            <div className="flex justify-center gap-3 mt-10">
              {featuredProjects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentProject
                      ? 'w-12 bg-gradient-to-r from-indigo-500 to-violet-500'
                      : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto text-center p-12 md:p-20 bg-gradient-to-br from-indigo-600/20 via-violet-600/20 to-purple-600/20 backdrop-blur-2xl border border-indigo-500/30 rounded-3xl overflow-hidden"
          >
            {/* Animated background grid */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ['0px 0px', '40px 40px'],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-purple-500/10 blur-3xl" />

            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 backdrop-blur-xl border border-indigo-500/30 rounded-full mb-8"
              >
                <Sparkles className="w-4 h-4 text-indigo-300" />
                <span className="text-sm text-indigo-200">Vamos Trabalhar Juntos</span>
              </motion.div>

              <h2
                className="text-4xl md:text-6xl mb-6"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
              >
                Pronto para transformar
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
                  seu negócio?
                </span>
              </h2>
              <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto">
                Vamos conversar sobre como podemos ajudar sua empresa a alcançar novos patamares
              </p>

              <motion.button
                onClick={() => onNavigate('contact')}
                className="group relative px-10 py-5 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 rounded-full overflow-hidden"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(99, 102, 241, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <span className="relative z-10 text-white text-lg flex items-center gap-2">
                  Iniciar Conversa
                  <Sparkles className="w-5 h-5" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
