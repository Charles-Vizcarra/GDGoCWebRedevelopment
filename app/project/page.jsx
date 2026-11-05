export const metadata = {
  title: "Projects — GDGoC TUP Manila",
  description:
    "Explore projects built by members of Google Developer Groups on Campus at TUP Manila.",
};

const projectTeams = [
  {
    name: "UI/UX Designers",
    members: [
      "Alfred M. Reyes",
      "Sharmaine Hannah Valenzuela",
      "Lowel-Jay Rubino",
      "Vince Merick Santos",
    ],
  },
  {
    name: "Front End Developers",
    members: [
      "John Paul S. Monter",
      "Dan Jheniel",
      "P. Bringas",
      "Irwen G. Fronda",
      "Catherine Mae G. Dela Cruz",
    ],
  },
  {
    name: "AI/ML Developers",
    members: [
      "Red Dumalagan",
      "Axel Magallanes",
      "Christan Aningat",
      "Vince Merick Santos",
    ],
  },
  {
    name: "Back End Developers",
    members: ["Alex Galedo", "Eldian Maxi D. Punzalan", "Sean V. Lucino"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span></span>
      </div>
      <header className="site-header">
        <a className="brand" href="/" aria-label="GDGoC TUP Manila home">
          <img
            className="brand-mark"
            src="/assets/gdgoc-mark.png"
            alt=""
            aria-hidden="true"
          />
          <span className="brand-name">
            <strong>GDGoC</strong>
            <small>TUP Manila</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="primary-navigation"
          aria-label="Open navigation"
        >
          <span></span>
          <span></span>
        </button>

        <nav className="navigation" id="primary-navigation" aria-label="Main navigation">
          <a className="nav-link" href="/">
            Home
          </a>
          <a
            className="nav-link"
            href="https://gdg.community.dev/gdg-on-campus-technological-university-of-the-philippines-manila-philippines/"
          >
            Events
          </a>
          <a className="nav-link is-active" href="/project" aria-current="page">
            Projects
          </a>
          <a className="nav-link" href="/team">
            Team
          </a>
          <a
            className="nav-link shebuilds-link"
            href="https://www.gdgoctupm.com/shebuilds"
            aria-label="SheBuilds"
          >
            <svg
              className="shebuilds-wordmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 248 97"
              role="img"
              aria-labelledby="shebuilds-title"
            >
              <title id="shebuilds-title">SheBuilds</title>
              <text
                x="20"
                y="64"
                fontFamily="Pacifico, cursive"
                fontSize="48"
                stroke="#ffffff"
                strokeWidth="6"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
              >
                SheBuilds
              </text>
              <text
                x="20"
                y="64"
                fontFamily="Pacifico, cursive"
                fontSize="48"
                fill="#CC1F78"
              >
                SheBuilds
              </text>
            </svg>
          </a>
        </nav>

        <div className="header-actions">
          <a className="sign-in" href="#join">
            Sign in
          </a>
          <button
            className="theme-toggle"
            type="button"
            aria-label="Switch to light mode"
            aria-pressed="false"
          >
            <svg className="theme-icon theme-icon-sun" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
            </svg>
            <svg className="theme-icon theme-icon-moon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" />
            </svg>
            <span className="theme-toggle-label">Light mode</span>
          </button>
          <a
            className="button button-small button-red"
            href="https://gdg.community.dev/gdg-on-campus-technological-university-of-the-philippines-manila-philippines/"
          >
            Join GDGoC
          </a>
        </div>
      </header>

      <main className="projects-page">
        <section className="projects-page-hero" aria-labelledby="projects-page-title">
          <p className="section-kicker">
            <span>Made together</span>
          </p>
          <h1 id="projects-page-title">
            Explore our <span>Project</span>
          </h1>
          <p className="projects-page-intro">
            Explore tech excellence with GDGoC TUP Manila! Join us for{" "}
            <span className="text-blue">innovative projects</span>,{" "}
            <span className="text-red">tech excellence</span>, vibrant events, and a{" "}
            <span className="text-green">dynamic community</span>. Elevate your skills and
            be part of shaping the future together.
          </p>
        </section>

        <section className="project-showcase" aria-label="Featured project">
          <article className="project-card">
            <div className="project-logo-tile">
              <img
                className="project-logo"
                src="/assets/gdgoc-mark.png"
                alt="GDGoC TUP Manila mark"
              />
            </div>
            <div className="project-card-content">
              <p className="project-card-eyebrow">Featured project</p>
              <h2>GDGoC TUPM - Official Website</h2>
              <p className="project-card-description">
                Welcome to the Google Developer Groups on Campus - TUP Manila website.
                Immerse yourself in a community of dedicated members, uncover a diverse
                array of services, and actively engage in the development of unforgettable
                projects!
              </p>
              <div className="project-teams">
                {projectTeams.map((team) => (
                  <section className="project-team" key={team.name} aria-label={team.name}>
                    <h3>{team.name}</h3>
                    <ul>
                      {team.members.map((member) => (
                        <li key={member}>{member}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
              <a
                className="button button-red project-card-cta"
                href="https://www.gdgoctupm.com"
                target="_blank"
                rel="noreferrer"
              >
                View Project <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </section>

        <section className="projects-coming-soon" aria-label="More projects coming soon">
          <span className="project-screw project-screw-top-left" aria-hidden="true"></span>
          <span className="project-screw project-screw-top-right" aria-hidden="true"></span>
          <span className="project-screw project-screw-bottom-left" aria-hidden="true"></span>
          <span className="project-screw project-screw-bottom-right" aria-hidden="true"></span>
          <p>Stay Tuned for more upcoming Projects!</p>
        </section>
      </main>

      <footer className="site-footer projects-page-footer" id="join">
        <div className="footer-main">
          <div className="footer-inner">
            <div className="footer-invite">
              <p className="section-kicker">
                <span>Let’s make something</span>
              </p>
              <h2>
                Let’s connect<span className="text-red">!</span>
              </h2>
              <p>Want to be part of our community? Have something in mind?</p>
              <div className="footer-actions">
                <a
                  className="button button-red"
                  href="https://gdg.community.dev/gdg-on-campus-technological-university-of-the-philippines-manila-philippines/"
                >
                  Join the community <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="button button-outline"
                  href="https://www.facebook.com/GDGonCampusTUPManila"
                  target="_blank"
                  rel="noreferrer"
                >
                  Message us
                </a>
              </div>
            </div>
            <div className="footer-social">
              <p className="section-kicker">
                <span>Stay in the loop</span>
              </p>
              <h2>
                Keep up with us<span className="text-blue">!</span>
              </h2>
              <p>Follow along for events, projects, and community updates.</p>
              <div className="social-links" aria-label="Social media">
                <a
                  href="https://www.facebook.com/GDGonCampusTUPManila"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.8-.1-1.6-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/gdgoctup/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle className="icon-fill" cx="17.7" cy="6.6" r="1" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/gdgoctupmanila"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 8.5v10M5 5.5v.1M9.5 18.5v-6a3 3 0 0 1 6 0v6M9.5 10v8.5M18.5 18.5v-6a3 3 0 0 0-6 0" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <a className="footer-brand" href="/" aria-label="GDGoC TUP Manila, back to home">
            <img
              className="brand-mark"
              src="/assets/gdgoc-mark.png"
              alt=""
              aria-hidden="true"
            />
            <span className="brand-name">
              <strong>Google Developer Groups on Campus</strong>
              <small>Technological University of the Philippines — Manila</small>
            </span>
          </a>
          <p>© 2026 GDGoC TUP Manila. Built by the community.</p>
        </div>
      </footer>
    </>
  );
}
