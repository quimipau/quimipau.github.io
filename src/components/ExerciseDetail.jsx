import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Clock, Lightbulb, AlertCircle } from "lucide-react";
import { Badge } from "./ui/badge";
import { exerciseDetails } from "../data/exerciseDetails";

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

export default function ExerciseDetail() {
  const { exerciseId } = useParams();
  const exercise = exerciseDetails[exerciseId];

  if (!exercise) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Ejercicio no encontrado</h1>
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

  const diff = difficultyConfig[exercise.difficulty] || difficultyConfig.Media;
  const tp = typeConfig[exercise.type] || typeConfig.Teoría;

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
            to={`/tema/${exercise.topicSlug}`}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Volver a {exercise.topicName}
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="outline" className={`text-sm ${tp.bg} ${tp.text} ${tp.border}`}>
              {exercise.type}
            </Badge>
            <Badge variant="outline" className={`text-sm ${diff.bg} ${diff.text} ${diff.border}`}>
              Dificultad: {exercise.difficulty}
            </Badge>
            <Badge variant="outline" className="text-sm bg-white/10 text-white/90 border-white/20">
              {exercise.year}
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {exercise.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
        {/* Enunciado */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Enunciado</h2>
          </div>
          <div className="prose prose-slate max-w-none">
            <div dangerouslySetInnerHTML={{ __html: exercise.statement }} />
          </div>
        </div>

        {/* Datos si existen */}
        {exercise.data && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Datos</h3>
                <div className="text-blue-800 text-sm space-y-1" dangerouslySetInnerHTML={{ __html: exercise.data }} />
              </div>
            </div>
          </div>
        )}

        {/* Apartados si existen */}
        {exercise.parts && exercise.parts.length > 0 && (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-800 mb-3">Apartados</h3>
            <ol className="list-[lower-alpha] list-inside space-y-2 text-slate-700">
              {exercise.parts.map((part, index) => (
                <li key={index} className="ml-2">{part}</li>
              ))}
            </ol>
          </div>
        )}

        {/* Resolución */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Resolución</h2>
          </div>
          <div className="prose prose-slate max-w-none">
            <div dangerouslySetInnerHTML={{ __html: exercise.solution }} />
          </div>
        </div>

        {/* Conceptos clave */}
        {exercise.keyPoints && exercise.keyPoints.length > 0 && (
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl border border-teal-200 p-6 mb-6">
            <h3 className="font-semibold text-teal-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Conceptos clave
            </h3>
            <ul className="space-y-2">
              {exercise.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2 text-teal-800">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link
            to={`/tema/${exercise.topicSlug}`}
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Volver a todos los ejercicios de {exercise.topicName}
          </Link>
        </div>
      </div>
    </div>
  );
}
