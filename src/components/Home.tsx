import type { Page } from '../App'; // Ajuste o caminho se necessário
import { Hero } from './Home/Hero';
import { Stats } from './Home/Stats';
import { Services } from './Home/Services';
import { FeaturedProjects } from './Home/FeaturedProjects';
import { CTASection } from './Home/CTASection';

interface HomeProps {
  onNavigate: (page: Page, projectId?: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="pt-20">
      <Hero onNavigate={onNavigate} />
      <Stats />
      <Services />
      <FeaturedProjects onNavigate={onNavigate} />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}