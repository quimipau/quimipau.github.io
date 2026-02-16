import React from "react";
import { Rocket, ArrowRight } from "lucide-react";

export const BannerDestacado = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }} />

          {/* Content */}
          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8">
              <Rocket className="w-4 h-4 text-teal-400" />
              <span className="text-sm font-medium text-teal-300">Empieza ahora</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
              ¿Preparado para aprobar
              <span className="text-teal-400"> la PAU</span>?
            </h2>

            <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
              Accede a todo el material que necesitas. Exámenes, ejercicios y recursos organizados para que tu preparación sea eficiente.
            </p>

            <button
              onClick={() => scrollTo("practicar-temas")}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-teal-500 text-white font-semibold rounded-xl shadow-lg shadow-teal-500/25 hover:bg-teal-400 hover:shadow-xl hover:shadow-teal-400/30 hover:-translate-y-0.5 transition-all duration-300 text-base"
            >
              Practicar ahora
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
