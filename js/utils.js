// utils.js — Helpers reutilizables

/**
 * Shorthand para querySelector
 * @param {string} selector
 * @param {Element} [scope=document]
 */
export const $ = (selector, scope = document) => scope.querySelector(selector);

/**
 * Shorthand para querySelectorAll (retorna array)
 * @param {string} selector
 * @param {Element} [scope=document]
 */
export const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

/**
 * Copia texto al portapapeles
 * @param {string} text
 * @returns {Promise<boolean>}
 */
export async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('Error al copiar:', err);
        return false;
    }
}

/**
 * Muestra un elemento temporalmente con clase CSS
 * @param {Element} el
 * @param {string} className
 * @param {number} duration en ms
 */
export function flashClass(el, className, duration = 2500) {
    el.classList.add(className);
    setTimeout(() => el.classList.remove(className), duration);
}
