const revealItems = document.querySelectorAll(".reveal");
const year = document.getElementById("year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
);

revealItems.forEach((item, i) => {
  item.style.transitionDelay = `${Math.min(i * 70, 320)}ms`;
  observer.observe(item);
});

const orbs = document.querySelectorAll(".bg-orb");
const hasReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!hasReducedMotion) {
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY * 0.08;
      orbs.forEach((orb, i) => {
        const dir = i % 2 === 0 ? 1 : -1;
        orb.style.transform = `translate3d(${dir * y * 0.4}px, ${y}px, 0)`;
      });
    },
    { passive: true }
  );
}
