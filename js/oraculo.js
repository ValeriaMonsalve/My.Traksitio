// ANTIGRAVITI — Oracle Symbolic Reader (Expanded Edition)
const ORACLE_DB = {
  incertidumbre: {
    title: 'La Niebla del Devenir',
    response: 'La incertidumbre no es ausencia de camino, sino el momento donde todos los caminos existen simultáneamente. En la semiótica esotérica, la niebla representa el estado liminal: el umbral entre lo conocido y lo por conocer. Los antiguos oráculos de Delfos respiraban vapores de la tierra para acceder a esta visión expandida. Tu incertidumbre es, en realidad, un portal.',
    archetype: 'El Caminante en la Encrucijada',
    symbol: '🌫️',
    advice: 'Practica la contemplación activa: observa tus miedos sin identificarte con ellos. La respuesta emerge cuando dejas de buscarla.'
  },
  amor: {
    title: 'El Fuego Sagrado de Venus',
    response: 'El amor, en su dimensión simbólica, es la fuerza gravitacional del alma. Venus no solo rige la atracción romántica, sino el principio de cohesión universal: lo que mantiene unidas las estrellas. En la alquimia, el amor es el solve et coagula emocional: disuelve las armaduras del ego y recompone el ser en una forma más auténtica.',
    archetype: 'Los Amantes (Arcano VI)',
    symbol: '💜',
    advice: 'El amor verdadero comienza con la aceptación radical de uno mismo. Solo quien se conoce puede reconocer al otro como espejo.'
  },
  futuro: {
    title: 'La Rueda del Destino',
    response: 'El futuro, en la tradición esotérica, no es un lugar al que se llega sino un tejido que se crea con cada decisión presente. La Rueda de la Fortuna del Tarot no predice: revela los ciclos. Lo que sube, baja; lo que se oculta, se revela. Tu futuro ya está en semilla dentro de este momento.',
    archetype: 'La Rueda de la Fortuna (Arcano X)',
    symbol: '🔮',
    advice: 'Deja de intentar predecir y comienza a crear. El futuro pertenece a quienes plantan con intención en el presente.'
  },
  miedo: {
    title: 'El Guardián del Umbral',
    response: 'El miedo es el dragón que custodia el tesoro en toda narrativa heroica. En la psicología arquetipal de Jung, cada miedo es una invitación a integrar la Sombra: aquella parte de nosotros que rechazamos. El miedo no es tu enemigo; es tu maestro disfrazado.',
    archetype: 'La Torre (Arcano XVI)',
    symbol: '⚡',
    advice: 'Nombra tu miedo en voz alta. Lo que se nombra pierde su poder sobre nosotros. El dragón se convierte en aliado cuando lo miras a los ojos.'
  },
  ritual: {
    title: 'La Geometría de lo Sagrado',
    response: 'Un ritual es un lenguaje que el cuerpo habla cuando las palabras no alcanzan. Encender una vela, ordenar un espacio, escribir una intención: estos actos aparentemente simples son tecnologías ancestrales de reprogramación emocional. La neurociencia moderna confirma lo que los místicos siempre supieron: la repetición consciente transforma la mente.',
    archetype: 'El Mago (Arcano I)',
    symbol: '🕯️',
    advice: 'Crea un ritual mínimo diario: un gesto consciente que marque la transición entre estados. El ritual es el puente entre la intención y la manifestación.'
  },
  soledad: {
    title: 'El Ermitaño Interior',
    response: 'La soledad elegida es el laboratorio del alma. En la tradición del Tarot, El Ermitaño lleva una linterna que no ilumina el camino de otros, sino el propio interior. La soledad no es aislamiento: es la audiencia privada con tu ser más profundo. Los grandes místicos—de Rumi a Teresa de Ávila—encontraron el universo entero en el silencio.',
    archetype: 'El Ermitaño (Arcano IX)',
    symbol: '🏔️',
    advice: 'Distingue entre soledad elegida y aislamiento reactivo. La primera nutre; el segundo consume. Busca el silencio como quien busca agua en el desierto.'
  },
  cambio: {
    title: 'La Muerte Simbólica',
    response: 'El Arcano XIII del Tarot—La Muerte—no habla del final físico sino de la muda necesaria. Como la serpiente que abandona su piel, como el árbol que suelta sus hojas: el cambio es la respiración del universo. Resistirlo causa sufrimiento; abrazarlo libera.',
    archetype: 'La Muerte (Arcano XIII)',
    symbol: '🐍',
    advice: 'Identifica qué necesitas soltar para poder avanzar. El cambio no te pide que dejes de ser tú; te pide que te conviertas en quien siempre fuiste.'
  },
  proposito: {
    title: 'La Estrella Polar Interior',
    response: 'El propósito no se encuentra; se recuerda. En la filosofía esotérica, cada alma llega con una misión codificada en sus pasiones más profundas. No es lo que el mundo necesita de ti, sino lo que tú necesitas dar al mundo. Tu propósito está donde se cruzan tu talento natural, tu dolor transformado y tu alegría más pura.',
    archetype: 'La Estrella (Arcano XVII)',
    symbol: '⭐',
    advice: 'Pregúntate: ¿qué haría incluso sin reconocimiento? ¿Qué actividad me hace olvidar el tiempo? Ahí está la pista de tu misión.'
  },
  sanacion: {
    title: 'El Cáliz de la Temperancia',
    response: 'Sanar no es volver a un estado anterior sino integrar la herida en una versión más completa de ti. La Temperancia del Tarot mezcla dos aguas: el dolor y la comprensión, creando un elixir nuevo. En la tradición alquímica, la herida es la prima materia—la sustancia base necesaria para la transmutación en oro espiritual.',
    archetype: 'La Temperancia (Arcano XIV)',
    symbol: '🏺',
    advice: 'No busques eliminar la cicatriz; busca comprender su mensaje. Toda herida sanada se convierte en fuente de sabiduría y compasión.'
  },
  intuicion: {
    title: 'La Voz de la Luna',
    response: 'La intuición es el lenguaje más antiguo del alma. Antes de las palabras, antes de la lógica, existía este saber silencioso. La Luna en el esoterismo representa el espejo que refleja la luz solar del inconsciente. Tu intuición no es irracional: es una forma de inteligencia que procesa información más allá de lo que la mente consciente puede analizar.',
    archetype: 'La Sacerdotisa (Arcano II)',
    symbol: '🌙',
    advice: 'Cultiva espacios de silencio. La intuición habla en susurros y no puede competir con el ruido del pensamiento compulsivo.'
  },
  creatividad: {
    title: 'El Fuego de Prometeo',
    response: 'Crear es participar en el acto cósmico original. En la cosmovisión esotérica, el artista es un canal entre lo invisible y lo manifiesto. La creatividad no es inventar de la nada: es tener la sensibilidad para captar lo que ya existe en el campo de las posibilidades y darle forma.',
    archetype: 'La Emperatriz (Arcano III)',
    symbol: '✨',
    advice: 'No esperes la inspiración: invócala. Crea un espacio sagrado para tu práctica creativa y preséntate aunque no "sientas" nada. La musa respeta la disciplina.'
  },
  libertad: {
    title: 'El Loco Sagrado',
    response: 'El Arcano 0—El Loco—camina al borde del precipicio sin miedo porque confía en el vacío. La libertad verdadera no es ausencia de límites sino trascendencia del miedo. En la tradición sufí, el loco sagrado (majdhub) es aquel que ha superado las convenciones porque ha visto una realidad más grande.',
    archetype: 'El Loco (Arcano 0)',
    symbol: '🦋',
    advice: 'La libertad exterior comienza con la libertad interior. Examina qué cadenas son reales y cuáles son solo creencias heredadas.'
  },
  // ─── NUEVAS ENTRADAS EXPANDIDAS ───
  perdon: {
    title: 'El Juicio del Corazón',
    response: 'El perdón es el acto alquímico más poderoso que existe. En la tradición egipcia, el corazón del difunto se pesaba contra la pluma de Ma\'at: solo un corazón ligero—libre de resentimiento—podía cruzar al otro mundo. Perdonar no es olvidar ni justificar; es liberarte del peso que te mantiene atado al pasado. Es la antigravedad del alma.',
    archetype: 'El Juicio (Arcano XX)',
    symbol: '🪶',
    advice: 'Escribe una carta de perdón que nunca enviarás. El acto de escribir transforma el dolor en comprensión. No perdonas por el otro; perdonas para soltar las cadenas propias.'
  },
  abundancia: {
    title: 'El Jardín del Emperador',
    response: 'La abundancia no es acumulación material sino la percepción de que el universo provee. En la carta del Emperador del Tarot, el poder viene del orden y la estructura, no de la codicia. La raíz latina abundantia viene de "unda" (ola): la abundancia es un flujo, no un depósito. Cuando bloqueas el flujo—por miedo a perder—la abundancia se seca.',
    archetype: 'El Emperador (Arcano IV)',
    symbol: '🌿',
    advice: 'Practica la generosidad radical: da algo cada día sin esperar retorno. La abundancia se multiplica cuando circula. Lo que retienes, se estanca.'
  },
  sombra: {
    title: 'El Espejo Oscuro',
    response: 'La Sombra jungiana no es tu lado "malo": es tu lado no reconocido. Contiene tanto tu destructividad reprimida como tus talentos no desarrollados. Lo que te irrita profundamente en otros es, frecuentemente, un aspecto de tu propia Sombra proyectada. Integrar la Sombra no es volverse oscuro; es volverse completo.',
    archetype: 'El Diablo (Arcano XV)',
    symbol: '🌑',
    advice: 'Cuando sientas un juicio intenso hacia alguien, detente y pregúntate: ¿qué cualidad mía estoy viendo reflejada? La Sombra se integra con honestidad, no con represión.'
  },
  muerte: {
    title: 'El Portal de Osiris',
    response: 'Toda muerte es una puerta. En la mitología egipcia, Osiris fue desmembrado y reconstruido: la muerte como prerequisito de la resurrección. En tu vida, las "muertes simbólicas"—el fin de una relación, un trabajo, una identidad—son invitaciones a renacer. El miedo a la muerte es, en el fondo, miedo a la transformación radical.',
    archetype: 'La Muerte (Arcano XIII)',
    symbol: '🦂',
    advice: 'Identifica qué ha muerto recientemente en tu vida. No lo resucites por nostalgia. Permítete el duelo y luego mira: ¿qué espacio nuevo ha abierto esa pérdida?'
  },
  verdad: {
    title: 'La Espada de la Justicia',
    response: 'La verdad, en la tradición esotérica, no es un dato: es una frecuencia. La carta de la Justicia sostiene una espada que corta las ilusiones y una balanza que mide las intenciones. Tu verdad no necesita ser agresiva; necesita ser clara. Como decía Rumi: "Más allá de las ideas del bien y del mal, hay un campo. Te encontraré ahí."',
    archetype: 'La Justicia (Arcano VIII)',
    symbol: '⚖️',
    advice: 'Practica la verdad radical contigo mismo antes de exigirla a otros. Pregúntate cada noche: ¿qué me mentí hoy? La autoengaño es la raíz de todo sufrimiento.'
  },
  destino: {
    title: 'Los Hilos de las Moiras',
    response: 'En la mitología griega, tres hermanas tejían el destino: Cloto hilaba, Láquesis medía y Átropos cortaba. Pero incluso los griegos creían en la tensión entre destino (moira) y libre albedrío. Tu destino no es una sentencia; es una partitura que tú interpretas. Puedes tocar las mismas notas con pasión o con resignación.',
    archetype: 'La Rueda de la Fortuna (Arcano X)',
    symbol: '🧵',
    advice: 'Deja de preguntar "¿cuál es mi destino?" y comienza a preguntar "¿qué estoy tejiendo con mis decisiones diarias?" El destino se construye en lo cotidiano.'
  },
  gratitud: {
    title: 'El Cáliz Desbordante',
    response: 'La gratitud es la alquimia que transforma lo ordinario en extraordinario. En la tradición mística, dar gracias no es cortesía: es un acto de percepción expandida. Cuando agradeces, literalmente entrenas a tu cerebro para detectar abundancia donde antes solo veía carencia. El cáliz sagrado no es un objeto: es la capacidad de recibir.',
    archetype: 'El As de Copas',
    symbol: '🍷',
    advice: 'Antes de dormir, nombra tres cosas específicas del día por las que estás agradecido. No generalices: la gratitud precisa es más potente que la vaga.'
  },
  silencio: {
    title: 'El Templo Vacío',
    response: 'El silencio no es ausencia de sonido: es presencia pura. En la tradición zen, el vacío (śūnyatā) no es la nada—es el espacio donde todo es posible. Los monjes cartujanos hacen voto de silencio no para castigarse, sino porque descubrieron que en el silencio profundo se escucha la voz del ser esencial.',
    archetype: 'La Sacerdotisa (Arcano II)',
    symbol: '🕊️',
    advice: 'Regálate 10 minutos diarios de silencio absoluto. Sin música, sin podcasts, sin pensamientos dirigidos. Solo escucha el silencio. Lo que emerja, es tu verdad.'
  },
  fuerza: {
    title: 'La Leona Domada',
    response: 'La carta de La Fuerza en el Tarot no muestra un guerrero con armadura: muestra una mujer que abre la boca de un león con las manos desnudas. La verdadera fuerza no es violencia ni control: es la capacidad de contener la energía salvaje sin destruirla. Es paciencia, no agresión. Es dominar al león interior sin matarlo.',
    archetype: 'La Fuerza (Arcano XI)',
    symbol: '🦁',
    advice: 'La próxima vez que sientas ira o frustración, no la reprimas ni la descargues. Siéntala completamente en tu cuerpo sin actuar. Eso es fuerza real.'
  },
  suenos: {
    title: 'El Río del Inconsciente',
    response: 'Los sueños son cartas que el inconsciente envía al consciente en un idioma simbólico. Freud los llamó "el camino real al inconsciente"; Jung los consideraba mensajes compensatorios del alma. Soñar no es escapar de la realidad: es acceder a una realidad más profunda donde los símbolos hablan sin censura.',
    archetype: 'La Luna (Arcano XVIII)',
    symbol: '💫',
    advice: 'Coloca un cuaderno junto a tu cama. Antes de dormir, pide a tu inconsciente que te envíe un sueño sobre tu situación actual. Al despertar, escribe lo primero que recuerdes, sin juzgarlo.'
  },
  culpa: {
    title: 'Las Cadenas del Pasado',
    response: 'La culpa, en su forma saludable, es la brújula moral que nos alerta cuando hemos herido. Pero la culpa crónica es una prisión del ego disfrazada de humildad. En la tradición cabalística, el tikún (reparación) no se logra con autocastigo sino con acción correctiva. La culpa te paraliza; la responsabilidad te moviliza.',
    archetype: 'El Colgado (Arcano XII)',
    symbol: '⛓️',
    advice: 'Transforma tu culpa en reparación concreta. Si heriste, ofrece disculpas genuinas. Si no puedes reparar directamente, contribuye al mundo de otra forma. La culpa sin acción es veneno.'
  },
  esperanza: {
    title: 'El Amanecer después del Arcano XVI',
    response: 'En el Tarot, la Estrella (XVII) aparece justo después de la Torre (XVI)—la destrucción total. No es casualidad: la esperanza más profunda nace de las ruinas. No se trata del optimismo ingenuo que niega el dolor, sino de la certeza silenciosa de que, después de la noche más oscura, el amanecer es inevitable.',
    archetype: 'La Estrella (Arcano XVII)',
    symbol: '🌅',
    advice: 'La esperanza no es un sentimiento pasivo: es una práctica activa. Cada mañana, identifica una pequeña acción que construya el futuro que deseas. La esperanza se cultiva haciendo.'
  },
  rabia: {
    title: 'El Volcán Interior',
    response: 'La rabia es fuego concentrado. En la tradición tántrica, la ira no es un obstáculo espiritual sino energía pura que puede transformarse. Marte, el dios de la guerra, era también protector: la rabia bien canalizada protege tus límites y defiende lo sagrado. El problema no es sentir rabia; es no saber qué hacer con ella.',
    archetype: 'La Torre (Arcano XVI)',
    symbol: '🌋',
    advice: 'Cuando la rabia surja, canalízala en movimiento: camina con fuerza, golpea un cojín, escribe furiosamente. La rabia necesita cuerpo. Una vez descargada, pregúntate: ¿qué límite fue violado?'
  },
  renacimiento: {
    title: 'El Fénix de Heliópolis',
    response: 'El fénix no simplemente sobrevive al fuego: se alimenta de él. En la tradición egipcia de Heliópolis, el Bennu (fénix) era el ave que se posaba sobre la primera tierra emergida del caos primordial. Tu renacimiento no requiere que el fuego anterior no haya dolido. Requiere que uses las cenizas como fertilizante.',
    archetype: 'El Mundo (Arcano XXI)',
    symbol: '🔥',
    advice: 'Identifica un área de tu vida que necesita renacer. Escribe un ritual de cierre para la versión anterior y uno de bienvenida para la nueva. El ritual marca el umbral.'
  },
  conexion: {
    title: 'La Red de Indra',
    response: 'En la filosofía budista, la Red de Indra es una malla infinita donde cada nodo es una joya que refleja todas las demás. Estamos interconectados de formas que la mente racional no alcanza a comprender. Tu sensación de desconexión no es porque estés separado del todo; es porque has olvidado que eres un nodo en la red cósmica.',
    archetype: 'El Mundo (Arcano XXI)',
    symbol: '🕸️',
    advice: 'Hoy, mira a los ojos de alguien y reconoce en esa persona una joya de la Red de Indra: un reflejo del todo. La conexión comienza con la presencia.'
  },
  paciencia: {
    title: 'El Bambú Silencioso',
    response: 'El bambú japonés pasa cinco años sin que se vea crecer ni un centímetro sobre la tierra. Durante ese tiempo, desarrolla un sistema de raíces tan extenso que, en el sexto año, crece 25 metros en seis semanas. Tu período de aparente estancamiento puede ser el momento de mayor crecimiento invisible. La paciencia no es espera pasiva; es crecimiento subterráneo.',
    archetype: 'El Ermitaño (Arcano IX)',
    symbol: '🎋',
    advice: 'Cuando sientas que nada avanza, recuerda el bambú. Pregúntate: ¿qué raíces estoy desarrollando que aún no son visibles? La paciencia confía en lo invisible.'
  },
  sabiduria: {
    title: 'El Libro de Thoth',
    response: 'Thoth, el dios egipcio de la sabiduría, inventó la escritura para que el conocimiento sobreviviera al olvido. Pero en el Fedro de Platón, se advierte: la escritura puede debilitar la memoria viva. La sabiduría verdadera no está en los libros: está en la integración de lo aprendido con lo vivido. Saber no es acumular información; es transformar la experiencia en comprensión.',
    archetype: 'El Hierofante (Arcano V)',
    symbol: '📜',
    advice: 'Elige una enseñanza que te haya impactado y aplícala de forma concreta esta semana. La sabiduría que no se practica es solo filosofía decorativa.'
  },
  ansiedad: {
    title: 'El Péndulo entre Mundos',
    response: 'La ansiedad es el alma oscilando entre un pasado que no puede cambiar y un futuro que no puede controlar. En la tradición mindfulness, la ansiedad se disuelve no eliminando pensamientos sino anclándose en el único momento real: el presente. El Arcano del Colgado sugiere invertir la perspectiva: lo que parece una crisis puede ser una iniciación.',
    archetype: 'El Colgado (Arcano XII)',
    symbol: '⏳',
    advice: 'Cuando la ansiedad te invada, ancla tus sentidos: nombra 5 cosas que ves, 4 que tocas, 3 que oyes, 2 que hueles y 1 que saboreas. Regresa al cuerpo.'
  },
  confianza: {
    title: 'El Salto del Colgado',
    response: 'La confianza es el acto de soltar la rama sabiendo que la gravedad es también una forma de gracia. El Colgado del Tarot está suspendido boca abajo, pero su rostro es sereno: ha entregado el control y, en esa rendición, ha encontrado una perspectiva que los demás no pueden ver. Confiar no es ingenuidad; es valentía informada.',
    archetype: 'El Colgado (Arcano XII)',
    symbol: '🤲',
    advice: 'Identifica un área donde te aferras al control. Esta semana, suelta deliberadamente un grado de control y observa qué sucede. La confianza se construye con pequeños actos de rendición.'
  }
};

const FALLBACK = {
  title: 'El Espejo del Buscador',
  response: 'Tu búsqueda misma es ya una respuesta. El hecho de que formules esta pregunta revela una inquietud del alma que merece ser explorada. En la semiótica esotérica, cada palabra que elegimos es un símbolo de nuestro estado interior. Reflexiona: ¿por qué esta palabra y no otra? ¿Qué anhelo profundo se esconde detrás de tu consulta?',
  archetype: 'El Colgado (Arcano XII)',
  symbol: '🔍',
  advice: 'A veces la pregunta es más importante que la respuesta. Siéntate con tu inquietud sin prisa por resolverla. La claridad viene cuando dejas de forzarla.'
};

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('oracle-input');
  const btn = document.getElementById('oracle-btn');
  const body = document.getElementById('oracle-body');
  const suggestions = document.querySelectorAll('.oracle-suggestion');
  if (!input || !btn || !body) return;

  function addMessage(text, type) {
    const div = document.createElement('div');
    div.className = type === 'user' ? 'message-user' : 'message-oracle';
    div.innerHTML = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function consult(keyword) {
    const k = keyword.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    addMessage(`<span class="font-body text-sm" style="color:#C0C0C0">${keyword}</span>`, 'user');

    // Find best match
    let data = null;
    for (const [key, val] of Object.entries(ORACLE_DB)) {
      if (k.includes(key) || key.includes(k)) { data = val; break; }
    }
    if (!data) data = FALLBACK;

    setTimeout(() => {
      addMessage(`
        <div class="mb-2" style="font-size:1.5rem">${data.symbol}</div>
        <h4 class="font-cinzel text-base mb-1" style="color:#6A0DAD">${data.title}</h4>
        <p class="text-xs mb-2 font-body" style="color:#808080;letter-spacing:0.08em">Arquetipo: ${data.archetype}</p>
        <div class="divider-mystic" style="margin:0.5rem 0"></div>
        <p class="text-sm font-body mb-3" style="color:#E0E0E0;line-height:1.7">${data.response}</p>
        <div style="background:rgba(106,13,173,0.1);border-left:2px solid #6A0DAD;padding:0.75rem 1rem;border-radius:0 8px 8px 0">
          <p class="text-xs font-body" style="color:#C0C0C0"><strong style="color:#6A0DAD">✦ Consejo:</strong> ${data.advice}</p>
        </div>
      `, 'oracle');
    }, 600);
  }

  btn.addEventListener('click', () => {
    const val = input.value.trim();
    if (val) { consult(val); input.value = ''; }
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { btn.click(); }
  });
  suggestions.forEach(s => {
    s.addEventListener('click', () => {
      const word = s.dataset.word || s.textContent;
      input.value = word;
      consult(word);
      input.value = '';
    });
  });
});
