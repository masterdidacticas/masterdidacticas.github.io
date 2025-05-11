
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
			// Inserta el contenido cargado dentro del div con id="content"
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Cargar la página de inicio por defecto
// Evento que se ejecuta cuando el DOM ha sido completamente cargado

document.addEventListener('DOMContentLoaded', () => {
	// Carga automáticamente la página de inicio al abrir el sitio
    loadContent('inicio.html');
});