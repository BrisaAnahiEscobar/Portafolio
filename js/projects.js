// projects.js — Carga y renderiza proyectos desde data/projects.json

import { $ } from './utils.js';

/**
 * Genera el HTML de un badge según su tipo
 */
function renderBadge({ type, label }) {
    return `<span class="badge badge-${type}">${label}</span>`;
}

/**
 * Genera el HTML de los tags tecnológicos
 */
function renderTechs(techs) {
    return techs.map(t => `<span>${t}</span>`).join('');
}

/**
 * Genera el HTML de los links de la card
 */
function renderLinks(links) {
    if (!links || links.length === 0) return '';
    const anchors = links
        .map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} &rarr;</a>`)
        .join('');
    return `<div class="card-links">${anchors}</div>`;
}

/**
 * Genera el HTML completo de una card de proyecto
 */
function renderCard(project) {
    return `
    <article class="card">
        <h3>${project.title}</h3>
        ${renderBadge(project.badge)}
        <p>${project.description}</p>
        <p><strong>Aporte:</strong> ${project.contribution}</p>
        <div class="techs">
            ${renderTechs(project.techs)}
        </div>
        ${renderLinks(project.links)}
    </article>`;
}

/**
 * Inicializa la sección de proyectos
 */
export async function initProjects() {
    const grid = $('.projects-grid');
    if (!grid) return;

    try {
        const res = await fetch('./data/projects.json');
        const projects = await res.json();
        grid.innerHTML = projects.map(renderCard).join('');
    } catch (err) {
        console.error('No se pudieron cargar los proyectos:', err);
    }
}
