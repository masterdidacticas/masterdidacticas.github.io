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

    document.querySelectorAll('.marco-destacado2.activo').forEach(el => {
      el.classList.remove('activo');
    });

    targetElement.classList.add('activo');
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

