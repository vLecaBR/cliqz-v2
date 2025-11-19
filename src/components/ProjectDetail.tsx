import { motion } from "motion/react";
import { ArrowLeft, TrendingUp, Users, Clock, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import type { Page } from "../App";

interface ProjectDetailProps {
  projectId: string;
  onNavigate: (page: Page, projectId?: string) => void;
}

interface ResultItem {
  label: string;
  before: number;
  after: number;
  unit: string;
  icon: React.ElementType;
}

interface ProjectData {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  heroImage: string;
  technologies: string[];
  results: ResultItem[];
}

const projectsData: Record<string, ProjectData> = {
  "ecommerce-ai": {
    title: "E-commerce Inteligente",
    client: "E-Shop Pro",
    challenge:
      "Baixa taxa de conversão e dificuldade em recomendar produtos relevantes",
    solution:
      "Sistema de recomendação por IA que analisa comportamento em tempo real",
    heroImage:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600&fit=crop",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "TensorFlow",
      "PostgreSQL",
      "AWS",
    ],
    results: [
      { label: "Taxa de Conversão", before: 2.3, after: 6.9, unit: "%", icon: TrendingUp },
      { label: "Ticket Médio", before: 150, after: 320, unit: "R$", icon: DollarSign },
      { label: "Tempo de Sessão", before: 2.5, after: 6.2, unit: "min", icon: Clock },
      { label: "Satisfação", before: 72, after: 94, unit: "%", icon: Users },
    ],
  },

  "chatbot-whatsapp": {
    title: "Chatbot WhatsApp B2B",
    client: "TechCorp",
    challenge: "Equipe sobrecarregada com atendimento repetitivo",
    solution: "Chatbot com IA conversacional que resolve 80% das dúvidas",
    heroImage:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&h=600&fit=crop",
    technologies: ["Python", "NLP", "WhatsApp API", "OpenAI", "Redis", "Docker"],
    results: [
      { label: "Tempo de Resposta", before: 15, after: 0.5, unit: "min", icon: Clock },
      { label: "Resoluções", before: 52, after: 89, unit: "%", icon: TrendingUp },
      { label: "Redução de Custos", before: 0, after: 60, unit: "%", icon: DollarSign },
      { label: "Disponibilidade", before: 40, after: 100, unit: "%", icon: Users },
    ],
  },

  "brand-redesign": {
    title: "Redesign de Marca",
    client: "TechCorp",
    challenge: "Identidade visual desatualizada",
    solution: "Redesign completo com nova paleta e sistema de design",
    heroImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    technologies: ["Figma", "Adobe Illustrator", "Design System"],
    results: [
      { label: "Reconhecimento", before: 35, after: 87, unit: "%", icon: TrendingUp },
      { label: "Engajamento", before: 2500, after: 15000, unit: "", icon: Users },
      { label: "Consistência", before: 45, after: 98, unit: "%", icon: TrendingUp },
      { label: "NPS Score", before: 42, after: 78, unit: "", icon: Users },
    ],
  },
};

export function ProjectDetail({ projectId, onNavigate }: ProjectDetailProps) {
  const project = projectsData[projectId] ?? projectsData["ecommerce-ai"];

  const [animatedResults, setAnimatedResults] = useState(
    project.results.map(() => 0)
  );

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    project.results.forEach((result, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = result.after / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;

        if (currentStep <= steps) {
          setAnimatedResults((prev) => {
            const updated = [...prev];
            updated[index] = Math.min(increment * currentStep, result.after);
            return updated;
          });
        } else {
          clearInterval(interval);
        }
      }, duration / steps);

      intervals.push(interval);
    });

    return () => {
      intervals.forEach((i) => clearInterval(i));
    };
  }, [projectId, project.results]);

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => onNavigate("portfolio")}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          style={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontWeight: 600,
          }}
        >
          <ArrowLeft size={20} />
          Voltar ao Portfólio
        </motion.button>
      </div>

      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden mb-20">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0A0E27] via-[#0A0E27]/70 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 md:px-6 pb-12">
          <h1
            className="text-4xl md:text-6xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: 800,
            }}
          >
            {project.title}
          </h1>
          <p className="text-xl text-slate-300">Cliente: {project.client}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pb-20">

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-red-600/5 border border-red-500/20 rounded-2xl"
          >
            <h2
              className="text-2xl mb-4 text-red-400"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700 }}
            >
              Desafio
            </h2>
            <p className="text-slate-400 leading-relaxed">{project.challenge}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 bg-linear-to-br from-indigo-600/10 to-violet-600/10 border border-indigo-500/20 rounded-2xl"
          >
            <h2
              className="text-2xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-violet-400"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700 }}
            >
              Solução
            </h2>
            <p className="text-slate-400 leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2
            className="text-3xl mb-8 text-center"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 800 }}
          >
            Tecnologias Utilizadas
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 bg-slate-900/30 border border-slate-800/50 rounded-lg text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl mb-12 text-center"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 800 }}
          >
            Resultados e{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500">
              Impacto
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.results.map((result, index) => {
              const Icon = result.icon;

              const improvement =
                result.before > 0
                  ? ((result.after - result.before) / result.before) * 100
                  : result.after;

              return (
                <motion.div
                  key={result.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-slate-900/30 border border-slate-800/50 rounded-2xl hover:border-indigo-500/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-slate-400 text-sm mb-2">{result.label}</p>
                      <div className="flex items-baseline gap-3">
                        <span
                          className="text-5xl text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500"
                          style={{
                            fontFamily: "Plus Jakarta Sans, sans-serif",
                            fontWeight: 800,
                          }}
                        >
                          {result.unit === "R$" && result.unit}
                          {animatedResults[index].toFixed(
                            result.unit === "min" ? 1 : 0
                          )}
                          {result.unit !== "R$" && result.unit}
                        </span>

                        {improvement > 0 && (
                          <span className="text-green-400">
                            +{improvement.toFixed(0)}%
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center">
                      <Icon className="text-indigo-400" size={24} />
                    </div>
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-3">
                    {/* BEFORE */}
                    <div>
                      <div className="flex justify-between text-xs text-slate-500 mb-2">
                        <span>ANTES</span>
                        <span>
                          {result.unit === "R$" && result.unit}
                          {result.before}
                          {result.unit !== "R$" && result.unit}
                        </span>
                      </div>

                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${
                              (result.before /
                                Math.max(result.before, result.after)) *
                              100
                            }%`,
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5 }}
                          className="h-full bg-red-500 rounded-full"
                        />
                      </div>
                    </div>

                    {/* AFTER */}
                    <div>
                      <div className="flex justify-between text-xs text-slate-500 mb-2">
                        <span>DEPOIS</span>
                        <span>
                          {result.unit === "R$" && result.unit}
                          {result.after}
                          {result.unit !== "R$" && result.unit}
                        </span>
                      </div>

                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${
                              (result.after /
                                Math.max(result.before, result.after)) *
                              100
                            }%`,
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.3 }}
                          className="h-full bg-linear-to-r from-indigo-500 to-violet-500 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center p-12 md:p-16 bg-linear-to-br from-indigo-600/10 to-violet-600/10 border border-indigo-500/20 rounded-3xl"
        >
          <h3
            className="text-3xl md:text-4xl mb-6"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: 800,
            }}
          >
            Quer resultados assim?
          </h3>

          <p className="text-slate-400 text-lg mb-10">
            Vamos conversar sobre como transformar seu negócio
          </p>

          <motion.button
            onClick={() => onNavigate("contact")}
            className="px-10 py-4 bg-linear-to-r from-indigo-600 to-violet-600 rounded-lg text-white"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: 600,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Iniciar Meu Projeto
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
