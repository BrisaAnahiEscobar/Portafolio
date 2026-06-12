// menu.js — Navegación y menú hamburguesa (preparado para expansión futura)

import { $ } from './utils.js';

/**
 * Inicializa el menú de navegación.
 */
export function initMenu() {
    const hamburger = $('#menu-toggle');
    const nav = $('#main-nav');

    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        hamburger.setAttribute('aria-expanded', isOpen);
    });
}
