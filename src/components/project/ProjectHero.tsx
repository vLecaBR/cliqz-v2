import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { memo } from 'react';
import type { Page } from '../../App'; // Ajuste o caminho

interface ProjectHeroProps {
  title: string;
  client: string;
  heroImage: string;
  onNavigate: (page: Page) => void;
}

export const ProjectHero = memo(function ProjectHero({ title, client, heroImage, onNavigate }: ProjectHeroProps) {
  return (
    <>
      {/* Back Button */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => onNavigate('portfolio')}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
        >
          <ArrowLeft size={20} />
          Voltar ao Portfólio
        </motion.button>
      </div>

      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden mb-20">
        <img
          src={heroImage}
          alt={title}
          loading="eager" // Imagem principal deve carregar rápido
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0A0E27] via-[#0A0E27]/70 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 md:px-6 pb-12">
          <h1
            className="text-4xl md:text-6xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            {title}
          </h1>
          <p className="text-xl text-slate-300">Cliente: {client}</p>
        </div>
      </div>
    </>
  );
});