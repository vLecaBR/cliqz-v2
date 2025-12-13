import { motion, AnimatePresence } from 'motion/react';
import { memo } from 'react';

interface PreloaderProgressProps {
  progress: number;
  loadingText: string;
}

export const PreloaderProgress = memo(function PreloaderProgress({ progress, loadingText }: PreloaderProgressProps) {
  return (
    <div className="w-96 max-w-full mx-auto space-y-8">
      <div className="relative h-2 bg-slate-900/50 rounded-full overflow-hidden backdrop-blur-sm border border-slate-800/50">
        {/* Shimmer */}
        <motion.div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.1), transparent)' }}
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />

        {/* Fill */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-indigo-600 via-violet-600 to-purple-600"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        >
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-indigo-400 via-violet-400 to-purple-400 opacity-50 blur-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>

        {/* Glow da ponta */}
        <motion.div
          className="absolute top-0 bottom-0 w-20 bg-linear-to-r from-transparent to-white/30"
          style={{ left: `${Math.max(0, progress - 5)}%` }}
        />
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between text-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={loadingText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-indigo-400 font-mono tracking-wider"
          >
            {loadingText}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="text-slate-400 font-mono tabular-nums"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
        >
          {progress}%
        </motion.div>
      </div>

      {/* Tech indicators */}
      <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
        {['React', 'TypeScript', 'Motion', 'Tailwind'].map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0 }}
            animate={{ opacity: progress > i * 25 ? 1 : 0.3 }}
            className="px-2 py-1 bg-slate-900/50 border border-slate-800/50 rounded"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  );
});