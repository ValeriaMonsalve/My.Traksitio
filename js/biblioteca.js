// ANTIGRAVITI — Biblioteca / Mapas de Sentido (Expanded)
const SYMBOLS_DB = [
  { name:'La Luna', icon:'🌙', category:'celestial',
    meaning:'Representa la intuición, los ciclos emocionales y el inconsciente. La Luna no genera luz propia: refleja, como nuestro mundo interior refleja el cosmos.',
    semiotic:'En casi todas las culturas, la Luna es femenina y está ligada a la fertilidad, la muerte y el renacimiento. Sus fases son metáfora del viaje del alma: nueva (potencial), creciente (manifestación), llena (plenitud), menguante (liberación).',
    practice:'Observa la fase lunar actual y pregúntate: ¿en qué fase está tu vida emocional? La sincronización consciente con los ciclos lunares es una forma ancestral de autoconocimiento.' },
  { name:'El Ojo', icon:'👁️', category:'cuerpo',
    meaning:'El ojo que todo lo ve: la conciencia expandida que observa sin juzgar. En el esoterismo, el tercer ojo es la puerta a la percepción más allá de lo físico.',
    semiotic:'El Ojo de Horus (Udyat) era un amuleto de protección y sanación. Cada parte del ojo representaba una fracción matemática y un sentido. Ver es comprender; abrir los ojos es despertar.',
    practice:'Practica la "mirada suave": observa el mundo sin enfocar, dejando que la periferia revele lo que el foco ignora. Es una meditación visual milenaria.' },
  { name:'El Fuego', icon:'🔥', category:'elemento',
    meaning:'Transformación, purificación y voluntad. El fuego destruye la forma pero libera la esencia. Es el elemento de la alquimia interior: el calcinatio que reduce el ego a cenizas.',
    semiotic:'Prometeo robó el fuego divino para dárselo a los humanos: el conocimiento como llama. En todas las tradiciones, el fuego sagrado es el puente entre lo humano y lo divino.',
    practice:'Encender una vela con intención es uno de los rituales más universales. La llama actúa como punto focal para la meditación y como símbolo de la luz interior que nunca se apaga.' },
  { name:'La Serpiente', icon:'🐍', category:'animal',
    meaning:'Renovación cíclica, sabiduría oculta y energía kundalini. La serpiente que muda de piel es el arquetipo máximo de la transformación sin muerte.',
    semiotic:'En el caduceo de Hermes, dos serpientes entrelazan el bastón: la dualidad reconciliada. En la tradición hindú, la kundalini es la serpiente dormida en la base de la columna, la energía vital esperando despertar.',
    practice:'Cuando sientas resistencia al cambio, visualiza una serpiente mudando su piel. Lo que dejas atrás no se pierde: se transforma.' },
  { name:'El Tarot', icon:'🃏', category:'herramienta',
    meaning:'No es adivinación: es un espejo simbólico del viaje del alma. Los 22 Arcanos Mayores mapean las etapas de la individuación jungiana.',
    semiotic:'Cada carta es un nodo en la red de significados. El Loco (0) inicia el viaje; El Mundo (XXI) lo completa. Entre ambos, todas las pruebas, revelaciones y transformaciones que constituyen una vida consciente.',
    practice:'Elige una carta al azar cada mañana. No busques predicciones: pregúntate qué aspecto de tu vida resuena con el arquetipo de esa carta.' },
  { name:'El Cristal', icon:'💎', category:'mineral',
    meaning:'Claridad, amplificación de la intención y memoria de la tierra. Los cristales son, literalmente, información congelada: estructuras moleculares perfectas que resuenan con frecuencias específicas.',
    semiotic:'En la tradición chamánica, los cristales son "huesos de la tierra", depositarios de la memoria geológica del planeta. La cuarzo transparente simboliza la mente purificada.',
    practice:'Sostener un cristal durante la meditación no es magia: es anclar la atención en un objeto. La mente necesita focos; el cristal es un punto de concentración elegante.' },
  { name:'El Pentáculo', icon:'⛤', category:'geometria',
    meaning:'La estrella de cinco puntas: los cinco elementos (tierra, agua, fuego, aire, espíritu) en equilibrio. Es un mapa de la totalidad del ser.',
    semiotic:'Lejos de su asociación moderna con lo oscuro, el pentáculo era un símbolo pitagórico de salud y perfección. Leonardo lo inscribió dentro del cuerpo humano: somos la estrella.',
    practice:'Dibuja un pentáculo y en cada punta escribe un aspecto de tu vida (cuerpo, mente, emociones, relaciones, espíritu). ¿Están en equilibrio?' },
  { name:'El Incienso', icon:'🌿', category:'herramienta',
    meaning:'Puente entre lo material y lo espiritual. El humo que asciende es metáfora de las oraciones, intenciones y pensamientos que se elevan hacia lo trascendente.',
    semiotic:'En todas las tradiciones—católica, budista, indígena—el incienso marca la transición de lo profano a lo sagrado. El olfato es el sentido más primitivo y el más conectado con la memoria emocional.',
    practice:'Encender incienso antes de un momento de reflexión crea un ancla olfativa: tu cerebro aprenderá a asociar ese aroma con el estado de introspección.' },
  { name:'Las Runas', icon:'ᚱ', category:'herramienta',
    meaning:'Alfabeto sagrado nórdico donde cada símbolo es simultáneamente letra, concepto filosófico y fuerza de la naturaleza.',
    semiotic:'Odín se colgó del árbol Yggdrasil durante nueve días para recibir la sabiduría de las runas. Son símbolos obtenidos a través del sacrificio: el conocimiento tiene un precio.',
    practice:'Las runas nos enseñan que cada símbolo lleva un peso. Elige una palabra que te defina hoy y pregúntate qué sacrificaste o ganarás por ella.' },
  { name:'El Espejo', icon:'🪞', category:'herramienta',
    meaning:'Reflejo del alma y herramienta de autoconocimiento. El espejo no miente ni juzga: muestra lo que es.',
    semiotic:'El mito de Narciso no advierte contra la vanidad, sino contra la incapacidad de reconocerse. Perseo venció a Medusa usando un espejo: a veces solo podemos enfrentar el horror indirectamente.',
    practice:'Practica la "meditación del espejo": mírate a los ojos durante 5 minutos sin apartar la vista. Lo que emerja es material para tu autoconocimiento.' },
  { name:'La Espiral', icon:'🌀', category:'geometria',
    meaning:'El patrón fundamental del universo: galaxias, conchas, ADN. La espiral nunca regresa al mismo punto exacto; es repetición con evolución.',
    semiotic:'La espiral celta representa el viaje eterno del alma: nacimiento, muerte, renacimiento. No es un círculo cerrado (repetición) sino una hélice abierta (progresión).',
    practice:'Cuando sientas que estás "dando vueltas", recuerda: una espiral parece un círculo desde arriba, pero desde el lado se revela el ascenso.' },
  { name:'La Estrella', icon:'⭐', category:'celestial',
    meaning:'Guía, esperanza y destino. La estrella es la luz que persiste en la oscuridad más profunda. En el Tarot, el Arcano XVII promete renovación después de la destrucción.',
    semiotic:'Los Reyes Magos siguieron una estrella. Los marineros navegan por ellas. La estrella polar es el punto fijo en un cielo que gira: tu norte interior.',
    practice:'Identifica tu "estrella polar": el valor o principio que permanece constante sin importar las tormentas. Úsalo como brújula en momentos de confusión.' },
  // ─── NUEVOS SÍMBOLOS EXPANDIDOS ───
  { name:'El Agua', icon:'💧', category:'elemento',
    meaning:'Flujo, emociones y adaptabilidad. El agua toma la forma de su contenedor sin perder su esencia. Es el elemento del inconsciente y las emociones profundas.',
    semiotic:'En el bautismo cristiano, la inmersión en agua simboliza muerte y renacimiento. En la tradición china, el agua es el más poderoso de los elementos: no lucha, pero erosiona la roca.',
    practice:'Cuando te sientas rígido, observa agua corriendo. Pregúntate: ¿dónde estoy luchando contra la corriente en lugar de fluir con ella?' },
  { name:'La Tierra', icon:'🌍', category:'elemento',
    meaning:'Estabilidad, nutrición y materialización. La tierra es la madre que sostiene todo crecimiento. Es el elemento de lo concreto, lo tangible, lo manifiesto.',
    semiotic:'Pachamama, Gaia, Démeter: en todas las culturas, la tierra es la gran madre. Plantar semillas es un acto sagrado que conecta la intención humana con los ciclos de la naturaleza.',
    practice:'Camina descalzo sobre la tierra durante 10 minutos. El "grounding" reconecta tu sistema nervioso con las frecuencias electromagnéticas del planeta.' },
  { name:'El Aire', icon:'🌬️', category:'elemento',
    meaning:'Pensamiento, comunicación y libertad. El aire es invisible pero esencial. Representa el mundo de las ideas, la palabra hablada y el soplo vital (pneuma, ruach, prana).',
    semiotic:'En la tradición yogui, prana es la energía vital transportada por la respiración. El control del aliento (pranayama) es control de la mente. Cada respiración es un microritual de vida-muerte-renacimiento.',
    practice:'Practica la respiración 4-7-8: inhala 4 segundos, retén 7, exhala 8. Este patrón activa el nervio vago y calma el sistema nervioso en menos de un minuto.' },
  { name:'El Sol', icon:'☀️', category:'celestial',
    meaning:'Conciencia, vitalidad y verdad. El Sol ilumina sin discriminar. Es el principio masculino que complementa la Luna femenina: juntos forman la totalidad.',
    semiotic:'Ra, Apolo, Tonatiuh: el Sol ha sido dios en todas las civilizaciones. Su ciclo diario es la metáfora más universal: amanecer (nacimiento), cénit (plenitud), ocaso (muerte), noche (regeneración).',
    practice:'Observa un amanecer completo en silencio. El Sol te enseña que la oscuridad no es permanente y que la luz regresa incluso después de la noche más larga.' },
  { name:'Saturno', icon:'🪐', category:'celestial',
    meaning:'Tiempo, estructura, límites y maestría. Saturno es el gran maestro del zodíaco: impone restricciones no para castigar sino para fortalecer. Sus lecciones son duras pero sus regalos son permanentes.',
    semiotic:'Cronos devoraba a sus hijos: el tiempo consume lo que no madura. El "retorno de Saturno" (aprox. 29 años) marca umbrales de maduración. Es la iniciación astrológica a la adultez consciente.',
    practice:'¿Qué disciplina has evitado? Saturno te invita a abrazarla. La libertad verdadera nace de la estructura, no del caos.' },
  { name:'El Loto', icon:'🪷', category:'planta',
    meaning:'Iluminación que emerge de la oscuridad. El loto crece en el barro y florece inmaculado en la superficie. Es la metáfora perfecta de la transformación espiritual.',
    semiotic:'En el budismo, el loto de mil pétalos corona el chakra superior. Cada pétalo es un aspecto de la conciencia iluminada. El barro no es obstáculo: es nutriente. Sin sufrimiento, no hay despertar.',
    practice:'Identifica el "barro" de tu vida actual: esa situación difícil que parece no tener salida. Pregúntate: ¿qué flor puede crecer de este lodo?' },
  { name:'El Árbol', icon:'🌳', category:'planta',
    meaning:'Conexión entre mundos. Las raíces tocan el inframundo, el tronco habita la tierra, las ramas alcanzan el cielo. El árbol es el axis mundi: el eje del mundo.',
    semiotic:'Yggdrasil nórdico, el Árbol de la Vida cabalístico, el Bodhi de Buda: el árbol sagrado es universal. Representa la interconexión de todos los planos de existencia.',
    practice:'Abraza un árbol durante un minuto con los ojos cerrados. No es superstición: la investigación muestra que el contacto con la naturaleza reduce el cortisol y aumenta la serotonina.' },
  { name:'La Rosa', icon:'🌹', category:'planta',
    meaning:'Belleza que se protege. La rosa combina la fragilidad de los pétalos con la defensa de las espinas. Es el símbolo alquímico del corazón abierto pero sabio.',
    semiotic:'La rosa mística del Paraíso de Dante, la Rosa-Cruz de los rosacruces, la rosa blanca de la Virgen: este símbolo cruza todas las tradiciones como emblema del amor divino encarnado.',
    practice:'Contempla una rosa real durante 5 minutos. Observa cómo sus pétalos se abren en espiral desde el centro. Tu corazón se abre de la misma manera: gradualmente, desde dentro.' },
  { name:'El Cuervo', icon:'🐦‍⬛', category:'animal',
    meaning:'Mensajero entre mundos, inteligencia oculta y transformación. El cuervo ve lo que otros no ven y habla verdades incómodas.',
    semiotic:'Odín tenía dos cuervos: Huginn (pensamiento) y Muninn (memoria). En las tradiciones nativas americanas, el cuervo es el trickster que trae el fuego. Su negrura no es oscuridad: es el color que contiene todos los colores.',
    practice:'Cuando un pensamiento incómodo te visite repetidamente, no lo ahuyentes. Es tu cuervo interior trayéndote un mensaje. Escúchalo.' },
  { name:'El Lobo', icon:'🐺', category:'animal',
    meaning:'Instinto, lealtad y el poder de la manada. El lobo encarna la tensión entre lo salvaje y lo social, entre el individuo y la comunidad.',
    semiotic:'Rómulo y Remo fueron amamantados por una loba. En la tradición nativa americana, el lobo es el maestro que enseña a través de la experiencia. El "lobo solitario" es un mito: los lobos necesitan su manada.',
    practice:'¿Quién es tu manada? Identifica a las 3-5 personas que genuinamente te sostienen. Nutre esas relaciones como un lobo alfa nutre a su familia.' },
  { name:'La Mariposa', icon:'🦋', category:'animal',
    meaning:'Metamorfosis radical. La mariposa no es una oruga mejorada: es un ser completamente nuevo que emergió de la disolución total del anterior.',
    semiotic:'Dentro del capullo, la oruga literalmente se disuelve en una sopa celular antes de reorganizarse. Esta "muerte" completa es necesaria para la transformación. No se puede volar sin dejar de arrastrarse.',
    practice:'Si estás en un período caótico donde nada tiene sentido, quizás estás dentro del capullo. No fuerces la salida: la disolución es parte necesaria de tu metamorfosis.' },
  { name:'La Mano', icon:'🤲', category:'cuerpo',
    meaning:'Dar, recibir y crear. Las manos son las extensiones del corazón en el mundo material. Los mudras hindúes demuestran que cada posición de los dedos activa una energía diferente.',
    semiotic:'La mano de Fátima (Hamsa) protege contra el mal de ojo. El mudra Abhaya (mano levantada) significa "no temas". Las manos en oración unen las polaridades del ser.',
    practice:'Frota tus manos vigorosamente durante 30 segundos, luego sepáralas lentamente. ¿Sientes el campo energético entre ellas? Eso es prana, chi, energía vital.' },
  { name:'El Corazón', icon:'❤️‍🔥', category:'cuerpo',
    meaning:'No solo el órgano del amor: el corazón es el centro de la inteligencia emocional. El Instituto HeartMath ha demostrado que el corazón tiene su propio "cerebro" con 40,000 neuronas.',
    semiotic:'En la tradición sufí, el qalb (corazón) es el órgano de percepción espiritual. Los egipcios preservaban el corazón pero descartaban el cerebro en la momificación: sabían que la sabiduría reside en el pecho.',
    practice:'Coloca tu mano sobre el corazón y respira lentamente. Siente su ritmo. Pregúntale algo que necesites saber. La respuesta que surja —antes de que la mente la analice— es su mensaje.' },
  { name:'La Amatista', icon:'🔮', category:'mineral',
    meaning:'Protección espiritual y claridad mental. Su nombre viene del griego "amethystos" (no intoxicado): los griegos creían que prevenía la embriaguez, tanto literal como metafórica.',
    semiotic:'La amatista es el cristal del tercer ojo y la corona. En la tradición católica, los obispos llevan anillos de amatista como símbolo de sobriedad espiritual. Es la piedra que protege contra la intoxicación del ego.',
    practice:'Coloca una amatista bajo tu almohada si tienes sueños turbulentos. Su presencia actúa como ancla simbólica para la mente durante el sueño.' },
  { name:'La Obsidiana', icon:'🖤', category:'mineral',
    meaning:'Espejo de sombra y verdad. La obsidiana es vidrio volcánico: fuego transformado en espejo. Los aztecas la usaban para fabricar espejos de adivinación (tezcatl).',
    semiotic:'Tezcatlipoca, el "espejo humeante" azteca, usaba un espejo de obsidiana para mostrar verdades ocultas. La obsidiana no embellece: refleja sin filtro, revelando lo que preferimos no ver.',
    practice:'Sostén una obsidiana y pregúntate: ¿qué verdad sobre mí mismo estoy evitando? La piedra no responde; te obliga a responderte a ti mismo.' },
  { name:'El Mandala', icon:'☸️', category:'geometria',
    meaning:'Mapa del cosmos interior. El mandala (del sánscrito "círculo") es una representación visual de la totalidad del ser. Jung lo consideraba el arquetipo del Self.',
    semiotic:'Los monjes tibetanos crean mandalas de arena que luego destruyen: la impermanencia como enseñanza. El mandala no es un objeto de adoración: es un proceso de meditación que revela la estructura del alma.',
    practice:'Dibuja un mandala intuitivo: comienza por un punto central y expande formas simétricas sin planificar. Lo que dibujes es un retrato de tu estado interior actual.' },
  { name:'La Cruz', icon:'✝️', category:'geometria',
    meaning:'Intersección de lo horizontal (humano) y lo vertical (divino). La cruz es anterior al cristianismo: aparece en todas las culturas como símbolo del cruce de planos.',
    semiotic:'La cruz celta, la cruz ankh egipcia, la svástica hindú (antes de su apropiación): todas representan la unión de opuestos y el punto donde el tiempo cruza la eternidad.',
    practice:'Extiende tus brazos en forma de cruz. Tu cuerpo es la intersección de cielo y tierra, pasado y futuro. En el centro exacto —tu corazón— está el punto de poder.' },
  { name:'La Flor de la Vida', icon:'✿', category:'geometria',
    meaning:'La geometría sagrada del universo. Este patrón de círculos superpuestos contiene en sí mismo todas las formas geométricas posibles: es la matriz del cosmos.',
    semiotic:'Encontrada en el Templo de Osiris en Abidos (Egipto), en templos chinos, en sinagogas y mezquitas. Su universalidad sugiere que múltiples culturas descubrieron el mismo patrón fundamental.',
    practice:'Dibuja una Flor de la Vida con compás. El acto de trazar cada círculo es meditación geométrica: la mente se aquieta cuando sigue un patrón sagrado.' },
  { name:'La Vela', icon:'🕯️', category:'herramienta',
    meaning:'Intención materializada. Encender una vela es el ritual más simple y más poderoso: transformas fuego en luz, oscuridad en claridad, deseo en acción simbólica.',
    semiotic:'En todas las tradiciones, la luz vence a la oscuridad. La vela de Yahrzeit judía, las veladoras mexicanas, las velas votivas católicas: el fuego domesticado es oración visible.',
    practice:'Esta noche, enciende una vela en silencio. Mientras la miras, formula una intención clara. Cuando la apagues, suelta la intención al universo. Has completado un ritual ancestral.' },
  { name:'El Péndulo', icon:'⚖️', category:'herramienta',
    meaning:'Diálogo con el inconsciente. El péndulo amplifica los micromovimientos involuntarios del cuerpo (efecto ideomotor), dando voz a lo que el cuerpo sabe pero la mente ignora.',
    semiotic:'Desde la radiestesia medieval hasta la práctica contemporánea, el péndulo es un traductor entre el consciente y el inconsciente. No "adivina": amplifica la intuición corporal.',
    practice:'Sostén un objeto pesado de un hilo y haz preguntas de sí/no. Observa sin forzar. Lo que tu cuerpo sabe se manifiesta en el movimiento.' },
  { name:'El Búho', icon:'🦉', category:'animal',
    meaning:'Visión nocturna del alma. El búho ve en la oscuridad lo que otros no pueden percibir. Es el guardián de la sabiduría oculta y el mensajero de Atenea.',
    semiotic:'El búho de Minerva alza el vuelo al atardecer (Hegel): la sabiduría llega cuando la acción termina y comienza la reflexión. En tradiciones mesoamericanas, el tecolote anuncia transformaciones profundas.',
    practice:'Antes de tomar una decisión importante, espera al anochecer. La sabiduría del búho es nocturna: la claridad viene cuando permites que la oscuridad hable.' },
  { name:'La Sal', icon:'🧂', category:'mineral',
    meaning:'Purificación y protección. La sal preserva lo que es valioso y disuelve lo que no sirve. En alquimia, es uno de los tres principios junto al azufre y el mercurio.',
    semiotic:'Los romanos pagaban salarios en sal (salarium). Un círculo de sal protege contra energías negativas en múltiples tradiciones. La sal es la tierra purificada: materia en su forma más esencial.',
    practice:'Añade un puñado de sal al agua del baño con intención de limpieza energética. Visualiza que el agua salada disuelve tensiones, miedos y energías que no te pertenecen.' },
  { name:'La Salvia', icon:'🍃', category:'planta',
    meaning:'Limpieza energética y sabiduría. Su nombre viene del latín salvare (salvar). Los pueblos nativos americanos la usan en ceremonias de smudging para purificar espacios y personas.',
    semiotic:'Quemar salvia libera iones negativos que purifican el aire (esto es ciencia, no magia). El humo ascendente representa oraciones que se elevan. Es un puente entre la fitoterapia y lo sagrado.',
    practice:'Enciende un manojo de salvia seca y camina por tu espacio permitiendo que el humo llegue a las esquinas. Las esquinas acumulan energía estancada como acumulan polvo.' }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('symbols-grid');
  const searchInput = document.getElementById('symbol-search');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid) return;

  function renderSymbols(filter = 'all', search = '') {
    grid.innerHTML = '';
    const filtered = SYMBOLS_DB.filter(s => {
      const matchCat = filter === 'all' || s.category === filter;
      const matchSearch = !search || s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.meaning.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = '<div class="col-span-full text-center py-12"><p class="font-cinzel text-lg" style="color:#808080">No se encontraron símbolos</p><p class="font-body text-xs mt-2" style="color:#808080">Intenta con otra búsqueda o categoría</p></div>';
      return;
    }

    filtered.forEach((s, i) => {
      const card = document.createElement('div');
      card.className = 'symbol-card reveal';
      card.style.animationDelay = `${i * 0.06}s`;
      card.innerHTML = `
        <span class="symbol-icon">${s.icon}</span>
        <h3 class="font-cinzel text-lg mb-2" style="color:#E0E0E0">${s.name}</h3>
        <span class="inline-block px-3 py-1 rounded-full text-xs mb-3" style="background:rgba(106,13,173,0.15);color:#6A0DAD;border:1px solid rgba(106,13,173,0.3)">${s.category}</span>
        <p class="text-sm font-body mb-3" style="color:#C0C0C0;line-height:1.6">${s.meaning}</p>
        <details class="mt-2">
          <summary class="text-xs cursor-pointer" style="color:#6A0DAD;letter-spacing:0.08em">✦ Lectura semiótica</summary>
          <p class="text-xs font-body mt-2" style="color:#808080;line-height:1.5">${s.semiotic}</p>
        </details>
        <details class="mt-2">
          <summary class="text-xs cursor-pointer" style="color:#6A0DAD;letter-spacing:0.08em">✦ Práctica sugerida</summary>
          <p class="text-xs font-body mt-2" style="color:#808080;line-height:1.5">${s.practice}</p>
        </details>`;
      grid.appendChild(card);
    });

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    grid.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

  // Update count
  const countEl = document.getElementById('symbol-count');
  if (countEl) countEl.textContent = SYMBOLS_DB.length;

  renderSymbols();

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
      renderSymbols(activeFilter, searchInput.value);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSymbols(btn.dataset.filter, searchInput?.value || '');
    });
  });
});
