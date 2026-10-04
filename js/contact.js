import { $$ } from './utils.js';

export const CONTACT = {
    email:   'brisaescobar13@gmail.com',
    subject: 'Contacto desde el portafolio',
};

function isDesktopLike() {
    const hasMouse = window.matchMedia?.('(hover: hover) and (pointer: fine)').matches ?? false;
    const isTouchDevice = (navigator.maxTouchPoints || 0) > 0 && !hasMouse;
    return hasMouse && !isTouchDevice;
}

function gmailComposeUrl({ email, subject }) {
    const params = new URLSearchParams({ view: 'cm', fs: '1', to: email, su: subject });
    return `https://mail.google.com/mail/?${params.toString()}`;
}

export function mailtoUrl({ email, subject }) {
    
    return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export function initEmailLinks() {
    $$('[data-email-link]').forEach(link => {
        
        link.setAttribute('href', mailtoUrl(CONTACT));

        link.addEventListener('click', (event) => {
            if (!isDesktopLike()) return; 

            const win = window.open(gmailComposeUrl(CONTACT), '_blank');

            if (win) {
                win.opener = null;      
                event.preventDefault();
            }
            
        });
    });
}