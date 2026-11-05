const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const themeToggle = document.querySelector(".theme-toggle");
const lightThemeStylesheet = document.querySelector("#light-theme-stylesheet");

function setTheme(theme) {
  const isLight = theme === "light";
  const selectedTheme = isLight ? "light" : "dark";
  document.documentElement.dataset.theme = selectedTheme;
  lightThemeStylesheet.disabled = !isLight;
  themeToggle.setAttribute("aria-label", `Switch to ${isLight ? "dark" : "light"} mode`);
  themeToggle.setAttribute("aria-pressed", String(isLight));
  themeToggle.querySelector(".theme-toggle-label").textContent = `${isLight ? "Dark" : "Light"} mode`;
  window.localStorage.setItem("gdgoc-theme", selectedTheme);
  document.cookie = `gdgoc-theme=${selectedTheme}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

setTheme(window.localStorage.getItem("gdgoc-theme") === "light" ? "light" : "dark");
themeToggle.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
  }
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const gallery = document.querySelector(".gallery-art");
const galleryCard = document.querySelector(".hero-gallery");

const galleryDots = [...document.querySelectorAll(".gallery-dot")];
const galleryIndex = document.querySelector(".gallery-index");
const slides = [
  {
    kicker: "A place to make things happen",
    title: "Your community,<br />in focus.",
    caption: "Drop your group photo here",
  },
  {
    kicker: "Learn by doing",
    title: "Ideas become<br />real things.",
    caption: "Workshops, projects, and a lot of learning",
  },
  {
    kicker: "Better, together",
    title: "Find your<br />people here.",
    caption: "A community of curious student developers",
  },
];

function showSlide(index) {
  const slideIndex = (index + slides.length) % slides.length;
  const slide = slides[slideIndex];
  gallery.dataset.slide = String(slideIndex);
  gallery.querySelector(".gallery-kicker").textContent = slide.kicker;
  gallery.querySelector(".gallery-title").innerHTML = slide.title;
  gallery.querySelector(".gallery-caption").textContent = slide.caption;
  gallery.classList.toggle("is-showing-title", slideIndex !== 0);
  galleryIndex.innerHTML = `${String(slideIndex + 1).padStart(2, "0")} <i></i> ${String(slides.length).padStart(2, "0")}`;

  galleryDots.forEach((dot, dotIndex) => {
    const isSelected = dotIndex === slideIndex;
    dot.classList.toggle("is-selected", isSelected);
    dot.setAttribute("aria-pressed", String(isSelected));
  });
}

if (gallery && galleryCard) {
  document.querySelectorAll(".gallery-arrow").forEach((button) => {
    button.addEventListener("click", () => {
      showSlide(Number(gallery.dataset.slide) + Number(button.dataset.direction));
    });
  });

  galleryDots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  let autoplayTimer;
  let autoplayPaused = false;

  function stopAutoplay() {
    window.clearInterval(autoplayTimer);
  }

  function startAutoplay() {
    stopAutoplay();
    if (!reducedMotion.matches && !autoplayPaused && !document.hidden) {
      autoplayTimer = window.setInterval(() => {
        showSlide(Number(gallery.dataset.slide) + 1);
      }, 6500);
    }
  }

  galleryCard.addEventListener("pointerenter", () => {
    autoplayPaused = true;
    stopAutoplay();
  });
  galleryCard.addEventListener("pointerleave", () => {
    autoplayPaused = false;
    startAutoplay();
  });
  galleryCard.addEventListener("focusin", () => {
    autoplayPaused = true;
    stopAutoplay();
  });
  galleryCard.addEventListener("focusout", (event) => {
    if (!galleryCard.contains(event.relatedTarget)) {
      autoplayPaused = false;
      startAutoplay();
    }
  });
  document.addEventListener("visibilitychange", startAutoplay);
  reducedMotion.addEventListener("change", startAutoplay);
  startAutoplay();
}

const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
const scrollProgress = document.querySelector(".scroll-progress span");
const header = document.querySelector(".site-header");
let scrollTicking = false;

function updateScrollUI() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
  scrollProgress.style.transform = `scaleX(${progress})`;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
  scrollTicking = false;
}

window.addEventListener("scroll", () => {
  if (!scrollTicking) {
    window.requestAnimationFrame(updateScrollUI);
    scrollTicking = true;
  }
}, { passive: true });
updateScrollUI();

const revealTargets = document.querySelectorAll(
  ".partners-section, .section-copy, .illustration-frame, .faq-illustration, .faq-item, .faq-more, .footer-invite, .footer-social, .projects-page-hero, .project-card, .projects-coming-soon, .team-page-hero, .team-roster-section, .team-departments > h2"
);

if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -35px 0px" });

  revealTargets.forEach((target, index) => {
    target.classList.add("reveal");
    target.style.setProperty("--reveal-delay", `${Math.min(index % 3, 2) * 90}ms`);
    revealObserver.observe(target);
  });
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

const technologyDescriptions = {
  flutter: "Build beautiful apps for mobile, web, and desktop from one codebase.",
  android: "Create experiences for the devices people use every day.",
  tensorflow: "Explore machine learning and turn data into useful ideas.",
  cloud: "Build, deploy, and scale applications with Google Cloud.",
  firebase: "Add the tools your apps need, from data to authentication.",
};
const technologyDetail = document.querySelector(".technology-detail");

document.querySelectorAll(".tech-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tech-chip").forEach((chip) => {
      const isSelected = chip === button;
      chip.classList.toggle("is-selected", isSelected);
      chip.setAttribute("aria-pressed", String(isSelected));
    });
    technologyDetail.textContent = technologyDescriptions[button.dataset.tech];
  });
});

if (finePointer.matches && !reducedMotion.matches) {
  [galleryCard, ...document.querySelectorAll(".illustration-frame")]
    .filter(Boolean)
    .forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width;
        const y = (event.clientY - bounds.top) / bounds.height;
        card.style.setProperty("--pointer-x", `${Math.round(x * 100)}%`);
        card.style.setProperty("--pointer-y", `${Math.round(y * 100)}%`);
        card.style.setProperty("--tilt-x", `${((0.5 - y) * 3).toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${((x - 0.5) * 3).toFixed(2)}deg`);
      });

      card.addEventListener("pointerleave", () => {
        card.style.removeProperty("--pointer-x");
        card.style.removeProperty("--pointer-y");
        card.style.removeProperty("--tilt-x");
        card.style.removeProperty("--tilt-y");
      });
    });
}
