export const exerciseDetails = {
  "eq1": {
    id: "eq1",
    title: "Estructura de Lewis del SO₂ y geometría RPECV",
    topicName: "Enlace químico",
    topicSlug: "enlace-quimico",
    type: "Razonamiento",
    difficulty: "Media",
    year: "PAU 2024",

    statement: `
      <p class="mb-4">Considerando la molécula de dióxido de azufre (SO₂):</p>
    `,

    parts: [
      "Dibuja la estructura de Lewis de la molécula de SO₂.",
      "Determina la geometría molecular utilizando el modelo RPECV (Repulsión de Pares de Electrones de la Capa de Valencia).",
      "Indica si la molécula es polar o apolar. Justifica tu respuesta."
    ],

    data: `
      <p>Números atómicos: S = 16; O = 8</p>
    `,

    solution: `
      <h3 class="text-lg font-semibold text-slate-800 mb-3">a) Estructura de Lewis del SO₂</h3>

      <p class="mb-3"><strong>Paso 1: Contar electrones de valencia</strong></p>
      <ul class="list-disc list-inside mb-4 space-y-1 text-slate-700">
        <li>Azufre (S, Z=16): Configuración electrónica [Ne]3s²3p⁴ → <strong>6 electrones de valencia</strong></li>
        <li>Oxígeno (O, Z=8): Configuración electrónica [He]2s²2p⁴ → <strong>6 electrones de valencia</strong> (×2 átomos)</li>
        <li><strong>Total: 6 + 6 + 6 = 18 electrones de valencia</strong></li>
      </ul>

      <p class="mb-3"><strong>Paso 2: Determinar el átomo central</strong></p>
      <p class="mb-4 text-slate-700">El azufre (S) es el átomo central por ser menos electronegativo. Los dos átomos de oxígeno se colocan a los lados.</p>

      <p class="mb-3"><strong>Paso 3: Distribuir los electrones</strong></p>
      <p class="mb-2 text-slate-700">Formamos enlaces dobles S=O para satisfacer la regla del octeto:</p>

      <div class="bg-slate-50 border border-slate-200 rounded-lg p-6 my-4 text-center font-mono text-lg">
        
        <p class="mt-3 text-sm text-slate-600 font-sans">O=S=O con dos pares de electrones no enlazantes sobre el S</p>
      </div>

      <p class="mb-4 text-slate-700">Cada oxígeno tiene 2 pares de electrones no enlazantes y forma un doble enlace con el azufre. El azufre central tiene 1 par de electrones no enlazante.</p>

      <hr class="my-6 border-slate-200" />

      <h3 class="text-lg font-semibold text-slate-800 mb-3">b) Geometría molecular según RPECV</h3>

      <p class="mb-3"><strong>Análisis de pares de electrones alrededor del átomo central (S):</strong></p>
      <ul class="list-disc list-inside mb-4 space-y-1 text-slate-700">
        <li><strong>2 pares enlazantes</strong> (dos enlaces dobles S=O)</li>
        <li><strong>1 par no enlazante</strong> sobre el azufre</li>
        <li><strong>Total: 3 regiones de densidad electrónica</strong></li>
      </ul>

      <p class="mb-3 text-slate-700">Según el modelo RPECV:</p>
      <ul class="list-disc list-inside mb-4 space-y-2 text-slate-700">
        <li>Las 3 regiones de densidad electrónica se disponen en una <strong>geometría electrónica trigonal plana</strong></li>
        <li>Como hay 1 par no enlazante, la <strong>geometría molecular</strong> es <strong>ANGULAR o V</strong></li>
        <li>El ángulo de enlace O-S-O es aproximadamente <strong>119°</strong> (menor que 120° debido a la mayor repulsión del par no enlazante)</li>
      </ul>

      <div class="bg-teal-50 border border-teal-200 rounded-lg p-4 my-4">
        <p class="text-teal-900 font-semibold">Geometría molecular: ANGULAR (V)</p>
        <p class="text-teal-800 text-sm mt-1">Ángulo O-S-O ≈ 119°</p>
      </div>

      <hr class="my-6 border-slate-200" />

      <h3 class="text-lg font-semibold text-slate-800 mb-3">c) Polaridad de la molécula</h3>

      <p class="mb-3 text-slate-700"><strong>Análisis de polaridad:</strong></p>

      <div class="space-y-3 mb-4 text-slate-700">
        <p><strong>1. Enlaces S=O:</strong> Son polares porque el oxígeno (χ = 3.5) es más electronegativo que el azufre (χ = 2.5). Los electrones se desplazan hacia el oxígeno.</p>

        <p><strong>2. Geometría molecular:</strong> La molécula es angular, NO lineal.</p>

        <p><strong>3. Momentos dipolares:</strong> Los dos enlaces S=O tienen momentos dipolares que apuntan hacia los oxígenos. Debido a la geometría angular, estos momentos NO se cancelan.</p>
      </div>

      <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-4 my-4">
        <p class="text-emerald-900 font-semibold mb-2">Conclusión: La molécula de SO₂ es POLAR</p>
        <p class="text-emerald-800 text-sm"><strong>Razón:</strong> Tiene enlaces polares y geometría angular asimétrica, por lo que los momentos dipolares NO se cancelan. El momento dipolar resultante apunta hacia la región donde se encuentran los dos átomos de oxígeno.</p>
      </div>

      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
        <p class="text-blue-900 text-sm"><strong>Nota importante:</strong> Si la molécula fuera lineal (O=S=O con 180°), los momentos dipolares se cancelarían y la molécula sería apolar. Pero debido al par de electrones no enlazante sobre el S, la geometría es angular y la molécula es polar.</p>
      </div>
    `,

    keyPoints: [
      "El modelo RPECV considera tanto pares enlazantes como no enlazantes",
      "Los pares no enlazantes ocupan más espacio y causan mayor repulsión",
      "La geometría electrónica (3 regiones) es trigonal plana, pero la geometría molecular (solo átomos) es angular",
      "Una molécula es polar si tiene enlaces polares y geometría asimétrica que impide la cancelación de momentos dipolares",
      "El SO₂ es un ejemplo clásico de molécula polar con geometría angular"
    ]
  }
};
