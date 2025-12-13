import { motion } from 'motion/react';
import { useState, memo } from 'react';

export const PreloaderBackground = memo(function PreloaderBackground() {
  // Configuração estática das partículas
  const [particleConfigs] = useState(() =>
    Array.from({ length: 15 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
  );

  return (
    <>
      {/* Background animado (Blobs) */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99, 102, 241, 1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Partículas */}
      {particleConfigs.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-indigo-500/40 rounded-full"
          style={{ left: `${p.left}%`, top: `${p.top}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}
    </>
  );
});