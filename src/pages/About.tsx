import { Hero, MissionSection } from '../components/about/Hero';
import { AboutStats } from '../components/about/Stats';
import { Values } from '../components/about/Values';
import { AchievementsSection } from '../components/about/Achievements';
import { MethodologySection } from '../components/about/Methodology';
import { DifferentialsSection } from '../components/about/Differentials';

export function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <Hero />
        <AboutStats />
        <MissionSection />
        <Values />
        <AchievementsSection />
        <MethodologySection />
        <DifferentialsSection />
      </div>
    </div>
  );
}