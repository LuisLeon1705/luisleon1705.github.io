# EXP. 1705-LL — Portafolio Interactivo (`luisleon1705.github.io`)

[![Sitio en vivo](https://img.shields.io/badge/Sitio_en_vivo-luisleon1705.github.io-a3231f?style=flat-square)](https://luisleon1705.github.io)
[![GitHub](https://img.shields.io/badge/GitHub-LuisLeon1705-1c1a17?style=flat-square&logo=github)](https://github.com/LuisLeon1705)

Portafolio personal interactivo de **Luis León** (*Ingeniería en Computación*), diseñado como un **tablero de evidencia de investigación noir** (*Case File / Tablero de Evidencia*). Cada proyecto de ingeniería se presenta como un expediente conectado con hilo rojo al sujeto central sobre un tablero de corcho.

Construido en **HTML5, CSS3 y JavaScript puro (Vanilla JS)** sin dependencias externas ni pasos de compilación.

---

## Características principales

- **Tablero de evidencia interactivo (`#board`)**
  - **Escritorio ($\ge 820\text{px}$)**: distribución elíptica radial alrededor del pin central (`#hubPin`), con líneas dinámicas en SVG (`#strings`) que simulan hilos rojos de investigación recalculados al redimensionar la ventana.
  - **Móvil ($< 820\text{px}$)**: transición automática a una cuadrícula apilada (`board.flat`) manteniendo las chinchetas y rotaciones de las tarjetas.
- **Modal de expediente con máquina de escribir y audio procedural**
  - Al abrir cualquier tarjeta o el pin central, el expediente (`#casePopup`) escribe el texto carácter por carácter (`typeInto` cada `16ms`).
  - Efecto de sonido opcional (`#soundToggle` 🔈/🔊) sintetizado en tiempo real mediante **Web Audio API** (`AudioContext` + ráfaga de ruido blanco de `20ms` con filtro paso alto a `2000Hz`), sin archivos de audio externos.
- **Internacionalización instantánea (`ES` / `EN`)**
  - Diccionario completo en `script.js` (`TEXT.es` y `TEXT.en`) con persistencia en `localStorage`.
  - Conmuta en caliente todos los textos de interfaz (`[data-i18n]`), los 18 casos del tablero (`cases`) y las 5 carpetas de especialidades (`specialties`).
- **Estética analógica noir**
  - Superposiciones fijas de grano fotográfico (`.grain`) y viñeteado (`.vignette`), retrato tipo Polaroid con cinta adhesiva, tipografías monoespaciadas (`Special Elite` y `Courier Prime`) y carpetas desplegables de especialidades.

---

## Estructura del repositorio

```text
luisleon1705.github.io/
├── index.html                           # Estructura semántica: HUD, ficha de sujeto, tablero SVG, carpetas y modal
├── styles.css                           # Variables de tema noir/corcho, diseño radial/responsivo y animaciones
├── script.js                            # Datos bilingües (TEXT), layout trigonométrico, modal y síntesis Web Audio
├── assets/
│   ├── portrait.jpg                     # Fotografía del expediente principal
│   ├── clay-myrrh.png                   # Logo Caso #014 (Clay-Myrrh)
│   ├── Arknights_Tier_List.png          # Captura Caso #000 (Arknights Analytical Tier List Engine)
│   ├── Vigilia_Tech_VZLA.png            # Captura Caso #001 (VigilaTech Vzla)
│   ├── RustUpscaller.png                # Captura Caso #004 (Adaptive Image & Video Upscaler)
│   ├── Desktop_OS_Simulator.png         # Captura Caso #006 (Desktop OS Simulator)
│   ├── Todo_Dulce_Page.png              # Captura Caso #011 (Todo Dulce Page)
│   └── Minimal_Assembly_Knowledge.png   # Nota de campo lateral en el tablero
└── README.md                            # Documentación del proyecto
```

---

## Cómo añadir o editar casos y especialidades

Toda la información de los expedientes vive en el objeto `TEXT` dentro de [`script.js`](script.js):

1. **Añadir un caso nuevo**: agrega una entrada tanto en `TEXT.es.cases` como en `TEXT.en.cases` con el formato:
   ```js
   {
     tag: "Caso #012",
     title: "Nombre del Proyecto",
     body: "Descripción concisa de la arquitectura y tecnologías.",
     link: "https://github.com/LuisLeon1705/Repositorio",
     img: "assets/captura.png" // opcional
   }
   ```
   `renderCards()` y `layoutBoard()` recalcularán automáticamente los ángulos radiales y los hilos SVG.
2. **Añadir o editar una especialidad**: actualiza los arreglos `TEXT.es.specialties` y `TEXT.en.specialties` en [`script.js`](script.js).

---

## Ejecución local

Al ser un sitio estático sin *bundler*, basta con abrir `index.html` directamente en el navegador o servir la carpeta con cualquier servidor HTTP local:

```bash
python -m http.server 8080
```
