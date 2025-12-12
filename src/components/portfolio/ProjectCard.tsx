import { ExternalLink } from 'lucide-react';
import { memo } from 'react';
import type { Project } from './portfolioData';
import type { Page } from '../../App'; // Ajuste o caminho conforme sua estrutura

interface ProjectCardProps {
  project: Project;
  onNavigate: (page: Page, projectId?: string) => void;
}

export const ProjectCard = memo(function ProjectCard({ project, onNavigate }: ProjectCardProps) {
  return (
    <div
      onClick={() => onNavigate("project", project.id)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-900/30 border border-slate-800/50 hover:border-indigo-500/50 transition-all"
    >
      {/* Image with optimization */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0A0E27] via-transparent to-transparent" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/20 transition-all flex items-center justify-center">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover:scale-100 scale-0 transition-transform">
            <ExternalLink className="text-white" size={20} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-indigo-400 text-xs mb-3">
          {project.category.toUpperCase()}
        </span>

        <h3
          className="text-2xl mb-2"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
        >
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});