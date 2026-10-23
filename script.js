/* =====================================================================
   TEXT / CONTENT
   ===================================================================== */
const TEXT = {
  es: {
    tapeText: "EVIDENCIA · NO CRUZAR",
    boardTitle: "Tablero de Evidencia",
    boardHint: "Clic en una pieza de evidencia para ver el expediente completo.",
    specialtiesTitle: "Carpeta de Especialidades",
    hubLabel: "SUJETO",
    hubTag: "EXPEDIENTE PRINCIPAL",
    contactMail: "Correo",
    bioName: "LEÓN, L. — 1705",
    bioBody: "Estudiante de Ingeniería en Computación en la UJAP. Nada en su expediente encaja con un criminal común — pero cada línea de código que escribe es una pista.",
    ethicsBody: "El software debe ser tan intencional como una investigación bien llevada. Código limpio, resiliencia, arquitecturas que resisten el interrogatorio.",
    noteTag: "NOTA DE CAMPO",
    noteTitle: "Conocimiento mínimo de Assembly",
    noteBody: "El sujeto admite conocimiento base de ensamblador (x86): lo justo para leer registros, depurar a bajo nivel y no salir corriendo cuando algo truena a nivel de hardware.",
    cases: [
      { tag: "Caso #000 — Expediente principal", title: "Arknights Analytical Tier List Engine", body: "Simulador de combate determinista para Arknights: más de 3.000 configuraciones de operadores evaluadas sobre encuentros estándar de 300 segundos, con motor en Rust y sitio de resultados generado automáticamente.", link: "https://github.com/LuisLeon1705/Automated-Arknights-Tier-List", img: "assets/Arknights_Tier_List.png" },
      { tag: "Caso #001", title: "VigilaTech Vzla", body: "Plataforma de e-commerce y videovigilancia: cámaras IP, kits CCTV y sistemas solares 4G. Dockerizada, PHP 8.2 + MySQL 8.0.", link: "https://github.com/LuisLeon1705/VigilaTech_Vzla", img: "assets/Vigilia_Tech_VZLA.png" },
      { tag: "Caso #002", title: "CRM Odontológico", body: "Gestión integral con modelos de base de datos avanzados y odontodiagramas interactivos.", link: "https://github.com/LuisLeon1705/Consultas_Odontologicas" },
      { tag: "Caso #003 — En curso", title: "Equilibria", body: "Gestión de carga académica y monitoreo inteligente de estrés estudiantil, con calendario interactivo. Next.js + Supabase.", link: "https://github.com/LuisLeon1705/Equilibria" },
      { tag: "Caso #004 — En desarrollo", title: "Adaptive Upscaler", body: "Escalador de imágenes y video en Rust con aceleración WebGPU (wgpu), shaders WGSL, gridding adaptativo, filtros FXAA y un servidor Axum con API REST propia.", link: "https://github.com/LuisLeon1705/Rust_Image_Upscaller", img: "assets/RustUpscaller.png" },
      { tag: "Caso #005 — Equipo", title: "Sistema Distribuido", body: "3 microservicios independientes, cada uno en un framework backend distinto. Frontend en Vue.", link: "https://github.com/LuisLeon1705/Sistema_Distribuido" },
      { tag: "Caso #006", title: "Desktop OS Simulator", body: "Simulador de escritorio en TypeScript: ventanas, procesos y archivos emulados en el navegador.", link: "https://github.com/LuisLeon1705/Desktop-OS-Simulator", img: "assets/Desktop_OS_Simulator.png" },
      { tag: "Caso #007", title: "UmaPedia", body: "Aplicación de login para almacenar cartas, ambientada en el juego Uma Musume.", link: "https://github.com/LuisLeon1705/UmaPedia" },
      { tag: "Caso #008", title: "Subconjuntos", body: "Herramienta en TypeScript para generación y análisis de subconjuntos. Licencia MIT.", link: "https://github.com/LuisLeon1705/Subconjuntos" },
      { tag: "Caso #009 — Equipo", title: "API & Interpolaciones", body: "API con BD para métodos de cálculo numérico e interpolaciones, junto a Eduardo Tovar, Juan D. Cordero y Nelson Guerrero.", link: "https://github.com/LuisLeon1705/DB_API_Calculo_Numerico" },
      { tag: "Caso #010 — Equipo", title: "Triatlón UJAP", body: "Aplicación web junto a Andrés Rodríguez para un evento deportivo universitario.", link: "https://github.com/LuisLeon1705/Triatlon-Ujap" },
      { tag: "Caso #011 — Pendiente", title: "Todo Dulce Page", body: "Página en preparación. Aún bajo vigilancia.", link: "https://github.com/LuisLeon1705/Todo_Dulce_Page", img: "assets/Todo_Dulce_Page.png" },
      { tag: "Caso #012 — Nuevo", title: "3D-Memory (CTHG)", body: "Motor de memoria persistente para agentes de código en Rust puro (0 dependencias): hipergrafo causal-temporal (.cthg) con recuperación por ruta (X), tiempo monótono (Y) y confianza bayesiana χ (Z).", link: "https://github.com/LuisLeon1705/3D_Memory" },
      { tag: "Caso #013 — Nuevo", title: "3D-Memory Visualizer (memviz)", body: "Aplicación nativa de escritorio en Rust (tao/wry + protocolo memviz://) que renderiza memorias .cthg como una constelación 3D interactiva en vivo.", link: "https://github.com/LuisLeon1705/3D-Memory-Visualizer" },
      { tag: "Caso #014", title: "Gestor de Tareas Rust", body: "Gestor CLI concurrente en Rust enfocado en alta eficiencia, seguridad de memoria y procesamiento ágil de tareas.", link: "https://github.com/LuisLeon1705/Gestor-de-Tareas-Rust" },
      { tag: "Caso #015", title: "GoLang TaskMaster", body: "Despachador multihilo y planificador de tareas concurrentes desarrollado en Go.", link: "https://github.com/LuisLeon1705/GoLang-TaskMaster" },
      { tag: "Caso #016", title: "Git Simulator (Python)", body: "Emulador e inspector de bajo nivel de estructuras internas de Git (árboles, blobs y grafos de commits).", link: "https://github.com/LuisLeon1705/Git_Simulator_Python" }
    ],
    specialties: [
      { title: "IA & Sistemas Agénticos", body: "3D-Memory (CTHG), llama.cpp, Ollama, PyTorch, CUDA — asistentes agénticos locales, memoria causal y visión multimodal." },
      { title: "Desarrollo Web & Gráficos", body: "WebGPU (wgpu/WGSL), Three.js, Canvas 3D, React 19, Next.js — interfaces interactivas y motores 3D." },
      { title: "Rust & Sistemas", body: "Motores cero dependencias, formatos binarios CRC32, Axum, Tokio, WebView2 (tao/wry) y concurrencia." },
      { title: "Backend & Infraestructura", body: "Node.js, Go, PHP (Laravel), Docker — arquitecturas políglotas dockerizadas." },
      { title: "Persistencia", body: "PostgreSQL, Supabase, MySQL — modelos de datos complejos y sincronización en tiempo real." }
    ],
    closingText: "Me siento aquí cuando el código no cierra. La lluvia en la ventana, el expediente sobre el corcho, y esa sensación de que todavía falta una pieza.\n\nNo busco resolver el caso más fácil. Busco resolver el que nadie más quiso tocar: simular tres mil configuraciones cuando bastaba con adivinar, montar un servidor propio cuando había uno de sobra, entender un sistema operativo por dentro solo para poder confiar en el mío.\n\nEsto no es un currículum. Es un expediente en construcción. Y como todo buen detective, sigo cada pista hasta el final — aunque tome más noches de las que debería."
  },
  en: {
    tapeText: "EVIDENCE · DO NOT CROSS",
    boardTitle: "Evidence Board",
    boardHint: "Click a piece of evidence to see the full case file.",
    specialtiesTitle: "Specialties Folder",
    hubLabel: "SUBJECT",
    hubTag: "PRIMARY FILE",
    contactMail: "Email",
    bioName: "LEÓN, L. — 1705",
    bioBody: "Computer Engineering student at UJAP. Nothing in his file fits a common criminal — but every line of code he writes is a lead.",
    ethicsBody: "Software should be as intentional as a well-run investigation. Clean code, resilience, architectures that hold up under interrogation.",
    noteTag: "FIELD NOTE",
    noteTitle: "Minimal Assembly knowledge",
    noteBody: "The subject admits to a base knowledge of x86 assembly: just enough to read registers, debug at a low level, and not run when something breaks at the hardware layer.",
    cases: [
      { tag: "Case #000 — Primary file", title: "Arknights Analytical Tier List Engine", body: "Deterministic combat simulator for Arknights: 3,000+ operator configurations evaluated over standard 300-second encounters, with a Rust engine and an auto-generated results site.", link: "https://github.com/LuisLeon1705/Automated-Arknights-Tier-List", img: "assets/Arknights_Tier_List.png" },
      { tag: "Case #001", title: "VigilaTech Vzla", body: "E-commerce and video-surveillance platform: IP cameras, CCTV kits and 4G solar systems. Dockerized, PHP 8.2 + MySQL 8.0.", link: "https://github.com/LuisLeon1705/VigilaTech_Vzla", img: "assets/Vigilia_Tech_VZLA.png" },
      { tag: "Case #002", title: "Dental CRM", body: "Integrated management with advanced DB models and interactive odontograms.", link: "https://github.com/LuisLeon1705/Consultas_Odontologicas" },
      { tag: "Case #003 — Ongoing", title: "Equilibria", body: "Academic load management and intelligent student stress monitoring, with an interactive calendar. Next.js + Supabase.", link: "https://github.com/LuisLeon1705/Equilibria" },
      { tag: "Case #004 — In progress", title: "Adaptive Upscaler", body: "Rust image & video upscaler with WebGPU acceleration (wgpu), custom WGSL shaders, adaptive gridding, FXAA filters and its own Axum-powered REST API server.", link: "https://github.com/LuisLeon1705/Rust_Image_Upscaller", img: "assets/RustUpscaller.png" },
      { tag: "Case #005 — Team", title: "Distributed System", body: "3 independent microservices, each in a different backend framework. Vue frontend.", link: "https://github.com/LuisLeon1705/Sistema_Distribuido" },
      { tag: "Case #006", title: "Desktop OS Simulator", body: "Desktop OS simulator in TypeScript: windows, processes and files emulated in the browser.", link: "https://github.com/LuisLeon1705/Desktop-OS-Simulator", img: "assets/Desktop_OS_Simulator.png" },
      { tag: "Case #007", title: "UmaPedia", body: "Login app to store cards, themed after the game Uma Musume.", link: "https://github.com/LuisLeon1705/UmaPedia" },
      { tag: "Case #008", title: "Subconjuntos", body: "TypeScript tool for subset generation and analysis. MIT licensed.", link: "https://github.com/LuisLeon1705/Subconjuntos" },
      { tag: "Case #009 — Team", title: "Numerical API & Interpolations", body: "DB-backed API for numerical calculus methods and interpolations, built with Eduardo Tovar, Juan D. Cordero and Nelson Guerrero.", link: "https://github.com/LuisLeon1705/DB_API_Calculo_Numerico" },
      { tag: "Case #010 — Team", title: "UJAP Triathlon", body: "Web app built with Andrés Rodríguez to manage a university sports event.", link: "https://github.com/LuisLeon1705/Triatlon-Ujap" },
      { tag: "Case #011 — Pending", title: "Todo Dulce Page", body: "Page still in preparation. Under surveillance.", link: "https://github.com/LuisLeon1705/Todo_Dulce_Page", img: "assets/Todo_Dulce_Page.png" },
      { tag: "Case #012 — New", title: "3D-Memory (CTHG)", body: "Zero-dependency Rust persistent memory engine for coding agents: causal-temporal hypergraph (.cthg) with spatial path inheritance (X), monotonic time (Y), and Bayesian confidence χ (Z).", link: "https://github.com/LuisLeon1705/3D_Memory" },
      { tag: "Case #013 — New", title: "3D-Memory Visualizer (memviz)", body: "Native Rust desktop explorer (tao/wry + custom memviz:// protocol) rendering .cthg project memories as an interactive 3D constellation in real time.", link: "https://github.com/LuisLeon1705/3D-Memory-Visualizer" },
      { tag: "Case #014", title: "Rust Task Manager", body: "Concurrent CLI task manager built in Rust prioritizing zero overhead, memory safety, and high-throughput job tracking.", link: "https://github.com/LuisLeon1705/Gestor-de-Tareas-Rust" },
      { tag: "Case #015", title: "GoLang TaskMaster", body: "Multithreaded concurrent task processor and scheduler engine engineered in Go.", link: "https://github.com/LuisLeon1705/GoLang-TaskMaster" },
      { tag: "Case #016", title: "Git Simulator (Python)", body: "Low-level emulator and inspector of Git internals (blobs, tree objects, and commit DAGs).", link: "https://github.com/LuisLeon1705/Git_Simulator_Python" }
    ],
    specialties: [
      { title: "AI & Agentic Systems", body: "3D-Memory (CTHG), llama.cpp, Ollama, PyTorch, CUDA — local agentic assistants, causal memory, and multimodal vision." },
      { title: "Web & Graphics", body: "WebGPU (wgpu/WGSL), Three.js, Canvas 3D, React 19, Next.js — interactive interfaces and 3D engines." },
      { title: "Rust & Systems", body: "Zero-dependency engines, atomic CRC32 binary formats, Axum, Tokio, WebView2 (tao/wry), and concurrency." },
      { title: "Backend & Infrastructure", body: "Node.js, Go, PHP (Laravel), Docker — dockerized polyglot architectures." },
      { title: "Persistence", body: "PostgreSQL, Supabase, MySQL — complex data models and real-time sync." }
    ],
    closingText: "I sit here when the code won't close. Rain on the window, the file spread on the corkboard, and that feeling that a piece is still missing.\n\nI don't go looking for the easiest case. I go looking for the one nobody else wanted to touch: simulating three thousand configurations when a guess would've done, running my own server when a free one was right there, learning how an operating system works underneath just so I could trust mine.\n\nThis isn't a résumé. It's a file still being built. And like any good detective, I follow every lead to the end — even if it takes more nights than it should."
  }
};

let lang = localStorage.getItem('lang') || 'es';
function t() { return TEXT[lang]; }

/* =====================================================================
   BOARD LAYOUT (radial scatter + red-string SVG on wide screens,
   flat stacked grid on narrow ones)
   ===================================================================== */
const board = document.getElementById('board');
const hubPin = document.getElementById('hubPin');
const cardsLayer = document.getElementById('cardsLayer');
const stringsSvg = document.getElementById('strings');
const FLAT_BREAKPOINT = 820;

function renderCards() {
  const cases = t().cases;
  cardsLayer.innerHTML = cases.map((c, i) => `
    <div class="card" data-index="${i}" style="--rot:${(i % 2 ? -1 : 1) * (3 + (i % 3) * 2)}deg">
      <span class="pin-dot"></span>
      ${c.img ? `<img src="${c.img}" alt="">` : ''}
      <span class="tag">${c.tag}</span>
      <div class="title">${c.title}</div>
      <div class="snippet">${c.body}</div>
    </div>`).join('');
  cardsLayer.querySelectorAll('.card').forEach(el => {
    el.addEventListener('click', () => {
      const c = cases[+el.dataset.index];
      openCasePopup(c.tag, c.title, c.body, c.link, c.img);
    });
  });
}

function layoutBoard() {
  const isFlat = window.innerWidth < FLAT_BREAKPOINT;
  board.classList.toggle('flat', isFlat);
  if (isFlat) { stringsSvg.innerHTML = ''; return; }

  const rect = board.getBoundingClientRect();
  const cx = rect.width / 2, cy = rect.height / 2;
  const rx = rect.width * 0.37, ry = rect.height * 0.36;
  const cards = cardsLayer.querySelectorAll('.card');
  const n = cards.length;
  let lines = '';
  cards.forEach((el, i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? 1 : 0.8;
    const x = cx + Math.cos(a) * rx * r;
    const y = cy + Math.sin(a) * ry * r;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    lines += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"></line>`;
  });
  stringsSvg.innerHTML = lines;
}

let resizeTimer = null;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(layoutBoard, 120);
});

hubPin.addEventListener('click', () => {
  const d = t();
  openCasePopup(d.hubTag, d.bioName, `${d.bioBody}\n\n${d.ethicsBody}`, null, 'assets/portrait.jpg');
});

/* =====================================================================
   SPECIALTIES FOLDERS
   ===================================================================== */
const foldersEl = document.getElementById('folders');
function renderFolders() {
  foldersEl.innerHTML = t().specialties.map(s => `
    <div class="folder"><h3>${s.title}</h3><p>${s.body}</p></div>`).join('');
  foldersEl.querySelectorAll('.folder').forEach(el => {
    el.addEventListener('click', () => el.classList.toggle('open'));
  });
}

/* =====================================================================
   CASE POPUP
   ===================================================================== */
const popupBackdrop = document.getElementById('popupBackdrop');
const casePopup = document.getElementById('casePopup');
const cpImg = document.getElementById('cpImg');
const cpTag = document.getElementById('cpTag');
const cpTitle = document.getElementById('cpTitle');
const cpBody = document.getElementById('cpBody');
const cpLink = document.getElementById('cpLink');
let popupOpen = false;
let typeTimer = null;

function typeInto(node, str) {
  clearInterval(typeTimer);
  node.textContent = '';
  let i = 0;
  typeTimer = setInterval(() => {
    node.textContent = str.slice(0, i + 1);
    playClack();
    i++;
    if (i >= str.length) clearInterval(typeTimer);
  }, 16);
}

function openCasePopup(tag, title, body, link, img) {
  popupOpen = true;
  cpTag.textContent = tag;
  cpTitle.textContent = title;
  if (img) { cpImg.src = img; cpImg.classList.add('show'); } else { cpImg.classList.remove('show'); }
  cpLink.style.display = link ? 'inline-block' : 'none';
  if (link) { cpLink.href = link; cpLink.textContent = link.replace(/^https?:\/\/(www\.)?/, ''); }
  casePopup.classList.add('active');
  popupBackdrop.classList.add('active');
  typeInto(cpBody, body);
}
function closeCasePopup() {
  if (!popupOpen) return;
  popupOpen = false;
  casePopup.classList.remove('active');
  popupBackdrop.classList.remove('active');
  clearInterval(typeTimer);
}
document.getElementById('popupClose').addEventListener('click', closeCasePopup);
popupBackdrop.addEventListener('click', closeCasePopup);
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCasePopup(); });

/* =====================================================================
   LANGUAGE TOGGLE
   ===================================================================== */
function applyLang() {
  const d = t();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (d[key]) el.textContent = d[key];
  });
  document.documentElement.lang = lang;
  document.getElementById('langToggle').textContent = lang === 'es' ? 'EN' : 'ES';
  document.getElementById('closingText').textContent = d.closingText;
  document.querySelector('.side-note .note-tag').textContent = d.noteTag;
  document.querySelector('.side-note .note-title').textContent = d.noteTitle;
  renderCards();
  renderFolders();
  layoutBoard();
}
document.getElementById('langToggle').addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  localStorage.setItem('lang', lang);
  applyLang();
});

/* =====================================================================
   TYPEWRITER SOUND TOGGLE
   ===================================================================== */
let actx = null;
function actxGet() { if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)(); return actx; }
let soundOn = false;
const soundBtn = document.getElementById('soundToggle');
function playClack() {
  if (!soundOn) return;
  try {
    const c = actxGet();
    const bufferSize = c.sampleRate * 0.02;
    const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    const src = c.createBufferSource(); src.buffer = buffer;
    const filter = c.createBiquadFilter(); filter.type = 'highpass'; filter.frequency.value = 2000;
    const gain = c.createGain(); gain.gain.value = 0.4;
    src.connect(filter).connect(gain).connect(c.destination);
    src.start();
  } catch (e) {}
}
soundBtn.addEventListener('click', () => {
  soundOn = !soundOn;
  soundBtn.textContent = soundOn ? '🔊' : '🔈';
  soundBtn.classList.toggle('active', soundOn);
  if (soundOn) actxGet();
});

/* =====================================================================
   INIT
   ===================================================================== */
applyLang();
