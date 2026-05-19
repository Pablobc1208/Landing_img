document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-img');
    let currentIndex = 0;
    const intervalTime = 5000; // 5 segundos

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

    // ── Segunda página: Home_2 ──
    const mainImg = document.getElementById('main-img');
    const home2 = document.getElementById('home2-page');
    const backBtn = document.getElementById('home2-back');
    const nextBtn = document.getElementById('home2-next');
    const home2Img = document.getElementById('home2-img');
    let currentHomePage = 2;

    const updateHomeView = () => {
        if (!home2Img || !backBtn || !nextBtn) return;

        if (currentHomePage === 2) {
            home2Img.src = 'img/Home_2.jpg';
            home2Img.alt = 'Ascentec GO - Vista completa';
            home2Img.style.cursor = 'pointer';
            nextBtn.style.display = 'inline-flex';
            backBtn.innerHTML = '&#8592; Volver';
        } else {
            home2Img.src = 'img/Home_3.jpg';
            home2Img.alt = 'Servicios que elevan cada proyecto';
            home2Img.style.cursor = 'default';
            nextBtn.style.display = 'none';
            backBtn.innerHTML = '&#8592; Volver';
        }
    };

    const showHome2 = () => {
        currentHomePage = 2;
        updateHomeView();
        home2.classList.add('active');
        home2.scrollTop = 0;              // siempre desde arriba
        document.body.style.overflow = 'hidden'; // el scroll lo gestiona home2-page
    };

    const hideHome2 = () => {
        home2.classList.remove('active');
        document.body.style.overflow = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const showHome3 = () => {
        currentHomePage = 3;
        updateHomeView();
        home2.scrollTop = 0;
    };

    if (mainImg && home2) {
        mainImg.addEventListener('click', showHome2);
    }

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            if (currentHomePage === 3) {
                currentHomePage = 2;
                updateHomeView();
                home2.scrollTop = 0;
                return;
            }

            hideHome2();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', showHome3);
    }

    if (home2Img) {
        home2Img.addEventListener('click', () => {
            if (currentHomePage === 2) {
                showHome3();
            }
        });
    }

    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && home2.classList.contains('active')) hideHome2();
    });
});
