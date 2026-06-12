// main.js — Entry point: 

import { initTheme }         from './theme.js';
import { initProjects }      from './projects.js';
import { initSkills }        from './skills.js';
import { initMenu }          from './menu.js';
import { initScrollEffects } from './scroll.js';
import { $, copyToClipboard, flashClass } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {

    // Tema claro/oscuro
    initTheme();

    // Menú de navegación
    initMenu();

    // Scroll effects
    initScrollEffects();

    // Contenido dinámico desde JSON
    initProjects();
    initSkills();

    // Copiar email al portapapeles
    const btnCopy = $('#btn-copy-mail');
    const alert   = $('#copy-alert');

    if (btnCopy && alert) {
        btnCopy.addEventListener('click', async () => {
            const ok = await copyToClipboard('brisaescobar13@gmail.com');
            if (ok) flashClass(alert, 'show');
        });
    }

});
