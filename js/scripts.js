
// Función que carga contenido dinámicamente en la página


function loadContent(page) {
  fetch(page)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar la página');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('content').innerHTML = data;

      if (page === 'faq.html') {
        const script = document.createElement('script');
        script.src = 'js/faq.js';
        script.onload = () => {
          if (typeof activarFAQ === 'function') {
            activarFAQ();
          }
        };
        document.body.appendChild(script);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    loadContent('inicio.html');
});



// Cargar la página de inicio por defecto
// Evento que se ejecuta cuando el DOM ha sido completamente cargado

document.addEventListener('DOMContentLoaded', () => {
	// Carga automáticamente la página de inicio al abrir el sitio
    loadContent('inicio.html');
});




