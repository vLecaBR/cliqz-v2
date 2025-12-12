import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { PreloaderBackground } from '../components/preloader/PreloaderBackground';
import { PreloaderLogo } from '../components/preloader/PreloaderLogo';
import { PreloaderProgress } from '../components/preloader/PreloaderProgress';

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING');

  useEffect(() => {
    const texts = [
      'INITIALIZING',
      'LOADING ASSETS',
      'PREPARING EXPERIENCE',
      'ALMOST READY',
    ];
    let textIndex = 0;

    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % texts.length;
      setLoadingText(texts[textIndex]);
    }, 700);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          clearInterval(textInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0E27] overflow-hidden"
    >
      {/* Background Memoizado (Não re-renderiza com o progresso) */}
      <PreloaderBackground />

      {/* Conteúdo central */}
      <div className="relative z-10 text-center px-4">
        {/* Logo Memoizado */}
        <PreloaderLogo />

        {/* Apenas este componente atualiza a cada 25ms */}
        <PreloaderProgress progress={progress} loadingText={loadingText} />
      </div>
    </motion.div>
  );
}