// ==========================================
// SMOOTH TYPING EFFECT (No Layout Shake)
// ==========================================

const typedEl = document.getElementById("typed");

if (typedEl) {
  const phrases = [
    "Full Stack Developer.",
    "Java Enthusiast.",
    "Building Modern Web Apps.",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typedEl.textContent = current.substring(0, charIndex);

    if (!isDeleting && charIndex === current.length) {
      setTimeout(() => (isDeleting = true), 1200);
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    setTimeout(typeEffect, isDeleting ? 45 : 80);
  }

  typeEffect();
}

// ==========================================
// MAGNETIC BUTTON GLOW
// ==========================================

document.querySelectorAll(".magnetic").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    btn.style.setProperty("--mx", `${x}%`);
    btn.style.setProperty("--my", `${y}%`);
  });
});

// ==========================================
// REVEAL ON SCROLL (Optimized)
// ==========================================

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".reveal").forEach((el) => {
  revealObserver.observe(el);
});

// ==========================================
// TILT EFFECT (Smoother + Stable)
// ==========================================

document.querySelectorAll(".tilt").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `
      perspective(900px)
      rotateX(${y * -6}deg)
      rotateY(${x * 6}deg)
      translateY(-4px)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  });
});

// ==========================================
// NAVBAR ACTIVE LINK (Efficient)
// ==========================================

const navLinks = document.querySelectorAll(".nav-link");
const navSections = [...navLinks].map((link) =>
  document.querySelector(link.getAttribute("href")),
);

function updateActiveLink() {
  const scrollPos = window.scrollY + 150;

  navSections.forEach((section, index) => {
    if (!section) return;

    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (scrollPos >= top && scrollPos < bottom) {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

// ==========================================
// SKILLS TAB SWITCHING (Clean + Smooth)
// ==========================================

const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;

    tabButtons.forEach((b) => b.classList.remove("active"));
    tabPanels.forEach((panel) => panel.classList.remove("active"));

    btn.classList.add("active");

    const panel = document.getElementById(target);
    if (panel) panel.classList.add("active");
  });
});

// ==========================================
// PROJECT READ MORE TOGGLE
// ==========================================

document.querySelectorAll(".read-more-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.classList.toggle("show");

    button.textContent = content.classList.contains("show")
      ? "Show Less"
      : "Read More";
  });
});
