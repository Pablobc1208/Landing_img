document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-img');
    let currentIndex = 0;
    const intervalTime = 5000; // 8 segundos

    if (images.length === 0) return;

    // Cambia a la siguiente imagen del carrusel
    const nextImage = () => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    };

    // Rotación automática cada 8 segundos
    let timer = setInterval(nextImage, intervalTime);

    // Click en el área visual: avanza y reinicia el timer
    const carousel = document.getElementById('hero-carousel');
    if (carousel) {
        carousel.addEventListener('click', () => {
            clearInterval(timer);
            nextImage();
            timer = setInterval(nextImage, intervalTime);
        });
    }

    // Tabs de sectores: resaltar el activo
    const sectorTabs = document.querySelectorAll('.sector-tab');
    sectorTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            sectorTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // ── Segunda página: Home_2 ─────────────────────────────────
    const mainImg = document.getElementById('main-img');
    const home2 = document.getElementById('home2-page');
    const backBtn = document.getElementById('home2-back');

    const showHome2 = () => {
        home2.classList.add('active');
        home2.scrollTop = 0;              // siempre desde arriba
        document.body.style.overflow = 'hidden'; // el scroll lo gestiona home2-page
    };

    const hideHome2 = () => {
        home2.classList.remove('active');
        document.body.style.overflow = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (mainImg && home2) {
        mainImg.addEventListener('click', showHome2);
    }

    if (backBtn) {
        backBtn.addEventListener('click', hideHome2);
    }

    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && home2.classList.contains('active')) hideHome2();
    });
});
