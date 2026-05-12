// ANTIGRAVITI — Zodiac Card System
const ZODIAC_DATA = [
  { sign:'Aries', symbol:'♈', dates:'21 Mar – 19 Abr', element:'Fuego 🔥', archetype:'El Guerrero',
    meaning:'La chispa primordial. Aries simboliza el impulso de existir, la voluntad pura que rompe la inercia. En la semiótica esotérica, representa el nacimiento del Yo consciente.',
    semiotic:'En el Tarot corresponde al Emperador: la fuerza que ordena el caos. El carnero embiste contra la oscuridad para abrir camino a la luz.' },
  { sign:'Tauro', symbol:'♉', dates:'20 Abr – 20 May', element:'Tierra 🌍', archetype:'El Guardián',
    meaning:'La materia sagrada. Tauro es el cuerpo como templo, el placer como forma de meditación. Representa la conexión entre lo divino y lo terrenal.',
    semiotic:'Venus rige este signo: la belleza como verdad. El toro es el axis mundi, el pilar que conecta el cielo con la tierra en las tradiciones mistéricas.' },
  { sign:'Géminis', symbol:'♊', dates:'21 May – 20 Jun', element:'Aire 💨', archetype:'El Mensajero',
    meaning:'La dualidad creativa. Géminis es el espejo del alma que habla dos lenguas: la del mundo visible y la del invisible. Es el puente entre mundos.',
    semiotic:'Mercurio, el dios alado, es psicopompo: guía de almas entre reinos. Los gemelos representan la unión de opuestos necesaria para el conocimiento.' },
  { sign:'Cáncer', symbol:'♋', dates:'21 Jun – 22 Jul', element:'Agua 💧', archetype:'La Madre Cósmica',
    meaning:'El útero primordial. Cáncer es la memoria emocional del universo, el refugio interior donde el alma se nutre antes de enfrentar el mundo.',
    semiotic:'La Luna rige este signo: ciclos, intuición y el inconsciente colectivo. El cangrejo lleva su hogar a cuestas, símbolo de que el verdadero refugio es interno.' },
  { sign:'Leo', symbol:'♌', dates:'23 Jul – 22 Ago', element:'Fuego 🔥', archetype:'El Soberano',
    meaning:'La luz interior manifestada. Leo es el corazón del zodíaco, la expresión auténtica del ser. Brilla no por vanidad, sino porque su naturaleza es ser sol.',
    semiotic:'El Sol como centro: en alquimia, el oro espiritual. El león es el guardián del umbral en las tradiciones iniciáticas, símbolo de coraje y nobleza del espíritu.' },
  { sign:'Virgo', symbol:'♍', dates:'23 Ago – 22 Sep', element:'Tierra 🌍', archetype:'La Sacerdotisa',
    meaning:'El discernimiento sagrado. Virgo es el ojo que ve lo invisible en lo cotidiano, el orden como forma de oración, la perfección como camino espiritual.',
    semiotic:'La virgen mística: no pureza sexual, sino integridad del ser. Representa la capacidad de analizar y purificar, transformando lo profano en sagrado.' },
  { sign:'Libra', symbol:'♎', dates:'23 Sep – 22 Oct', element:'Aire 💨', archetype:'El Juez Divino',
    meaning:'El equilibrio cósmico. Libra es la justicia que opera más allá del bien y el mal, la armonía como principio universal, la belleza como verdad.',
    semiotic:'La balanza de Ma\'at: en el Egipto antiguo, el corazón del difunto se pesaba contra una pluma. Libra nos recuerda que cada acción tiene su contrapeso cósmico.' },
  { sign:'Escorpio', symbol:'♏', dates:'23 Oct – 21 Nov', element:'Agua 💧', archetype:'El Alquimista',
    meaning:'Transformación y muerte del ego. Escorpio es el fuego bajo el agua: la pasión que destruye para crear. Es el signo de la metamorfosis radical.',
    semiotic:'La serpiente que muda de piel, el fénix que renace. En alquimia, Escorpio es la putrefactio: la descomposición necesaria antes de la transmutación en oro.' },
  { sign:'Sagitario', symbol:'♐', dates:'22 Nov – 21 Dic', element:'Fuego 🔥', archetype:'El Buscador',
    meaning:'La flecha que apunta al infinito. Sagitario es la búsqueda de sentido, el viaje como iniciación, la filosofía como mapa del alma.',
    semiotic:'El centauro: mitad animal, mitad divino. Representa la tensión entre instinto y aspiración. Su flecha es la pregunta eterna: ¿cuál es el propósito de la existencia?' },
  { sign:'Capricornio', symbol:'♑', dates:'22 Dic – 19 Ene', element:'Tierra 🌍', archetype:'El Sabio',
    meaning:'La montaña interior. Capricornio es la disciplina como forma de libertad, la estructura como esqueleto del espíritu, el tiempo como maestro.',
    semiotic:'Saturno, el cronos: no el destructor, sino el escultor. La cabra marina asciende la montaña con las raíces en el océano profundo del inconsciente.' },
  { sign:'Acuario', symbol:'♒', dates:'20 Ene – 18 Feb', element:'Aire 💨', archetype:'El Visionario',
    meaning:'La conciencia colectiva. Acuario es el rayo que ilumina lo que todos ven pero nadie mira. Es la revolución del espíritu, la humanidad como concepto sagrado.',
    semiotic:'El portador del agua: no porta agua física, sino conocimiento. En el esoterismo, Acuario marca la Era de la iluminación colectiva y el despertar espiritual.' },
  { sign:'Piscis', symbol:'♓', dates:'19 Feb – 20 Mar', element:'Agua 💧', archetype:'El Místico',
    meaning:'La disolución del ego en el todo. Piscis es el océano donde termina y comienza todo viaje. Es la compasión infinita, el sueño como puerta al alma.',
    semiotic:'Los dos peces que nadan en direcciones opuestas: materia y espíritu. Piscis es el signo de la trascendencia, donde el individuo se funde con lo universal.' }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('zodiac-grid');
  if (!grid) return;

  ZODIAC_DATA.forEach((z, i) => {
    const card = document.createElement('div');
    card.className = 'zodiac-card reveal';
    card.style.animationDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="zodiac-card-inner">
        <div class="zodiac-card-front">
          <div class="zodiac-symbol">${z.symbol}</div>
          <h3 class="font-cinzel text-xl mb-1" style="color:#E0E0E0">${z.sign}</h3>
          <p class="text-xs mb-3" style="color:#808080;letter-spacing:0.1em">${z.dates}</p>
          <span class="text-sm" style="color:#6A0DAD">${z.element}</span>
          <p class="mt-3 text-xs font-body" style="color:#C0C0C0;letter-spacing:0.08em">Arquetipo: <strong>${z.archetype}</strong></p>
          <p class="mt-4 text-xs" style="color:#808080">Haz clic para revelar</p>
        </div>
        <div class="zodiac-card-back">
          <h3 class="font-cinzel text-lg mb-1" style="color:#6A0DAD">${z.sign}</h3>
          <p class="font-cinzel text-sm mb-3" style="color:#C0C0C0">${z.archetype}</p>
          <div class="divider-mystic" style="margin:0.75rem 0"></div>
          <p class="text-sm font-body mb-3" style="color:#E0E0E0;line-height:1.6">${z.meaning}</p>
          <div class="divider-mystic" style="margin:0.75rem 0"></div>
          <p class="text-xs font-body" style="color:#808080;line-height:1.6"><i data-lucide="info" style="width:12px;height:12px;display:inline;vertical-align:middle;margin-right:4px"></i>${z.semiotic}</p>
        </div>
      </div>`;
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    grid.appendChild(card);
  });

  // Re-init Lucide icons inside cards
  if (window.lucide) lucide.createIcons();

  // Observe reveals
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.reveal').forEach(el => obs.observe(el));
});
