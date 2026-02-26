// Agregar clase cuando la página carga
window.addEventListener('DOMContentLoaded', () => {
    const flower = document.querySelector('.flower');

    // Pequeño retraso antes de comenzar la animación
    setTimeout(() => {
        flower.style.opacity = '1';
    }, 100);

    // Opcional: Agregar interactividad al hacer clic
    flower.addEventListener('click', () => {
        const petals = document.querySelectorAll('.petal');
        const center = document.querySelector('.center');

        // Efecto de "cerrar" y "abrir" la flor al hacer clic
        petals.forEach((petal, index) => {
            petal.style.animation = 'none';
            setTimeout(() => {
                petal.style.animation = '';
            }, 50);
        });

        center.style.animation = 'none';
        setTimeout(() => {
            center.style.animation = '';
        }, 50);
    });
});
