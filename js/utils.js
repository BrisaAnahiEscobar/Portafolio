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
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return true;
        }
    } catch (err) {
        console.warn('Clipboard API falló, usando respaldo:', err);
    }

    try {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;font-size:16px;'; // 16px evita zoom en iOS
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        ta.setSelectionRange(0, text.length);
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        return ok;
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
