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
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Cargar la página de inicio por defecto
document.addEventListener('DOMContentLoaded', () => {
    loadContent('inicio.html');
});