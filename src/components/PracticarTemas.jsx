import React from "react";
import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { topics } from "../data/mock";

const TopicIcon = ({ iconName, className }) => {
  const Icon = LucideIcons[iconName];
  if (!Icon) return <LucideIcons.BookOpen className={className} />;
  return <Icon className={className} />;
};

export const PracticarTemas = () => {
  return (
    <section id="practicar-temas" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-500" />
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} />
          <div className="relative px-8 py-10 sm:px-12 sm:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                ¿Necesitas practicar por temas?
              </h2>
              <p className="text-white/80 text-base sm:text-lg">
                Ejercicios organizados por cada bloque del temario de Química.
              </p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
              <LucideIcons.TrendingUp className="w-4 h-4 text-emerald-200" />
              <span className="text-sm font-medium text-white/90">+170 ejercicios</span>
            </div>
          </div>
        </div>

        {/* Topic cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {topics.map((topic, index) => (
            <Link
              key={topic.id}
              to={`/tema/${topic.slug}`}
              className="group relative p-5 rounded-xl bg-white border border-slate-100 hover:border-teal-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${
                topic.color === "teal"
                  ? "bg-teal-50 group-hover:bg-teal-100"
                  : "bg-emerald-50 group-hover:bg-emerald-100"
              }`}>
                <TopicIcon
                  iconName={topic.icon}
                  className={`w-5 h-5 transition-colors duration-300 ${
                    topic.color === "teal"
                      ? "text-teal-600 group-hover:text-teal-700"
                      : "text-emerald-600 group-hover:text-emerald-700"
                  }`}
                />
              </div>
              <h3 className="text-base font-semibold text-slate-800 mb-1.5 group-hover:text-teal-700 transition-colors duration-200">
                {topic.name}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3 line-clamp-2">
                {topic.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">
                  {topic.exercises} ejercicios
                </span>
                <span className="text-teal-500 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
