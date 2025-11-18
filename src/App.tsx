import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { ProjectDetail } from './components/ProjectDetail';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';

export type Page = 'home' | 'services' | 'portfolio' | 'about' | 'contact' | 'project';

// Floating particles component
function FloatingParticles() {
  const particles = Array.from({ length: 30 });
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-indigo-500/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (page: Page, projectId?: string) => {
    setCurrentPage(page);
    if (projectId) {
      setSelectedProjectId(projectId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="bg-[#0A0E27] min-h-screen text-white overflow-x-hidden relative" style={{ cursor: 'none' }}>
      <CustomCursor />
      
      {/* Animated mesh gradient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Primary mesh */}
        <motion.div
          className="absolute top-0 left-0 w-[800px] h-[800px] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-1/4 right-0 w-[700px] h-[700px] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-0 left-1/3 w-[600px] h-[600px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Additional glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-glow"
            style={{ filter: 'blur(100px)' }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-glow"
            style={{ filter: 'blur(100px)', animationDelay: '2s' }}
          />
        </div>
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Scanline effect */}
      <motion.div
        className="fixed inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent pointer-events-none z-50"
        animate={{
          y: ['0vh', '100vh'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <Header currentPage={currentPage} onNavigate={navigateTo} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          {currentPage === 'home' && <Home onNavigate={navigateTo} />}
          {currentPage === 'services' && <Services />}
          {currentPage === 'portfolio' && <Portfolio onNavigate={navigateTo} />}
          {currentPage === 'about' && <About />}
          {currentPage === 'contact' && <Contact />}
          {currentPage === 'project' && selectedProjectId && (
            <ProjectDetail projectId={selectedProjectId} onNavigate={navigateTo} />
          )}
        </motion.div>
      </AnimatePresence>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
