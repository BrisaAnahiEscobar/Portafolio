document.addEventListener('DOMContentLoaded', () => {
   
    // --- LOGICA DEL EMAIL ---
    const miEmail = "brisaescobar13@gmail.com";
    const btnCopy = document.getElementById('btn-copy-mail');
    const alertMessage = document.getElementById('copy-alert');

    if (btnCopy) {
        btnCopy.addEventListener('click', () => {
            navigator.clipboard.writeText(miEmail).then(() => {
                alertMessage.classList.add('show');
                setTimeout(() => {
                    alertMessage.classList.remove('show');
                }, 2500);
            }).catch(err => {
                console.error('Error al copiar el mail: ', err);
            });
        });
    }

    // --- CAMBIO DE TEMA ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Verificamos si ya guardó un tema en el almacenamiento local, sino por defecto 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Aplicamos el tema directamente tanto al elemento raíz (html) como al cuerpo (body) por seguridad
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
    
    // Seteamos el emoji de inicio correspondiente
    if (themeToggleBtn) {
        themeToggleBtn.innerText = (savedTheme === 'light') ? '🌙' : '☀️';

        themeToggleBtn.addEventListener('click', () => {
            // Obtengo el tema actual
            const currentTheme = document.documentElement.getAttribute('data-theme');
            
            // Definino el nuevo tema
            const newTheme = (currentTheme === 'light') ? 'dark' : 'light';
            
            // Cambio el atributo en la página
            document.documentElement.setAttribute('data-theme', newTheme);
            document.body.setAttribute('data-theme', newTheme);
            
            // Cambio el emoji del botón
            themeToggleBtn.innerText = (newTheme === 'light') ? '🌙' : '☀️';
            
            // Guardo la configuración en la memoria del navegador
            localStorage.setItem('theme', newTheme);
        });
    }
});

