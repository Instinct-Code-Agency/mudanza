var titleCount = 0;
setInterval(() => {
    let titles = [
                    'Mudanzas en Cantabria Santander', 
                    'Recogida de muebles Torrelavega', 
                    'Portes de material Castro Urdiales', 
                    'Mudanzas en Cantabria Laredo'
                ];
    let images = [
                    '/img/mudanzas-santander.png',
                    '/img/mudanzas-torrelavega.png', 
                    '/img/mudanzas-laredo.png', 
                    '/img/mudanzas-santander-personas.png'
                ];
    let heroImage = document.getElementById('hero-image');
    if (heroImage) {
        heroImage.src = images[titleCount];
    }
    let heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        heroTitle.textContent = titles[titleCount];
    }

    titleCount++;
    if (titleCount >= titles.length) { titleCount = 0; }
}, 11000);