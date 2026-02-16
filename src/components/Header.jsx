import React, { useState, useEffect } from "react";
import { FlaskConical, Menu, X, FileText, BookOpen, GraduationCap } from "lucide-react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-teal-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <FlaskConical className="w-5 h-5 text-white" />
            </div>
            <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-slate-800" : "text-white"
            }`}>
              Química PAU
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => scrollTo("examenes-oficiales")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                scrolled ? "text-slate-700 hover:bg-teal-50 hover:text-teal-700" : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              <FileText className="w-4 h-4" />
              Exámenes oficiales
            </button>

            <button
              onClick={() => scrollTo("examenes-propios")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                scrolled ? "text-slate-700 hover:bg-teal-50 hover:text-teal-700" : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Exámenes propios
            </button>

            <button
              onClick={() => scrollTo("practicar-temas")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                scrolled ? "text-slate-700 hover:bg-teal-50 hover:text-teal-700" : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              Practicar por temas
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              scrolled ? "text-slate-700 hover:bg-teal-50" : "text-white hover:bg-white/10"
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-teal-100/50 px-6 py-4 space-y-1">
          <button
            onClick={() => scrollTo("examenes-oficiales")}
            className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium text-slate-700 rounded-lg hover:bg-teal-50 transition-colors duration-200"
          >
            <FileText className="w-4 h-4 text-teal-600" />
            Exámenes oficiales
          </button>
          <button
            onClick={() => scrollTo("examenes-propios")}
            className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium text-slate-700 rounded-lg hover:bg-teal-50 transition-colors duration-200"
          >
            <BookOpen className="w-4 h-4 text-teal-600" />
            Exámenes propios
          </button>
          <button
            onClick={() => scrollTo("practicar-temas")}
            className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium text-slate-700 rounded-lg hover:bg-teal-50 transition-colors duration-200"
          >
            <GraduationCap className="w-4 h-4 text-teal-600" />
            Practicar por temas
          </button>
        </div>
      </div>
    </header>
  );
};
