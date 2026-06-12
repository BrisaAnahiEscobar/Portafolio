// skills.js — Carga y renderiza habilidades desde data/skills.json

import { $ } from './utils.js';

/**
 * Genera el HTML de una categoría de habilidad
 */
function renderCategory({ category, items }) {
    return `
    <div class="skill-category">
        <h5>${category}</h5>
        <p>${items.join(', ')}</p>
    </div>`;
}

/**
 * Inicializa la sección de habilidades
 */
export async function initSkills() {
    const container = $('.skills-container');
    if (!container) return;

    try {
        const res = await fetch('./data/skills.json');
        const skills = await res.json();
        container.innerHTML = skills.map(renderCategory).join('');
    } catch (err) {
        console.error('No se pudieron cargar las habilidades:', err);
    }
}
