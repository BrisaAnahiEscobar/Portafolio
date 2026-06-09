# 🌐 Portafolio Web Personal - Brisa Anahi Escobar

¡Bienvenido/a a mi portafolio web! Este proyecto es un espacio interactivo diseñado desde cero para centralizar y exhibir mi trayectoria académica en la **Universidad Tecnológica Nacional (UTN)**, mis proyectos personales y las competencias técnicas que adquirí enfocado en el desarrollo de software.

🚀 **Link del proyecto en vivo:** [Visitar Portafolio](https://BrisaAnahiEscobar.github.io/Portafolio/)

---

## 🎯 Objetivo del Proyecto

El propósito de este sitio es servir como carta de presentación interactiva para la búsqueda de mi **primera pasantía o rol Trainee / Junior** en el ámbito de la Ingeniería en Sistemas de Información, facilitando a reclutadores y equipos técnicos el acceso directo a mi código, mi CV y mis vías de contacto.

---

## 🛠️ Características Principales e Interactividad

El portafolio prioriza un diseño limpio, moderno, con buena usabilidad (UX) y código modular:
* **Diseño Adaptativo (Responsive Design):** Completamente optimizado para visualizarse correctamente tanto en computadoras de escritorio como en dispositivos móviles.
* **Tema Dinámico (Dark/Light Mode):** Sistema personalizado que permite alternar la estética global entre un modo oscuro basado en tonos violetas/lavanda y un modo claro editorial basado en tonos rosas y pastel. La preferencia del usuario se almacena mediante la API de `localStorage`.
* **Copiado Rápido al Portapapeles:** Implementación asíncrona mediante la API del navegador (`navigator.clipboard`) para copiar mi dirección de correo electrónico con un solo clic, acompañada de alertas visuales temporizadas.

---

## 💻 Tecnologías Utilizadas

Para demostrar un dominio sólido de los fundamentos de la web antes de migrar a frameworks, utilicé tecnologías nativas:

* **HTML5:** Estructuración semántica y accesible del contenido.
* **CSS3 (Custom Properties):** Estilos modernos, uso avanzado de variables nativas para la gestión de temas cromáticos, transiciones fluidas en cascada y Flexbox/Grid para layouts limpios.
* **JavaScript (ES6+):** Manipulación dinámica del DOM, manejo de promesas asíncronas para el portapapeles y persistencia de estado local.

---

## 📂 Estructura del Código

El repositorio mantiene una arquitectura de archivos limpia y modular:
```text
├── index.html          # Estructura semántica principal del sitio
├── style.css           # Estilos globales, variables :root y maquetación responsive
├── script.js           # Lógica interactiva (eventos, manipulación del DOM y temas)
└── README.md           # Documentación del proyecto