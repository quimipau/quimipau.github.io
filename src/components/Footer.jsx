import React from "react";
import { FlaskConical, Heart } from "lucide-react";
import { siteInfo } from "../data/mock";

export const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-12 lg:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo("hero"); }} className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-md">
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">Química PAU</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              {siteInfo.tagline}. Recursos de calidad para que consigas la mejor nota en la selectividad.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Secciones</h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => scrollTo("examenes-oficiales")} className="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200">
                  Exámenes oficiales
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("examenes-propios")} className="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200">
                  Exámenes propios
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("practicar-temas")} className="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200">
                  Practicar por temas
                </button>
              </li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Temas</h4>
            <ul className="space-y-2.5">
              <li><a href="#estructura-atomica" className="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200">Estructura atómica</a></li>
              <li><a href="#enlace-quimico" className="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200">Enlace químico</a></li>
              <li><a href="#equilibrio-quimico" className="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200">Equilibrio químico</a></li>
              <li><a href="#acidos-bases" className="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200">Ácidos y bases</a></li>
              <li><a href="#quimica-organica" className="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200">Química orgánica</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            © {siteInfo.year} {siteInfo.author}. Todos los derechos reservados.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            Hecho con <Heart className="w-3.5 h-3.5 text-teal-500 fill-teal-500" /> para estudiantes
          </p>
        </div>
      </div>
    </footer>
  );
};
