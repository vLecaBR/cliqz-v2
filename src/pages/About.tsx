import { Hero, MissionSection } from '../components/About/Hero';
import { AboutStats } from '../components/About/Stats';
import { Values } from '../components/About/Values';
import { AchievementsSection } from '../components/About/Achievements';
import { MethodologySection } from '../components/About/Methodology';
import { DifferentialsSection } from '../components/About/Differentials';

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