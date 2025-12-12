import { motion } from 'motion/react';
import { memo } from 'react';

export const PreloaderLogo = memo(function PreloaderLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="mb-20 perspective-1000"
    >
      <motion.h1
        className="text-8xl md:text-9xl tracking-tighter mb-4 relative"
        style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontWeight: 800,
          transform: 'translateZ(50px)',
        }}
        animate={{
          textShadow: [
            '0 0 20px rgba(99, 102, 241, 0.3)',
            '0 0 40px rgba(99, 102, 241, 0.6)',
            '0 0 20px rgba(99, 102, 241, 0.3)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white">Cliq</span>
        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-violet-500 to-purple-500">
          Z
        </span>
      </motion.h1>

      {/* Anéis orbitais */}
      <div className="relative h-40 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-indigo-500/20 rounded-full"
            style={{ width: `${150 + i * 40}px`, height: `${150 + i * 40}px` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10 + i * 5, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              className="absolute top-0 left-1/2 w-2 h-2 bg-indigo-500 rounded-full -translate-x-1/2"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          </motion.div>
        ))}

        {/* Core */}
        <motion.div
          className="w-4 h-4 bg-linear-to-br from-indigo-500 to-violet-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              '0 0 20px rgba(99, 102, 241, 0.5)',
              '0 0 40px rgba(99, 102, 241, 0.8)',
              '0 0 20px rgba(99, 102, 241, 0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
});