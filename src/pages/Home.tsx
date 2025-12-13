import type { Page } from '../App'; // Ajuste o caminho se necessário
import { Hero } from '../components/home/Hero';
import { Stats } from '../components/home/Stats';
import { Services } from '../components/home/Services';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { CTASection } from '../components/home/CTASection';

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