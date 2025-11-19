import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';
import type { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 100], [0, -5]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', page: 'home' as Page },
    { label: 'Sobre', page: 'about' as Page },
    { label: 'Serviços', page: 'services' as Page },
    { label: 'Portfólio', page: 'portfolio' as Page },
    { label: 'Contato', page: 'contact' as Page },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        style={{ y: headerY }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0E27]/80 backdrop-blur-2xl border-b border-indigo-500/10 shadow-2xl shadow-indigo-500/5'
            : 'bg-transparent'
        }`}
      >
        {/* Ambient glow on scroll */}
        {scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-linear-to-r from-indigo-500/5 via-violet-500/5 to-purple-500/5 pointer-events-none"
          />
        )}

        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo with 3D effect */}
            <motion.button
              onClick={() => handleNavClick('home')}
              className="text-3xl md:text-4xl tracking-tighter group relative z-10"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative"
                whileHover={{
                  textShadow: '0 0 20px rgba(99, 102, 241, 0.8)',
                }}
              >
                <span className="text-white drop-shadow-lg">Cliq</span>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-violet-500 to-purple-500 relative">
                  Z
                  <motion.span
                    className="absolute -top-1 -right-1"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Sparkles className="w-3 h-3 text-violet-400" />
                  </motion.span>
                </span>
              </motion.div>

              {/* Hover glow */}
              <motion.div
                className="absolute -inset-4 bg-linear-to-r from-indigo-500/0 via-violet-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:via-violet-500/10 group-hover:to-purple-500/10 rounded-2xl blur-xl transition-all duration-500 -z-10"
                whileHover={{ scale: 1.1 }}
              />
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2 bg-slate-900/30 backdrop-blur-xl px-2 py-2 rounded-full border border-slate-800/50">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative px-6 py-2.5 text-sm tracking-wide rounded-full transition-all duration-300 ${
                    currentPage === item.page
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}

                  {currentPage === item.page && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-linear-to-r from-indigo-600 to-violet-600 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-linear-to-r from-indigo-400 to-violet-400 rounded-full blur-lg opacity-50"
                        animate={{
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <motion.button
              onClick={() => handleNavClick('contact')}
              className="hidden md:block relative px-6 py-3 rounded-full overflow-hidden group"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-indigo-600 via-violet-600 to-purple-600"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              />

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                }}
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />

              <span
                className="relative z-10 text-sm text-white tracking-wide flex items-center gap-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
              >
                Começar Projeto
                <Sparkles className="w-4 h-4" />
              </span>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-violet-600 blur-lg opacity-0 group-hover:opacity-50 transition-opacity -z-10" />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative z-50 p-3 bg-slate-900/50 backdrop-blur-xl rounded-full border border-slate-800/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="text-white" size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="text-white" size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 w-full max-w-sm z-40 bg-[#0A0E27]/95 backdrop-blur-2xl border-l border-indigo-500/20 md:hidden overflow-y-auto"
            >
              {/* Animated background */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>

              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-[0.02]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `linear-gradient(rgba(99, 102, 241, 1) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(99, 102, 241, 1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>

              {/* Content */}
              <nav className="relative z-10 flex flex-col h-full justify-center px-8 gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.page}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.05,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onClick={() => handleNavClick(item.page)}
                    className={`group relative text-left py-4 transition-all ${
                      currentPage === item.page ? 'text-white' : 'text-slate-400'
                    }`}
                    whileHover={{ x: 10 }}
                  >
                    <span
                      className="text-5xl block"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                    >
                      {item.label}
                    </span>

                    {currentPage === item.page && (
                      <motion.div
                        layoutId="activeMobile"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-12 bg-linear-to-b from-indigo-500 to-violet-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      >
                        <div className="absolute inset-0 bg-linear-to-b from-indigo-400 to-violet-400 blur-lg rounded-full" />
                      </motion.div>
                    )}

                    {/* Hover indicator */}
                    <motion.div
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-linear-to-b from-indigo-500/50 to-violet-500/50 rounded-full group-hover:h-12 transition-all duration-300"
                    />
                  </motion.button>
                ))}

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => handleNavClick('contact')}
                  className="relative mt-8 px-8 py-4 bg-linear-to-r from-indigo-600 via-violet-600 to-purple-600 rounded-full overflow-hidden group"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 text-white text-lg flex items-center justify-center gap-2">
                    Começar Projeto
                    <Sparkles className="w-5 h-5" />
                  </span>

                  {/* Shimmer */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    }}
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
