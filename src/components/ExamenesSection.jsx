import React, { useState } from "react";
import { FileText, Download, BookOpen, Plus, X } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { examData } from "../data/mock";

export const ExamenesOficiales = () => {
  return (
    <section id="examenes-oficiales" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 mb-4">
            <FileText className="w-3.5 h-3.5 text-teal-600" />
            <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">Oficiales</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight mb-4">
            Exámenes oficiales
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Exámenes reales de convocatorias anteriores de la PAU. Practica con los mismos ejercicios que encontrarás en la selectividad.
          </p>
        </div>

        {/* Accordion with exam years */}
        <Accordion type="single" collapsible className="space-y-3">
          {examData.oficiales.map((yearGroup) => (
            <AccordionItem
              key={yearGroup.year}
              value={yearGroup.year}
              className="border border-slate-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-slate-50/50 transition-colors duration-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 flex items-center justify-center">
                    <span className="text-lg font-bold text-teal-700">{yearGroup.year.slice(-2)}</span>
                  </div>
                  <div className="text-left">
                    <p className="text-base font-semibold text-slate-800">Convocatoria {yearGroup.year}</p>
                    <p className="text-sm text-slate-400">{yearGroup.models.length} {yearGroup.models.length === 1 ? 'modelo' : 'modelos'} disponibles</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5">
                <div className="grid gap-3 pt-2">
                  {yearGroup.models.map((model) => (
                    <a
                      key={model.id}
                      href={model.url}
                      className="group flex items-center justify-between p-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-teal-50/60 hover:border-teal-200 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 group-hover:border-teal-200 flex items-center justify-center transition-colors duration-200">
                          <FileText className="w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors duration-200" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-700 group-hover:text-teal-700 transition-colors duration-200">{model.name}</p>
                          <p className="text-sm text-slate-400">{model.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-white text-slate-500 border border-slate-200 text-xs">PDF</Badge>
                        <Download className="w-4 h-4 text-slate-300 group-hover:text-teal-500 transition-colors duration-200" />
                      </div>
                    </a>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export const ExamenesPropios = () => {
  const [propios, setPropios] = useState(examData.propios);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", description: "", difficulty: "Media" });

  const handleAdd = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;
    const newExam = {
      id: `p-${Date.now()}`,
      name: formData.name.trim(),
      description: formData.description.trim() || "Examen personalizado",
      difficulty: formData.difficulty,
      url: "#",
    };
    setPropios((prev) => [...prev, newExam]);
    setFormData({ name: "", description: "", difficulty: "Media" });
    setDialogOpen(false);
  };

  return (
    <section id="examenes-propios" className="py-20 lg:py-28 bg-slate-50/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Propios</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight mb-4">
            Exámenes propios
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Simulacros creados especialmente para que practiques. Diseñados siguiendo el formato y nivel de la PAU.
          </p>
        </div>

        {/* Exam cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {propios.map((exam) => (
            <a
              key={exam.id}
              href={exam.url}
              className="group relative p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-emerald-600" />
                </div>
                <Badge
                  className={`text-xs ${
                    exam.difficulty === "Alta"
                      ? "bg-amber-50 text-amber-700 border-amber-200"
                      : exam.difficulty === "Media"
                      ? "bg-teal-50 text-teal-700 border-teal-200"
                      : "bg-slate-50 text-slate-600 border-slate-200"
                  }`}
                  variant="outline"
                >
                  {exam.difficulty}
                </Badge>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors duration-200">
                {exam.name}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">{exam.description}</p>
              <div className="flex items-center gap-2 text-sm text-teal-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Abrir examen</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </a>
          ))}

          {/* Add new exam button */}
          <button
            onClick={() => setDialogOpen(true)}
            className="group relative p-6 rounded-2xl border-2 border-dashed border-slate-200 hover:border-teal-300 flex flex-col items-center justify-center min-h-[200px] transition-colors duration-300 cursor-pointer bg-transparent"
          >
            <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-teal-50 flex items-center justify-center mb-3 transition-colors duration-300">
              <Plus className="w-6 h-6 text-slate-400 group-hover:text-teal-600 transition-colors duration-300" />
            </div>
            <p className="text-sm font-medium text-slate-400 group-hover:text-teal-600 transition-colors duration-300">Añadir examen</p>
          </button>
        </div>

        {/* Add exam dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-md bg-white">
            <DialogHeader>
              <DialogTitle className="text-slate-800">Añadir examen propio</DialogTitle>
              <DialogDescription className="text-slate-500">
                Crea un nuevo simulacro o examen personalizado.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAdd} className="space-y-4 mt-2">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Nombre del examen</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ej: Simulacro tema 3"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all duration-200"
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Descripción</label>
                <input
                  type="text"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Ej: Ejercicios de termodinámica y equilibrio"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Dificultad</label>
                <div className="flex gap-2">
                  {["Baja", "Media", "Alta"].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setFormData({ ...formData, difficulty: d })}
                      className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                        formData.difficulty === d
                          ? d === "Alta"
                            ? "bg-amber-50 text-amber-700 border-amber-300"
                            : d === "Media"
                            ? "bg-teal-50 text-teal-700 border-teal-300"
                            : "bg-emerald-50 text-emerald-700 border-emerald-300"
                          : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setDialogOpen(false)}
                  className="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors duration-200"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={!formData.name.trim()}
                  className="flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-colors duration-200"
                >
                  Añadir
                </button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
