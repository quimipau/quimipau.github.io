import React from "react";
import { useParams, Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { ArrowLeft, BookOpen, Clock, ChevronRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { topics, topicExercises } from "../data/mock";

const TopicIcon = ({ iconName, className }) => {
  const Icon = LucideIcons[iconName];
  if (!Icon) return <BookOpen className={className} />;
  return <Icon className={className} />;
};

const difficultyConfig = {
  Baja: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  Media: { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
  Alta: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
};

const typeConfig = {
  Cálculo: { bg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200" },
  Teoría: { bg: "bg-slate-50", text: "text-slate-600", border: "border-slate-200" },
  Razonamiento: { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" },
};

export default function TopicPage() {
  const { slug } = useParams();
  const topic = topics.find((t) => t.slug === slug);
  const exercises = topicExercises[slug] || [];

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Tema no encontrado</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const stats = {
    total: exercises.length,
    calculo: exercises.filter((e) => e.type === "Cálculo").length,
    teoria: exercises.filter((e) => e.type === "Teoría").length,
    razonamiento: exercises.filter((e) => e.type === "Razonamiento").length,
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero header */}
      <div className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-600 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-teal-300/15 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 pt-10 pb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Volver al inicio
          </Link>

          <div className="flex items-start gap-5">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
              topic.color === "teal" ? "bg-white/15" : "bg-white/15"
            }`}>
              <TopicIcon iconName={topic.icon} className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                {topic.name}
              </h1>
              <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
                {topic.description}
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-3 mt-8">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15">
              <BookOpen className="w-3.5 h-3.5 text-emerald-300" />
              <span className="text-sm font-medium text-white/90">{stats.total} ejercicios</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15">
              <Clock className="w-3.5 h-3.5 text-sky-300" />
              <span className="text-sm font-medium text-white/90">{stats.calculo} cálculo</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15">
              <LucideIcons.Lightbulb className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-sm font-medium text-white/90">{stats.razonamiento} razonamiento</span>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise list */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
        <div className="space-y-3">
          {exercises.map((exercise, index) => {
            const diff = difficultyConfig[exercise.difficulty] || difficultyConfig.Media;
            const tp = typeConfig[exercise.type] || typeConfig.Teoría;

            return (
              <div
                key={exercise.id}
                className="group flex items-center gap-4 p-5 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-200 cursor-pointer"
              >
                {/* Number */}
                <div className="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-teal-50 flex items-center justify-center shrink-0 transition-colors duration-200">
                  <span className="text-sm font-bold text-slate-400 group-hover:text-teal-600 transition-colors duration-200">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-slate-800 group-hover:text-teal-700 transition-colors duration-200 mb-1.5">
                    {exercise.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className={`text-xs ${tp.bg} ${tp.text} ${tp.border}`}>
                      {exercise.type}
                    </Badge>
                    <Badge variant="outline" className={`text-xs ${diff.bg} ${diff.text} ${diff.border}`}>
                      {exercise.difficulty}
                    </Badge>
                    <span className="text-xs text-slate-400">{exercise.year}</span>
                  </div>
                </div>

                {/* Arrow */}
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-teal-500 shrink-0 transition-colors duration-200" />
              </div>
            );
          })}
        </div>

        {/* Back link at bottom */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Volver a todos los temas
          </Link>
        </div>
      </div>
    </div>
  );
}
