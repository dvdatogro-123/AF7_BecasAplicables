/* =========================================================
   LINK DEL PIA: cambia SOLO esta línea para que el botón
   "Ver nuestro PIA" (y el del pie de página) apunten a otra página.
   ========================================================= */
const PIA_URL = "https://dvdatogro-123.github.io/PIA_PROGWEB_EQ1/";

/* ---------- Datos ----------
   Información tomada de las páginas oficiales (consultadas 17/11/2026).
   aplica.estado: "si" | "verificar" | "ref" */
const becas = [
  { id:"bbj", logo:"img/logos/gobmx.svg", logoFondo:"#611232", tipo:"gob", tipoTxt:"Gobierno federal",
    nombre:"Beca Benito Juárez · Jóvenes Escribiendo el Futuro",
    quien:"Coordinación Nacional de Becas para el Bienestar Benito Juárez",
    monto:"$5,800 MXN bimestrales",
    montoNota:"Durante los 10 meses del ciclo escolar, hasta 45 meses (sin julio ni agosto). Se paga en tarjeta del Banco del Bienestar.",
    requisitos:[
      "Estudiar licenciatura o TSU en una escuela pública de educación superior",
      "La escuela debe estar en el catálogo de escuelas prioritarias",
      "No recibir otra beca federal con el mismo fin",
      "Registrar la solicitud en cada convocatoria"
    ],
    proceso:"Buscar la escuela en el buscador oficial, hacer la solicitud en línea (SUBES) y esperar la validación con RENAPO. El estatus se consulta con la CURP.",
    aplica:{ estado:"verificar", txt:"Depende de que la FIME esté en el catálogo de escuelas prioritarias. Hay que revisarlo en el buscador antes de registrarse." },
    contacto:"55 1162 0300 · L–V 8:00–22:00, S 9:00–14:00",
    link:"https://www.gob.mx/becasbenitojuarez/articulos/beca-de-educacion-superior-jovenes-escribiendo-el-futuro", linkTxt:"Página oficial en gob.mx",
    extra:{ href:"https://buscador.becasbenitojuarez.gob.mx/escuelas", txt:"Buscador de escuelas" } },

  { id:"ftt", logo:"img/logos/telmex.png", tipo:"privada", tipoTxt:"Empresa privada",
    nombre:"Beca Fundación Telmex Telcel",
    quien:"Fundación Telmex Telcel (Fundación Carlos Slim)",
    monto:"Apoyo económico mensual + equipo",
    montoNota:"Incluye equipo de cómputo, Infinitum gratis e invitaciones a talleres, cursos y conferencias. El monto se publica en la convocatoria.",
    requisitos:[
      "Promedio mínimo de 8.5",
      "Licenciatura, maestría o doctorado, en cualquier área",
      "Cursar del primer al antepenúltimo periodo",
      "Destacado desempeño académico"
    ],
    proceso:"Revisar la convocatoria 2026 y registrarse en las fechas que marca. Se aplica desde cualquier parte del país.",
    aplica:{ estado:"si", txt:"Sí, mientras mantenga 8.5 de promedio o más y no esté en los últimos dos semestres." },
    contacto:"55 5244-2605 al 2608 · L–V 9:00–18:00",
    link:"https://fundacioncarlosslim.org/becas/fundacion-telmex-telcel/", linkTxt:"Página oficial de la fundación",
    extra:{ href:"https://downloads.telmex.com/pdf/BECA-FUNDACION-TELMEX-TELCEL-2026.pdf", txt:"Convocatoria 2026 (PDF)" } },

  { id:"fime", logo:"img/logos/fime.png", tipo:"facultad", tipoTxt:"Facultad",
    nombre:"Becas internas FIME",
    quien:"Coordinación Administrativa de Becas, FIME UANL",
    monto:"6 tipos de beca",
    montoNota:"Apoyo económico, académica, deportiva, empleado UANL, extracurricular y convenio. Para alumnos de las 12 ingenierías.",
    requisitos:[
      "Académica: promedio general mayor a 90, todo aprobado en ordinario, desde 3er semestre",
      "BECA-T: estar en los 100 mejores promedios del semestre anterior",
      "Apoyo económico: comprobar necesidad y tener beca de rectoría (clave 01, 02, 25 o 75)",
      "Convenio: trabajar en una empresa con convenio con FIME"
    ],
    proceso:"Se tramita con la Coordinación de Becas de la FIME. Cada tipo tiene su página con requisitos y fechas.",
    aplica:{ estado:"si", txt:"Sí, ya soy alumno de la FIME. La académica pide promedio arriba de 90. La de convenio me aplicaría si la empresa donde trabajo tiene convenio con la facultad." },
    contacto:"becas.fime@uanl.mx · Facebook: Becas FIME",
    link:"https://www.fime.uanl.mx/tramites/becas/", linkTxt:"Becas en fime.uanl.mx",
    extra:{ href:"https://www.fime.uanl.mx/tramites/becas-academicas/", txt:"Becas académicas" } },

  { id:"tec", logo:"img/logos/tec.png", tipo:"universidad", tipoTxt:"Universidad",
    nombre:"Becas Tec de Monterrey",
    quien:"Tecnológico de Monterrey",
    monto:"7 becas + préstamo educativo",
    montoNota:"Talento Académico, Socioeconómica, Talento Estudiantil, Emprendedor, Creativo, Transformador y Líderes del Mañana. El porcentaje se define al evaluar el perfil.",
    requisitos:[
      "Ser aspirante a nuevo ingreso del Tec",
      "Talento Académico: excelencia y alto desempeño académico",
      "Socioeconómica: demostrar necesidad económica",
      "Llenar el registro en línea para evaluar el perfil"
    ],
    proceso:"Explorar opciones, llenar la solicitud en línea, evaluación del perfil (académico, talento o necesidad económica) y resultado.",
    aplica:{ estado:"ref", txt:"No por ahora: es para quien entra al Tec. Me serviría como referencia para una maestría o si cambiara de universidad." },
    contacto:"81 8358-2000 · Av. Eugenio Garza Sada 2501, Monterrey",
    link:"https://profesional.admisiones.tec.mx/becas", linkTxt:"Becas en admisiones.tec.mx",
    extra:null }
];

const tabla = {
  bbj:  { da:"$5,800 bimestrales",                req:"Escuela pública prioritaria" },
  ftt:  { da:"Mensualidad, computadora e internet", req:"Promedio 8.5" },
  fime: { da:"Beca interna (6 tipos)",            req:"Varía; la académica pide más de 90" },
  tec:  { da:"Beca o préstamo",                   req:"Ser alumno de nuevo ingreso" }
};

const plan = [
  { id:"fime", titulo:"Becas internas FIME",
    txt:"Es la más directa porque ya estoy inscrito. Voy a revisar si alcanzo la académica y si la empresa donde trabajo tiene convenio con la FIME." },
  { id:"ftt", titulo:"Fundación Telmex Telcel",
    txt:"Leer la convocatoria 2026, juntar documentos y cuidar el promedio para no bajar de 8.5." },
  { id:"bbj", titulo:"Benito Juárez",
    txt:"Buscar la FIME en el buscador de escuelas prioritarias. Si aparece, pedir el alta escolar en SUBES la primera semana de clases (la FIME ayuda con eso)." },
  { id:"tec", titulo:"Tec de Monterrey",
    txt:"Guardarla como opción para una maestría al terminar la carrera." }
];

const fuentes = [
  ["Becas Benito Juárez · Jóvenes Escribiendo el Futuro", "https://www.gob.mx/becasbenitojuarez/articulos/beca-de-educacion-superior-jovenes-escribiendo-el-futuro"],
  ["Becas Benito Juárez · Preguntas frecuentes", "https://www.gob.mx/becasbenitojuarez/articulos/necesitas-una-beca-de-educacion-superior-jovenes-escribiendo-el-futuro-consulta-las-preguntas-frecuentes"],
  ["Fundación Carlos Slim · Becas Fundación Telmex Telcel", "https://fundacioncarlosslim.org/becas/fundacion-telmex-telcel/"],
  ["Fundación Telmex Telcel · Becas", "https://www.fundaciontelmextelcel.org/becas"],
  ["FIME UANL · Becas", "https://www.fime.uanl.mx/tramites/becas/"],
  ["Tec de Monterrey · Becas profesional", "https://profesional.admisiones.tec.mx/becas"]
];

const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");
const icon = id => `<svg class="ic" aria-hidden="true"><use href="#i-${id}"/></svg>`;
const pad = n => String(n).padStart(2, "0");
const ESTADO = { si:"Me aplica", verificar:"Por verificar", ref:"Referencia" };
const nuevaPestana = '<span class="sr-only">(se abre en otra pestaña)</span>';
const corto = b => b.nombre.split(" · ")[0];
const logo = (b, cls = "logo") =>
  `<span class="${cls}"${b.logoFondo ? ` style="background:${b.logoFondo}"` : ""}><img src="${esc(b.logo)}" alt="Logo de ${esc(b.quien)}" loading="lazy"></span>`;

/* ---------- Índice del encabezado ---------- */
document.getElementById("indice").innerHTML = becas.map((b, i) => `
  <li>
    <a href="#beca-${b.id}">
      <span class="ind-top"><span class="ind-num">${pad(i + 1)}</span>${logo(b, "logo logo-sm")}</span>
      <span class="ind-nombre">${esc(corto(b))}</span>
      <span class="sello sello-${b.aplica.estado}">${ESTADO[b.aplica.estado]}</span>
    </a>
  </li>`).join("");

/* ---------- Fichas ---------- */
document.getElementById("cards").innerHTML = becas.map((b, i) => `
  <article class="ficha" data-tipo="${b.tipo}" id="beca-${b.id}" aria-labelledby="t-${b.id}">
    <div class="ficha-id">
      <div class="ficha-top">
        <span class="ficha-num" aria-hidden="true">${pad(i + 1)}</span>
        ${logo(b)}
      </div>
      <p class="tipo">${esc(b.tipoTxt)}</p>
      <h3 id="t-${b.id}">${esc(b.nombre)}</h3>
      <p class="quien">${esc(b.quien)}</p>
      <span class="sello sello-${b.aplica.estado}">${ESTADO[b.aplica.estado]}</span>
    </div>

    <div class="ficha-cuerpo">
      <div class="monto">
        <p class="monto-big">${esc(b.monto)}</p>
        <p class="monto-nota">${esc(b.montoNota)}</p>
      </div>

      <div class="cols">
        <div>
          <h4>Requisitos</h4>
          <ul class="checks">${b.requisitos.map(r => `<li>${icon("check")}<span>${esc(r)}</span></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Cómo se aplica</h4>
          <p class="proceso">${esc(b.proceso)}</p>
          <p class="contacto">${icon("phone")}<span>${esc(b.contacto)}</span></p>
        </div>
      </div>

      <div class="nota nota-${b.aplica.estado}">
        <p class="nota-t">¿Me aplica?</p>
        <p>${esc(b.aplica.txt)}</p>
      </div>

      <div class="acciones">
        <a class="btn btn-oficial" data-sitio="${esc(corto(b))}" href="${esc(b.link)}" target="_blank" rel="noopener noreferrer">
          <span>${esc(b.linkTxt)}</span>${icon("arrow")}${nuevaPestana}
        </a>
        ${b.extra ? `<a class="btn btn-sec btn-oficial" data-sitio="${esc(corto(b))}" href="${esc(b.extra.href)}" target="_blank" rel="noopener noreferrer">
          <span>${esc(b.extra.txt)}</span>${icon("arrow")}${nuevaPestana}
        </a>` : ""}
      </div>
    </div>
  </article>`).join("");

/* ---------- Filtro por tipo ---------- */
const chips = document.querySelectorAll(".chip");
chips.forEach(ch => ch.addEventListener("click", () => {
  chips.forEach(c => c.setAttribute("aria-pressed", String(c === ch)));
  const f = ch.dataset.f;
  document.querySelectorAll(".ficha").forEach(card => {
    card.hidden = f !== "todas" && card.dataset.tipo !== f;
  });
}));

/* ---------- Tabla ---------- */
document.getElementById("tbody").innerHTML = becas.map(b => `
  <tr>
    <th scope="row"><span class="th-beca">${logo(b, "logo logo-sm")}${esc(corto(b))}</span></th>
    <td>${esc(b.tipoTxt)}</td>
    <td>${esc(tabla[b.id].da)}</td>
    <td>${esc(tabla[b.id].req)}</td>
    <td><span class="sello sello-${b.aplica.estado}">${ESTADO[b.aplica.estado]}</span></td>
  </tr>`).join("");

/* ---------- Plan ---------- */
document.getElementById("plan-list").innerHTML = plan.map((p, i) => `
  <li>
    <span class="paso" aria-hidden="true">${i + 1}</span>
    <div>
      <h3><a href="#beca-${p.id}">${esc(p.titulo)}</a></h3>
      <p>${esc(p.txt)}</p>
    </div>
  </li>`).join("");

/* ---------- Fuentes ---------- */
document.getElementById("fuentes-list").innerHTML = fuentes.map(([t, u]) => `
  <li><a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(t)}${nuevaPestana}</a> <span class="url">${esc(u.replace(/^https?:\/\//, ""))}</span></li>`).join("");

/* ---------- ALERTAS ---------- */
const sinAcentos = t => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const normal = t => sinAcentos(t).toLowerCase().trim();
const abrir = url => window.open(url, "_blank", "noopener");

// 1) Buscador: si encuentra la beca, una alerta pregunta si quieres ir a su página oficial
document.getElementById("lista-becas").innerHTML =
  becas.map(b => `<option value="${esc(corto(b))}"></option>`).join("");

document.getElementById("buscador").addEventListener("submit", ev => {
  ev.preventDefault();
  const q = normal(document.getElementById("q").value);
  if (!q) return;
  const b = becas.find(x => normal(x.nombre + " " + x.quien + " " + x.tipoTxt).includes(q));
  if (!b) {
    alert(`No encontré ninguna beca con "${q}".\n\nLas becas de esta página son:\n• ${becas.map(corto).join("\n• ")}`);
    return;
  }
  if (confirm(`Beca encontrada: ${corto(b)}\nLa otorga: ${b.quien}\nEstado: ${ESTADO[b.aplica.estado]}\n\n¿Quieres ir a su página oficial?\n${b.link}`)) {
    abrir(b.link);
  } else {
    chips[0].click();                                   // quita el filtro por si estaba oculta
    const ficha = document.getElementById("beca-" + b.id);
    ficha.scrollIntoView({ behavior: "smooth", block: "start" });
    ficha.classList.remove("destacar"); void ficha.offsetWidth; ficha.classList.add("destacar");
  }
});

// 2) Botones de páginas oficiales: alerta antes de salir del sitio
document.addEventListener("click", ev => {
  const a = ev.target.closest("a.btn-oficial");
  if (a && !confirm(`Vas a salir de esta página para ver la información oficial de ${a.dataset.sitio}.\n\n¿Continuar?`)) ev.preventDefault();
});

// 3) Botones del PIA: alerta y redirección a la página del PIA
["btn-pia", "footer-pia"].forEach(id => {
  const a = document.getElementById(id);
  a.href = PIA_URL;
  a.addEventListener("click", ev => {
    if (!confirm("Vas a ir a la página de nuestro PIA (Programación Web, equipo 1).\n\n¿Quieres continuar?")) ev.preventDefault();
  });
});

/* ---------- Aparición suave al hacer scroll ---------- */
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
  const targets = document.querySelectorAll(".sec-head, .ficha, .tabla-wrap, .timeline li, .foto");
  targets.forEach(el => el.classList.add("reveal"));
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      io.unobserve(en.target);
    });
  }, { threshold: 0.1 });
  targets.forEach(el => io.observe(el));
}
