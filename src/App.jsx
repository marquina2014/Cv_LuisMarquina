import "./App.css";

const experiencias = [
  {
    cargo: "Consultor Senior",
    empresa: "Consultoría y Desarrollos Poolso Spa",
    periodo: "2024 - Actualidad",
    descripcion:
      "Lidero la gestión y el seguimiento técnico de un portafolio de más de 50 aplicaciones integradas en entornos corporativos. Mi rol se centra en arquitectura de soluciones low-code, automatización de procesos, monitoreo funcional, integración con Microsoft 365 y soporte a operaciones críticas.",
  },
  {
    cargo: "Desarrollador Freelance",
    empresa: "Power Apps · Aplicaciones Web",
    periodo: "2023 - 2024",
    descripcion:
      "Diseño e implementación de soluciones orientadas a la transformación digital, control de información operativa, inventarios, reportabilidad y automatización de procesos mediante Power Platform, React, JavaScript y herramientas Microsoft.",
  },
];

const proyectos = [
  {
    titulo: "BOS In Action - Power Apps homologada a React",
    descripcion:
      "Sistema desarrollado originalmente en Power Apps dentro del ecosistema Microsoft 365 para la gestión de formularios operativos, registros MOP/MIP, formularios completados, cierre de acciones, usuarios y navegación por gerencias. Debido a que Microsoft 365 es un entorno cerrado y no permite mostrar públicamente las aplicaciones internas en vivo, desarrollé una versión homologada en React para representar la experiencia funcional y visual de la solución.",
    tecnologias: [
      "Power Apps",
      "Microsoft 365",
      "SharePoint",
      "Power Automate",
      "React",
      "Vite",
      "React Router",
      "Vercel",
    ],
    url: "https://bos-in-action-bxpq.vercel.app",
    tipo: "Demo pública homologada",
  },
  {
    titulo: "Aplicación para Gestión Documental y Capacitación Operativa",
    descripcion:
      "Solución para administración y control de cumplimiento de capacitaciones, documentación, seguimiento de cursos, carga de evidencias y clasificación de estados. La aplicación permite centralizar archivos, auditar el avance y resguardar digitalmente la información del equipo.",
    tecnologias: ["Power Apps", "SharePoint", "Power Automate", "Microsoft 365"],
    tipo: "Power Platform",
  },
  {
    titulo: "Sistema de Control de Inventario y Contabilidad",
    descripcion:
      "Diseño de una solución para seguimiento logístico, conciliación, control de stock, movimientos y trazabilidad de productos para operación interna, facilitando tareas de conciliación y detección de discrepancias.",
    tecnologias: ["Power Platform", "Power BI", "SharePoint"],
    tipo: "Low-Code",
  },
  {
    titulo: "App Gestión de Camiones",
    descripcion:
      "Herramienta para supervisión y administración de flota, despacho logístico, seguimiento operativo y visualización de indicadores críticos provenientes de modelos de Power BI.",
    tecnologias: ["Power Apps", "Power BI", "Automatización"],
    tipo: "Operaciones",
  },
];

const habilidades = [
  "Power Apps",
  "Power Automate",
  "SharePoint",
  "Power BI",
  "React",
  "React Native",
  "JavaScript",
  "Node.js",
  "GitHub",
  "Vercel",
  "Docker",
  "DigitalOcean",
  "Microsoft 365",
  "Automatización",
  "Low-Code",
];

const highlights = [
  "Transformación digital de procesos operativos",
  "Diseño de soluciones low-code y web",
  "Automatización con Power Platform",
  "Integración con SharePoint y Microsoft 365",
  "Gestión de datos, reportabilidad y seguimiento",
  "Soporte funcional y mejora continua",
];

function App() {
  return (
    <main className="cv-page">
      <aside className="cv-sidebar">
        <div className="sidebar-top-shape"></div>

        <div className="profile-card">
          <div className="profile-photo">
           <img src="/rostro.png" alt="Luis Marquina" />
          </div>

          <h2>Ingeniero en Sistemas</h2>

          <p>
            Profesional enfocado en desarrollo de soluciones digitales,
            automatización, gestión de datos y construcción de aplicaciones web
            y low-code para entornos corporativos.
          </p>
        </div>

        <section className="sidebar-section">
          <h3>Contacto</h3>

          <ul className="contact-list">
            <li>
              <span>📞</span>
              <a href="tel:+584127153847">+58 4127153847</a>
            </li>

            <li>
              <span>✉️</span>
              <a href="mailto:luiseduardo15097@gmail.com">
                luiseduardo15097@gmail.com
              </a>
            </li>
          </ul>
        </section>

        <section className="sidebar-section">
          <h3>Habilidades</h3>

          <ul className="simple-list">
            <li>Creatividad e innovación</li>
            <li>Gestión de proyectos</li>
            <li>Trabajo en equipo</li>
            <li>Automatización de procesos</li>
            <li>Diseño de soluciones digitales</li>
          </ul>
        </section>

        <section className="sidebar-section">
          <h3>Idiomas</h3>

          <div className="language-item">
            <span>Español</span>
            <strong>Nativo</strong>
          </div>

          <div className="language-bar">
            <div style={{ width: "100%" }}></div>
          </div>

          <div className="language-item">
            <span>Inglés</span>
            <strong>A2</strong>
          </div>

          <div className="language-bar">
            <div style={{ width: "45%" }}></div>
          </div>
        </section>

        <section className="sidebar-section">
          <h3>Educación</h3>

          <p className="education">
            Ingeniería en Sistemas
            <br />
            Universidad Santa María
            <br />
            2018 - 2024
          </p>

          <p className="education">
            Certificado Microsoft PL-400
            <br />
            Power Platform
          </p>
        </section>
      </aside>

      <section className="cv-content">
        <header className="hero">
          <div>
            <p className="eyebrow">Currículum Vitae</p>
            <h1>Luis Eduardo Marquina Castillo</h1>
            <h4>Ingeniero en Sistemas | Power Platform | React Developer</h4>
          </div>

       
        </header>

        <section className="content-section resumen">
          <h2>Resumen Profesional</h2>

          <p>
            Ingeniero en Sistemas con experiencia en desarrollo de soluciones
            web, automatización de procesos y construcción de aplicaciones
            empresariales. Me especializo en Power Platform, React, Microsoft
            365, SharePoint, Power BI y diseño de herramientas digitales
            orientadas a mejorar la eficiencia operativa, la trazabilidad y la
            gestión de información.
          </p>
        </section>

        <section className="content-section">
          <h2>Highlights Profesionales</h2>

          <div className="highlights-grid">
            {highlights.map((item) => (
              <div key={item} className="highlight-card">
                <span>◆</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2>Experiencia Profesional</h2>

          <div className="timeline">
            {experiencias.map((item) => (
              <article key={`${item.cargo}-${item.empresa}`} className="timeline-item">
                <div className="timeline-dot"></div>

                <div>
                  <div className="timeline-header">
                    <h3>{item.cargo}</h3>
                    <span>{item.periodo}</span>
                  </div>

                  <h4>{item.empresa}</h4>
                  <p>{item.descripcion}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2>Desarrollos Más Destacados</h2>

          <div className="projects-grid">
            {proyectos.map((proyecto) => (
              <article key={proyecto.titulo} className="project-card">
                <div className="project-card-header">
                  <h3>{proyecto.titulo}</h3>

                  {proyecto.tipo && (
                    <span className="project-type">{proyecto.tipo}</span>
                  )}
                </div>

                <p>{proyecto.descripcion}</p>

                <div className="tech-list">
                  {proyecto.tecnologias.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {proyecto.url && (
                  <a
                    className="project-link"
                    href={proyecto.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver aplicación homologada en React
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2>Habilidades Técnicas</h2>

          <div className="skills-cloud">
            {habilidades.map((habilidad) => (
              <span key={habilidad}>{habilidad}</span>
            ))}
          </div>
        </section>

        <section className="content-section footer-section">
          <div>
            <h2>Formación Académica</h2>
            <p>
              Ingeniería en Sistemas · Universidad Santa María · 2018 - 2024
            </p>
          </div>

          <div>
            <h2>Certificación</h2>
            <p>Microsoft PL-400 · Power Platform Developer</p>
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;