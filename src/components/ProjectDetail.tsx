import { useEffect, useState } from "react";

type Page = "home" | "portfolio" | "project"; // <<< adiciona isso aqui

interface ResultItem {
  label: string;
  before: number;
  after: number;
}

interface Project {
  id: string;
  title: string;
  results: ResultItem[];
}

interface ProjectDetailProps {
  projectId: string;
  onNavigate: (page: Page, projectId?: string) => void;
}

export function ProjectDetail({ projectId, onNavigate }: ProjectDetailProps) {
  const project: Project = {
    id: projectId,
    title: "Example Project",
    results: [
      { label: "Conversões", before: 12, after: 45 },
      { label: "Leads", before: 80, after: 140 },
      { label: "CTR (%)", before: 3.2, after: 5.9 },
    ],
  };

  const [animatedResults, setAnimatedResults] = useState<number[]>(
    project.results.map((r) => r.before)
  );

  useEffect(() => {
    const intervals: Array<ReturnType<typeof setInterval>> = [];

    project.results.forEach((result, index) => {
      const duration = 2000; // 2s
      const steps = 60; // frames
      const increment = (result.after - result.before) / steps;

      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;

        if (currentStep <= steps) {
          setAnimatedResults((prev) => {
            const updated = [...prev];
            updated[index] = Math.min(
              result.before + increment * currentStep,
              result.after
            );
            return updated;
          });
        } else {
          clearInterval(interval);
        }
      }, duration / steps);

      intervals.push(interval);
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [projectId]);

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>

      <button
        onClick={() => onNavigate("portfolio")}
        className="mb-4 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
      >
        Voltar
      </button>

      <div className="space-y-4">
        {project.results.map((result, index) => (
          <div key={index} className="bg-white/10 p-4 rounded-xl">
            <p className="text-sm opacity-80">{result.label}</p>

            <p className="text-2xl font-semibold mt-1">
              {animatedResults[index].toFixed(1)}
            </p>

            <p className="text-xs opacity-40">
              {result.before} → {result.after}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
