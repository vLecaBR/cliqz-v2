import { useState, useMemo, useCallback } from 'react';
import type { Page } from '../App';
import { projects, type FilterType } from '../components/portfolio/portfolioData';
import { PortfolioHeader } from '../components/portfolio/PortfolioHeader';
import { PortfolioFilters } from '../components/portfolio/PortfolioFilters';
import { ProjectCard } from '../components/portfolio/ProjectCard';

interface PortfolioProps {
  onNavigate: (page: Page, projectId?: string) => void;
}

export function Portfolio({ onNavigate }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  // useMemo garante que o filtro só rode se activeFilter mudar
  const filteredProjects = useMemo(() => {
    return activeFilter === 'all' 
      ? projects 
      : projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  // useCallback evita recriação da função a cada render
  const handleFilterChange = useCallback((filter: FilterType) => {
    setActiveFilter(filter);
  }, []);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <PortfolioHeader />
        
        <PortfolioFilters 
          activeFilter={activeFilter} 
          onFilterChange={handleFilterChange} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}