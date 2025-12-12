import type { Page } from '../App';
import { projectsData } from '../components/project/projectDetailData';
import { ProjectHero } from '../components/project/ProjectHero';
import { ProjectContent } from '../components/project/ProjectContent';
import { ProjectGallery } from '../components/project/ProjectGallery';
import { TechnicalDetails } from '../components/project/TechnicalDetails';
import { ProjectResults } from '../components/project/ProjectResults';
import { ProjectCTA } from '../components/project/ProjectCTA';

interface ProjectDetailProps {
  projectId: string;
  onNavigate: (page: Page) => void;
}

export function ProjectDetail({ projectId, onNavigate }: ProjectDetailProps) {
  const project = projectsData[projectId] || projectsData['ecommerce-ai'];

  if (!project) return <div className="text-white text-center pt-40">Projeto não encontrado.</div>;

  return (
    <div className="pt-20">
      <ProjectHero 
        title={project.title} 
        client={project.client} 
        heroImage={project.heroImage} 
        onNavigate={onNavigate} 
      />

      <div className="container mx-auto px-4 md:px-6 pb-20">
        <ProjectContent 
          overview={project.overview} 
          challenge={project.challenge} 
          solution={project.solution} 
        />
        
        <ProjectGallery 
          gallery={project.gallery} 
          title={project.title} 
        />
        
        <TechnicalDetails 
          category={project.category}
          duration={project.duration}
          team={project.team}
          client={project.client}
          technologies={project.technologies}
          hosting={project.hosting}
        />
        
        <ProjectResults results={project.results} />
        
        <ProjectCTA onNavigate={onNavigate} />
      </div>
    </div>
  );
}