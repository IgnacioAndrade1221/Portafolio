const nav = document.querySelector('.interfaz');

window.addEventListener('scroll', function() {
    // Calcula la opacidad basada en el scroll
    const scrollAmount = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const opacity = 1 - (scrollAmount / maxScroll);

    // Aplica la opacidad al nav
    nav.style.opacity = Math.max(opacity, 0.50); // Asegura que la opacidad no sea menor a 0.3
});
