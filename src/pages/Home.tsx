import type { Page } from '../App'; // Ajuste o caminho se necessário
import { Hero } from '../components/Home/Hero';
import { Stats } from '../components/Home/Stats';
import { Services } from '../components/Home/Services';
import { FeaturedProjects } from '../components/Home/FeaturedProjects';
import { CTASection } from '../components/Home/CTASection';

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