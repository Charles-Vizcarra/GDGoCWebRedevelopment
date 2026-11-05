export default function Home() {
  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><span></span></div>
          <header className="site-header">
            <a className="brand" href="#" aria-label="GDGoC TUP Manila home">
              <img className="brand-mark" src="assets/gdgoc-mark.png" alt="" aria-hidden="true" />
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
              <span></span><span></span>
            </button>
      
            <nav className="navigation" id="primary-navigation" aria-label="Main navigation">
              <a className="nav-link is-active" href="#home">Home</a>
              <a className="nav-link" href="https://gdg.community.dev/gdg-on-campus-technological-university-of-the-philippines-manila-philippines/">Events</a>
              <a className="nav-link" href="/project">Projects</a>
              <a className="nav-link" href="/team">Team</a>
              <a className="nav-link shebuilds-link" href="https://www.gdgoctupm.com/shebuilds" aria-label="SheBuilds">
                <svg className="shebuilds-wordmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 97" role="img" aria-labelledby="shebuilds-title">
                  <title id="shebuilds-title">SheBuilds</title>
                  <text x="20" y="64" fontFamily="Pacifico, cursive" fontSize="48" stroke="#ffffff" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" fill="none">SheBuilds</text>
                  <text x="20" y="64" fontFamily="Pacifico, cursive" fontSize="48" fill="#CC1F78">SheBuilds</text>
                </svg>
              </a>
            </nav>
      
            <div className="header-actions">
              <a className="sign-in" href="#join">Sign in</a>
              <button className="theme-toggle" type="button" aria-label="Switch to light mode" aria-pressed="false">
                <svg className="theme-icon theme-icon-sun" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                </svg>
                <svg className="theme-icon theme-icon-moon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" />
                </svg>
                <span className="theme-toggle-label">Light mode</span>
              </button>
              <a className="button button-small button-red" href="#join">Join GDGoC</a>
            </div>
          </header>
      
          <main>
            <section className="hero" id="home" aria-labelledby="hero-title">
              <div className="hero-copy">
                <p className="eyebrow"><span className="eyebrow-dot"></span> AY 2026 — 2027</p>
                <h1 id="hero-title"><span className="google-wordmark">Google</span><br />Developer Groups<br />on Campus</h1>
                <p className="hero-description">
                  The official Google Developer Groups chapter at the Technological University of the
                  Philippines — Manila. Learn, build, and grow with fellow student developers.
                </p>
                <div className="hero-actions">
                  <a className="button button-red" href="#join">
                    Join GDGoC <span aria-hidden="true">↗</span>
                  </a>
                  <a className="button button-outline" href="https://gdg.community.dev/gdg-on-campus-technological-university-of-the-philippines-manila-philippines/">
                    See upcoming events <span aria-hidden="true">→</span>
                  </a>
                </div>
                <p className="hero-note">Open to all TUP Manila students, from any program.</p>
              </div>
      
              <div className="hero-gallery" aria-label="GDGoC community highlights">
                <div className="gallery-art" data-slide="0">
                  <span className="art-corner art-corner-green" aria-hidden="true"></span>
                  <span className="art-corner art-corner-yellow" aria-hidden="true"></span>
                  <span className="gallery-grid" aria-hidden="true"></span>
                  <span className="gallery-scanline" aria-hidden="true"></span>
                  <div className="gallery-hud" aria-hidden="true">
                    <span className="hud-label">GDG / TUPM</span>
                    <span className="hud-location">CAMPUS COMMUNITY <i></i></span>
                  </div>
                  <svg className="gallery-connector" viewBox="0 0 160 110" aria-hidden="true">
                    <path d="M2 106V60h48V14h108" />
                    <circle cx="2" cy="106" r="3" />
                    <circle cx="50" cy="60" r="3" />
                    <circle cx="158" cy="14" r="3" />
                  </svg>
                  <div className="gallery-message" aria-live="polite">
                    <span className="gallery-kicker">A place to make things happen</span>
                    <strong className="gallery-title">Your community,<br />in focus.</strong>
                    <span className="gallery-caption">Drop your group photo here</span>
                  </div>
                  <span className="gallery-signal" aria-hidden="true"><i></i> OPEN TO BUILDERS</span>
                  <span className="gallery-index" aria-hidden="true">01 <i></i> 03</span>
                </div>
                <div className="gallery-controls" aria-label="Gallery controls">
                  <button className="gallery-arrow" type="button" data-direction="-1" aria-label="Previous highlight">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 4-8 8 8 8" /></svg>
                  </button>
                  <div className="gallery-dots" aria-label="Choose a highlight">
                    <button className="gallery-dot is-selected" type="button" aria-label="Show highlight 1" aria-pressed="true"></button>
                    <button className="gallery-dot" type="button" aria-label="Show highlight 2" aria-pressed="false"></button>
                    <button className="gallery-dot" type="button" aria-label="Show highlight 3" aria-pressed="false"></button>
                  </div>
                  <button className="gallery-arrow" type="button" data-direction="1" aria-label="Next highlight">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 4 8 8-8 8" /></svg>
                  </button>
                </div>
                <span className="gallery-decoration" aria-hidden="true">G</span>
              </div>
            </section>
      
            <div className="color-rule" aria-hidden="true">
              <span></span><span></span><span></span><span></span>
            </div>
      
            <section className="partners-section" aria-label="Our partners">
              <p className="partners-label">Building better, together</p>
              <div className="partner-list">
                <a className="partner-logo" href="https://www.datacamp.com/" target="_blank" rel="noreferrer" aria-label="DataCamp">
                  <img
                    src="https://www.gdgoctupm.com/assets/datacamp_1-BR4SHKHa.png"
                    alt="DataCamp"
                    loading="lazy"
                  />
                </a>
                <a className="partner-logo" href="https://technomancer.biz/" target="_blank" rel="noreferrer" aria-label="Technomancer">
                  <img
                    src="https://www.gdgoctupm.com/assets/technomancer_1-kJcDoUEl.png"
                    alt="Technomancer"
                    loading="lazy"
                  />
                </a>
                <a className="partner-logo partner-github" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.64-1.24-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 2.26 4.67 1.6.1-.72.4-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.16 1.77 1.16 2.99 0 4.3-2.62 5.25-5.11 5.53.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </section>
      
            <section className="about-section content-section" id="team" aria-labelledby="about-title">
              <div className="section-inner two-column">
                <div className="section-copy">
                  <p className="section-kicker"><span>01</span> A community that builds together</p>
                  <h2 id="about-title">Who we are</h2>
                  <h3>Student leaders driven by <span className="text-red">passion.</span></h3>
                  <p className="section-description">
                    Google Developer Groups on Campus at the Technological University of the Philippines
                    — Manila is a community of students from any undergraduate background. We build
                    professional and personal networks in technology, explore Google developer
                    resources, and work together on solutions to local problems in a peer-to-peer
                    learning environment.
                  </p>
                  <div className="value-list" aria-label="What makes our community">
                    <span><i className="value-check" aria-hidden="true">✓</i> All programs welcome</span>
                    <span><i className="value-check" aria-hidden="true">✓</i> Learn from each other</span>
                  </div>
                  <a className="button button-dark" href="https://www.gdgoctupm.com/team">
                    Meet the team <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <div className="illustration-frame illustration-team">
                  <div className="photo-placeholder photo-placeholder-team" role="img" aria-label="Placeholder for a GDGoC team photo">
                    <span className="photo-placeholder-label"><i></i> IMAGE SLOT 01</span>
                    <svg className="photo-placeholder-icon" viewBox="0 0 64 64" aria-hidden="true">
                      <rect x="7" y="13" width="50" height="39" rx="8" />
                      <circle cx="23" cy="27" r="5" />
                      <path d="m12 46 14-13 9 8 7-6 10 11" />
                    </svg>
                    <strong>Team photo goes here</strong>
                    <span className="photo-placeholder-hint">A candid moment with your community</span>
                    <span className="photo-placeholder-size">16:10 <i></i> JPG / PNG</span>
                  </div>
                </div>
              </div>
            </section>
      
            <section className="projects-section content-section" id="projects" aria-labelledby="projects-title">
              <div className="section-inner two-column reverse-on-mobile">
                <div className="illustration-frame illustration-projects">
                  <div className="photo-placeholder photo-placeholder-projects" role="img" aria-label="Placeholder for students collaborating on a project">
                    <span className="photo-placeholder-label"><i></i> IMAGE SLOT 02</span>
                    <svg className="photo-placeholder-icon" viewBox="0 0 64 64" aria-hidden="true">
                      <rect x="7" y="13" width="50" height="39" rx="8" />
                      <circle cx="23" cy="27" r="5" />
                      <path d="m12 46 14-13 9 8 7-6 10 11" />
                    </svg>
                    <strong>Project moment goes here</strong>
                    <span className="photo-placeholder-hint">Show what your team is building</span>
                    <span className="photo-placeholder-size">16:10 <i></i> JPG / PNG</span>
                  </div>
                </div>
                <div className="section-copy">
                  <p className="section-kicker"><span>02</span> From learning to making</p>
                  <h2 id="projects-title">What we do</h2>
                  <h3>Build projects together with <span className="text-blue">Junior Googlers.</span></h3>
                  <p className="section-description">
                    We bridge the gap between theory and practice. Work alongside passionate students
                    to create projects that address real needs in our community.
                  </p>
                  <p className="section-description section-description-short">
                    Explore what our members are working on and find an idea you can help bring to life.
                  </p>
                  <a className="button button-dark" href="/project">
                    Explore projects <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </section>
      
            <section className="learning-section content-section" id="learning" aria-labelledby="learning-title">
              <div className="section-inner two-column">
                <div className="section-copy">
                  <p className="section-kicker"><span>03</span> Skills for what’s next</p>
                  <h2 id="learning-title">What you’ll get</h2>
                  <h3>
                    Get hands-on with <span className="text-red">Google technologies.</span>
                  </h3>
                  <p className="section-description">
                    Grow your skills by exploring the tools and technologies behind the products people
                    use every day. Then put what you learn into practice by building real applications
                    with the community.
                  </p>
                  <div className="technology-list" role="group" aria-label="Choose a technology to explore">
                    <button className="tech-chip is-selected" type="button" data-tech="flutter" aria-pressed="true"><i className="tech-dot dot-blue"></i> Flutter</button>
                    <button className="tech-chip" type="button" data-tech="android" aria-pressed="false"><i className="tech-dot dot-red"></i> Android</button>
                    <button className="tech-chip" type="button" data-tech="tensorflow" aria-pressed="false"><i className="tech-dot dot-green"></i> TensorFlow</button>
                    <button className="tech-chip" type="button" data-tech="cloud" aria-pressed="false"><i className="tech-dot dot-yellow"></i> Google Cloud</button>
                    <button className="tech-chip" type="button" data-tech="firebase" aria-pressed="false"><i className="tech-dot dot-blue"></i> Firebase</button>
                  </div>
                  <p className="technology-detail" aria-live="polite">Build beautiful apps for mobile, web, and desktop from one codebase.</p>
                  <a className="button button-dark" href="https://codelabs.developers.google.com/" target="_blank" rel="noreferrer">
                    Explore Codelabs <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <div className="illustration-frame illustration-learning">
                  <div className="photo-placeholder photo-placeholder-learning" role="img" aria-label="Placeholder for a GDGoC workshop or learning photo">
                    <span className="photo-placeholder-label"><i></i> IMAGE SLOT 03</span>
                    <svg className="photo-placeholder-icon" viewBox="0 0 64 64" aria-hidden="true">
                      <rect x="7" y="13" width="50" height="39" rx="8" />
                      <circle cx="23" cy="27" r="5" />
                      <path d="m12 46 14-13 9 8 7-6 10 11" />
                    </svg>
                    <strong>Workshop photo goes here</strong>
                    <span className="photo-placeholder-hint">Capture a hands-on learning session</span>
                    <span className="photo-placeholder-size">16:10 <i></i> JPG / PNG</span>
                  </div>
                </div>
              </div>
            </section>
      
            <section className="faq-section content-section" id="faqs" aria-labelledby="faq-title">
              <div className="section-inner faq-layout">
                <div className="faq-illustration">
                  <p className="section-kicker"><span>04</span> Good to know</p>
                  <h2 id="faq-title">Questions?<br /><span>We’ve got you.</span></h2>
                  <img
                    src="https://www.gdgoctupm.com/assets/faqs-C0Dz_e64.png"
                    alt="Illustration of a student considering a question"
                    loading="lazy"
                  />
                </div>
                <div className="faq-list">
                  <details className="faq-item" open>
                    <summary>
                      <span>Is there a membership fee?</span>
                      <i className="faq-plus" aria-hidden="true"></i>
                    </summary>
                    <p>
                      GDGoC is a student-led, non-profit organization. There are two membership options
                      to support community initiatives: Googler Pro (₱50) and Googler Basic (₱35).
                    </p>
                  </details>
                  <details className="faq-item">
                    <summary>
                      <span>Are events held online or in person?</span>
                      <i className="faq-plus" aria-hidden="true"></i>
                    </summary>
                    <p>
                      Events may be held online or face to face, depending on the activity and what
                      works best for the community.
                    </p>
                  </details>
                  <details className="faq-item">
                    <summary>
                      <span>I’m not from TUP Manila. Can I still join?</span>
                      <i className="faq-plus" aria-hidden="true"></i>
                    </summary>
                    <p>
                      Membership is currently open to TUP Manila students. You’re welcome to follow our
                      public channels for updates and open events.
                    </p>
                  </details>
                  <a className="faq-more" href="https://gdg.community.dev/gdg-on-campus-technological-university-of-the-philippines-manila-philippines/">
                    Still curious? Find us on the GDG community page <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </section>
          </main>
      
          <footer className="site-footer" id="join">
            <div className="footer-main">
              <div className="footer-inner">
                <div className="footer-invite">
                  <p className="section-kicker"><span>Let’s make something</span></p>
                  <h2>Let’s connect<span className="text-red">!</span></h2>
                  <p>Want to be part of our community? Have something in mind?</p>
                  <div className="footer-actions">
                    <a className="button button-red" href="https://gdg.community.dev/gdg-on-campus-technological-university-of-the-philippines-manila-philippines/">
                      Join the community <span aria-hidden="true">↗</span>
                    </a>
                    <a className="button button-outline" href="https://www.facebook.com/GDGonCampusTUPManila" target="_blank" rel="noreferrer">
                      Message us
                    </a>
                  </div>
                </div>
                <div className="footer-social">
                  <p className="section-kicker"><span>Stay in the loop</span></p>
                  <h2>Keep up with us<span className="text-blue">!</span></h2>
                  <p>Follow along for events, projects, and community updates.</p>
                  <div className="social-links" aria-label="Social media">
                    <a href="https://www.facebook.com/GDGonCampusTUPManila" target="_blank" rel="noreferrer" aria-label="Facebook">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.8-.1-1.6-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" /></svg>
                    </a>
                    <a href="https://www.instagram.com/gdgoctup/" target="_blank" rel="noreferrer" aria-label="Instagram">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="icon-fill" cx="17.7" cy="6.6" r="1" /></svg>
                    </a>
                    <a href="https://www.linkedin.com/company/gdgoctupmanila" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8.5v10M5 5.5v.1M9.5 18.5v-6a3 3 0 0 1 6 0v6M9.5 10v8.5M18.5 18.5v-6a3 3 0 0 0-6 0" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <a className="footer-brand" href="/" aria-label="GDGoC TUP Manila, back to home">
                <img className="brand-mark" src="assets/gdgoc-mark.png" alt="" aria-hidden="true" />
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
