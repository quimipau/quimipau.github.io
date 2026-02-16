// Mock data for Química PAU landing page

export const examData = {
  oficiales: [
    {
      year: "2024",
      models: [
        { id: "2024-m1", name: "Modelo 1", description: "Junio 2024 - Convocatoria ordinaria", url: "#" },
        { id: "2024-m2", name: "Modelo 2", description: "Julio 2024 - Convocatoria extraordinaria", url: "#" }
      ]
    },
    {
      year: "2023",
      models: [
        { id: "2023-m1", name: "Modelo 1", description: "Junio 2023 - Convocatoria ordinaria", url: "#" },
        { id: "2023-m2", name: "Modelo 2", description: "Julio 2023 - Convocatoria extraordinaria", url: "#" }
      ]
    },
    {
      year: "2022",
      models: [
        { id: "2022-m1", name: "Modelo 1", description: "Junio 2022 - Convocatoria ordinaria", url: "#" }
      ]
    }
  ],
  propios: [
    { id: "p1", name: "Simulacro completo #1", description: "Examen tipo PAU - Todos los bloques", difficulty: "Media", url: "#" },
    { id: "p2", name: "Simulacro completo #2", description: "Examen tipo PAU - Enfoque en cálculos", difficulty: "Alta", url: "#" },
    { id: "p3", name: "Repaso rápido", description: "Preguntas clave de todos los temas", difficulty: "Baja", url: "#" }
  ]
};

export const topics = [
  {
    id: "t1",
    name: "Estructura atómica",
    slug: "estructura-atomica",
    icon: "Atom",
    description: "Modelos atómicos, configuración electrónica y propiedades periódicas",
    exercises: 24,
    color: "teal"
  },
  {
    id: "t2",
    name: "Enlace químico",
    slug: "enlace-quimico",
    icon: "Link2",
    description: "Tipos de enlace, geometría molecular y fuerzas intermoleculares",
    exercises: 18,
    color: "emerald"
  },
  {
    id: "t3",
    name: "Termodinámica",
    slug: "termodinamica",
    icon: "Flame",
    description: "Entalpía, entropía, energía libre y espontaneidad",
    exercises: 22,
    color: "teal"
  },
  {
    id: "t4",
    name: "Equilibrio químico",
    slug: "equilibrio-quimico",
    icon: "Scale",
    description: "Constantes de equilibrio, principio de Le Chatelier",
    exercises: 20,
    color: "emerald"
  },
  {
    id: "t5",
    name: "Ácidos y bases",
    slug: "acidos-bases",
    icon: "FlaskConical",
    description: "pH, valoraciones, disoluciones reguladoras e hidrólisis",
    exercises: 26,
    color: "teal"
  },
  {
    id: "t6",
    name: "Redox",
    slug: "redox",
    icon: "Zap",
    description: "Reacciones de oxidación-reducción, pilas y electrólisis",
    exercises: 19,
    color: "emerald"
  },
  {
    id: "t7",
    name: "Química orgánica",
    slug: "quimica-organica",
    icon: "Hexagon",
    description: "Nomenclatura, isomería, reacciones orgánicas y polímeros",
    exercises: 28,
    color: "teal"
  }
];

// Ejercicios mock por tema
export const topicExercises = {
  "estructura-atomica": [
    { id: "ea1", title: "Configuración electrónica del Fe y Fe²⁺", type: "Cálculo", difficulty: "Media", year: "PAU 2024" },
    { id: "ea2", title: "Números cuánticos del último electrón del Cl", type: "Teoría", difficulty: "Baja", year: "PAU 2023" },
    { id: "ea3", title: "Propiedades periódicas: radio atómico y electronegatividad", type: "Razonamiento", difficulty: "Media", year: "PAU 2023" },
    { id: "ea4", title: "Modelo de Bohr: cálculo de energía de ionización del H", type: "Cálculo", difficulty: "Alta", year: "PAU 2022" },
    { id: "ea5", title: "Isótopos y masa atómica media del Bromo", type: "Cálculo", difficulty: "Baja", year: "Propio" },
    { id: "ea6", title: "Principio de exclusión de Pauli y regla de Hund", type: "Teoría", difficulty: "Media", year: "PAU 2024" },
  ],
  "enlace-quimico": [
    { id: "eq1", title: "Estructura de Lewis del SO₂ y geometría RPECV", type: "Razonamiento", difficulty: "Media", year: "PAU 2024" },
    { id: "eq2", title: "Hibridación del carbono en el eteno", type: "Teoría", difficulty: "Media", year: "PAU 2023" },
    { id: "eq3", title: "Fuerzas intermoleculares: punto de ebullición de HF vs HCl", type: "Razonamiento", difficulty: "Baja", year: "PAU 2022" },
    { id: "eq4", title: "Enlace iónico: energía reticular del NaCl", type: "Cálculo", difficulty: "Alta", year: "PAU 2024" },
    { id: "eq5", title: "Polaridad de moléculas: CCl₄ vs CHCl₃", type: "Razonamiento", difficulty: "Media", year: "Propio" },
  ],
  "termodinamica": [
    { id: "td1", title: "Cálculo de ΔH° usando entalpías de formación", type: "Cálculo", difficulty: "Media", year: "PAU 2024" },
    { id: "td2", title: "Ley de Hess: entalpía de combustión del metano", type: "Cálculo", difficulty: "Alta", year: "PAU 2023" },
    { id: "td3", title: "Espontaneidad: ΔG a diferentes temperaturas", type: "Cálculo", difficulty: "Alta", year: "PAU 2023" },
    { id: "td4", title: "Entropía: predicción del signo de ΔS", type: "Razonamiento", difficulty: "Baja", year: "PAU 2022" },
    { id: "td5", title: "Energías de enlace y entalpía de reacción", type: "Cálculo", difficulty: "Media", year: "Propio" },
  ],
  "equilibrio-quimico": [
    { id: "equ1", title: "Cálculo de Kc a partir de concentraciones", type: "Cálculo", difficulty: "Media", year: "PAU 2024" },
    { id: "equ2", title: "Principio de Le Chatelier: efecto de la presión", type: "Razonamiento", difficulty: "Media", year: "PAU 2023" },
    { id: "equ3", title: "Relación entre Kc y Kp", type: "Cálculo", difficulty: "Alta", year: "PAU 2023" },
    { id: "equ4", title: "Grado de disociación del PCl₅", type: "Cálculo", difficulty: "Alta", year: "PAU 2022" },
    { id: "equ5", title: "Equilibrio heterogéneo: CaCO₃ ⇌ CaO + CO₂", type: "Razonamiento", difficulty: "Baja", year: "Propio" },
  ],
  "acidos-bases": [
    { id: "ab1", title: "Cálculo de pH de ácido débil (CH₃COOH)", type: "Cálculo", difficulty: "Media", year: "PAU 2024" },
    { id: "ab2", title: "Valoración ácido-base: curva de valoración", type: "Cálculo", difficulty: "Alta", year: "PAU 2024" },
    { id: "ab3", title: "Hidrólisis de sales: pH del CH₃COONa", type: "Cálculo", difficulty: "Media", year: "PAU 2023" },
    { id: "ab4", title: "Disolución reguladora: cálculo de pH", type: "Cálculo", difficulty: "Alta", year: "PAU 2022" },
    { id: "ab5", title: "Teoría de Brønsted-Lowry: pares conjugados", type: "Teoría", difficulty: "Baja", year: "Propio" },
    { id: "ab6", title: "Indicadores ácido-base y punto de equivalencia", type: "Razonamiento", difficulty: "Media", year: "Propio" },
  ],
  "redox": [
    { id: "rx1", title: "Ajuste de reacciones redox en medio ácido", type: "Cálculo", difficulty: "Media", year: "PAU 2024" },
    { id: "rx2", title: "Pila galvánica: cálculo de fem", type: "Cálculo", difficulty: "Alta", year: "PAU 2023" },
    { id: "rx3", title: "Electrólisis: leyes de Faraday", type: "Cálculo", difficulty: "Alta", year: "PAU 2023" },
    { id: "rx4", title: "Potenciales de reducción y espontaneidad", type: "Razonamiento", difficulty: "Media", year: "PAU 2022" },
    { id: "rx5", title: "Números de oxidación en compuestos complejos", type: "Teoría", difficulty: "Baja", year: "Propio" },
  ],
  "quimica-organica": [
    { id: "qo1", title: "Nomenclatura IUPAC de compuestos oxigenados", type: "Teoría", difficulty: "Baja", year: "PAU 2024" },
    { id: "qo2", title: "Isomería: estructural, geométrica y óptica", type: "Razonamiento", difficulty: "Media", year: "PAU 2024" },
    { id: "qo3", title: "Reacciones de sustitución y eliminación", type: "Razonamiento", difficulty: "Alta", year: "PAU 2023" },
    { id: "qo4", title: "Polimerización: adición vs condensación", type: "Teoría", difficulty: "Media", year: "PAU 2022" },
    { id: "qo5", title: "Grupos funcionales y propiedades físicas", type: "Razonamiento", difficulty: "Media", year: "Propio" },
    { id: "qo6", title: "Reactividad de alcoholes, aldehídos y ácidos", type: "Razonamiento", difficulty: "Alta", year: "Propio" },
  ],
};

export const siteInfo = {
  author: "Profesor de Química",
  year: 2025,
  tagline: "Material educativo para estudiantes de PAU"
};
