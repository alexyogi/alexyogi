document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded!');

const elements = document.querySelectorAll('.fade-in');

  // If no elements, do nothing
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));
});
