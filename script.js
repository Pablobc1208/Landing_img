document.addEventListener('DOMContentLoaded', () => {
    const home = document.getElementById('home');
    const home2 = document.getElementById('home2');

    if (!home || !home2) return;

    // Función para cambiar de pantalla
    const switchScreen = () => {
        // Hacemos scroll al inicio para que la nueva imagen empiece desde arriba
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        if (home.classList.contains('active')) {
            home.classList.remove('active');
            home2.classList.add('active');
        } else {
            home2.classList.remove('active');
            home.classList.add('active');
        }
    };

    // Escuchar clics en cualquier parte del documento
    document.body.addEventListener('click', switchScreen);
});
