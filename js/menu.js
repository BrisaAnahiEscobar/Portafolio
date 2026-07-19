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


export function initNavOffset() {
    const navbar = $('.navbar');
    if (!navbar) return;

    const updateOffset = () => {
        const extraAire = 16; // margen extra para que el título respire
        const height = navbar.getBoundingClientRect().height + extraAire;
        document.documentElement.style.setProperty('--nav-height', `${height}px`);
    };

    updateOffset();
    window.addEventListener('resize', updateOffset);
}
