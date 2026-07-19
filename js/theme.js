// theme.js — Lógica de cambio de tema claro/oscuro

import { $ } from './utils.js';

const STORAGE_KEY = 'theme';
const DEFAULT_THEME = 'dark';

const ICONS = {
    light: '🌙' ,
    dark: '☀️',
};

/**
 * Aplica el tema al documento
 * @param {'light'|'dark'} theme
 */
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);

    const btn = $('#theme-toggle');
    if (btn) btn.textContent = ICONS[theme];
}

/**
 * Inicializa el módulo de tema
 */
export function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
    applyTheme(saved);

    const btn = $('#theme-toggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        applyTheme(next);
        localStorage.setItem(STORAGE_KEY, next);
    });
}
