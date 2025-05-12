function activarFAQ() {
  const faqContainer = document.querySelector('.faq');
  if (!faqContainer) return;

  faqContainer.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;

    event.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    // Quitar clase activa de otros elementos
    document.querySelectorAll('.marco-destacado2.activo').forEach(el => {
      el.classList.remove('activo');
    });

    // Agregar clase activa y resaltado
    targetElement.classList.add('activo', 'resaltado');

    // Hacer scroll suave
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Enfocar el div (accesibilidad)
    targetElement.setAttribute('tabindex', '-1');
    targetElement.focus();

    // Quitar resaltado después de 2 segundos
    setTimeout(() => {
      targetElement.classList.remove('resaltado');
    }, 2000);
  });
}

