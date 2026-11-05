export const metadata = {
  title: "Team — GDGoC TUP Manila",
  description:
    "Meet the Executive Board, Faculty Adviser, and departments of GDGoC TUP Manila.",
};

const departments = [
  "Technology Department",
  "Communications Department",
  "Operations Department",
  "Innovations Department",
  "Human Resource Department",
  "Finance Department",
  "Relations Department",
  "GoogleIt Department",
];

function MemberCard({ index, role }) {
  return (
    <article className="team-member-card">
      <p className="team-member-name">Name placeholder {String(index + 1).padStart(2, "0")}</p>
      <p className="team-member-role">{role}</p>
      <div className="team-photo-placeholder" role="img" aria-label="Photo placeholder">
        <span className="team-photo-silhouette" aria-hidden="true">
          <i></i>
          <b></b>
        </span>
        <span>Photo placeholder</span>
      </div>
    </article>
  );
}

function MemberGrid({ count, role }) {
  return (
    <div className="team-member-grid">
      {Array.from({ length: count }, (_, index) => (
        <MemberCard key={`${role}-${index}`} index={index} role={role} />
      ))}
    </div>
  );
}

export default function TeamPage() {
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
          <a className="nav-link" href="/project">
            Projects
          </a>
          <a className="nav-link is-active" href="/team" aria-current="page">
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

      <main className="team-page">
        <section className="team-page-hero" aria-labelledby="team-page-title">
          <p className="section-kicker">
            <span>Meet the people behind the community</span>
          </p>
          <h1 id="team-page-title">
            Welcome to the <span>Team!</span>
          </h1>
          <p>
            The <span className="text-blue">team</span> that{" "}
            <span className="text-red">empowers</span>,{" "}
            <span className="text-yellow">enlightens</span>, and{" "}
            <span className="text-green">nurtures</span> student developers at TUP Manila.
          </p>
        </section>

        <section className="team-roster-section" aria-labelledby="executive-board-title">
          <h2 id="executive-board-title">Executive Board Officers</h2>
          <MemberGrid count={8} role="Executive Board Officer" />
        </section>

        <section className="team-roster-section team-adviser-section" aria-labelledby="adviser-title">
          <h2 id="adviser-title">Faculty Adviser</h2>
          <MemberGrid count={1} role="Faculty Adviser" />
        </section>

        <section className="team-departments" aria-labelledby="departments-title">
          <h2 id="departments-title">GDGoC TUPM Departments</h2>
          {departments.map((department) => (
            <section className="team-roster-section department-section" key={department}>
              <h3>{department}</h3>
              <MemberGrid count={4} role={`${department} member`} />
            </section>
          ))}
        </section>
      </main>

      <footer className="site-footer team-page-footer" id="join">
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
