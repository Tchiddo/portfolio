const EMAIL = "cruisethecreek@gmail.com";

const projects = [
  {
    name: "Counterpart",
    tagline: "Live dating & matchmaking platform",
    description:
      "Built the backend for a live matchmaking product: authentication, database, and API integrations, taking it from concept to a production deployment.",
    tech: ["Next.js", "Supabase", "PostgreSQL"],
    url: "https://friendofafriend.life",
  },
  {
    name: "AuraBinder",
    tagline: "Cross-TCG digital binder & collection planner",
    description:
      "A free tool that helps trading-card collectors plan and organize binder pages across multiple games. Full-stack build focused on speed and a clean interface.",
    tech: ["Next.js", "Supabase", "Vercel"],
    url: "",
  },
  {
    name: "HustleBoard",
    tagline: "Incentive leaderboard for a retail team",
    description:
      "A performance leaderboard that tracks and gamifies staff incentives for a retail store, handled end to end from database design to a responsive UI.",
    tech: ["Next.js", "Supabase", "PostgreSQL"],
    url: "",
  },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Supabase",
  "PostgreSQL",
  "Node.js",
  "Tailwind CSS",
  "Vercel",
  "REST APIs",
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <span className="logo">Jayden Simms</span>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-cta" href={`mailto:${EMAIL}`}>
            Get in touch
          </a>
        </div>
      </nav>

      <section className="hero">
        <span className="pill">
          <span className="dot" /> Available for freelance work
        </span>
        <h1>
          Next.js + Supabase developer building fast, production-ready web apps.
        </h1>
        <p className="lede">
          I&apos;m Jayden, a full-stack developer. I ship marketing sites, web
          apps with real backends, and MVPs, cleanly and quickly, on a modern
          stack.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
            Start a project
          </a>
          <a className="btn btn-ghost" href="#work">
            View my work
          </a>
        </div>
      </section>

      <section id="about" className="section">
        <h2 className="section-title">About</h2>
        <p className="about-text">
          I build production web applications end to end with Next.js, Supabase,
          and Vercel, and I&apos;m comfortable dropping into an existing codebase
          or owning a project from scratch. I care about fast load times, clean
          UX, and clear communication. You get regular updates and honest
          timelines, never silence.
        </p>
      </section>

      <section id="work" className="section">
        <h2 className="section-title">Selected work</h2>
        <div className="grid">
          {projects.map((p) => (
            <article key={p.name} className="card">
              <div className="card-head">
                <h3>{p.name}</h3>
                {p.url ? (
                  <a
                    className="card-link"
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live &#8599;
                  </a>
                ) : null}
              </div>
              <p className="card-tagline">{p.tagline}</p>
              <p className="card-desc">{p.description}</p>
              <ul className="tags">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Skills</h2>
        <ul className="skills">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <section className="section contact">
        <h2 className="contact-title">Let&apos;s build something.</h2>
        <p className="contact-sub">
          Available for freelance and white-label work. Tell me what you&apos;re
          building.
        </p>
        <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
      </section>

      <footer className="footer">
        <span>&copy; 2026 Jayden Simms</span>
        <a href="https://github.com/Tchiddo" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </footer>
    </main>
  );
}
