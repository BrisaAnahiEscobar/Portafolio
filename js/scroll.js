// scroll.js — Efectos y comportamiento al hacer scroll

/**
 * Agrega la clase 'visible' a las secciones cuando entran en el viewport.
 * Útil para animaciones de entrada (fade-in, slide-up, etc.).
 */
export function initScrollEffects() {
    const targets = document.querySelectorAll('.section');

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // solo una vez
                }
            });
        },
        { threshold: 0.1 }
    );

    targets.forEach(el => observer.observe(el));
}
