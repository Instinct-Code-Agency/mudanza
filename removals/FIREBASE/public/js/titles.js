var titleCount = 0;
setInterval(() => {
    setTitleImage();
}, 11000);

function setTitleImage(){
    let titles = [
                    'Mudanzas en Cantabria Santander', 
                    'Recogida de muebles en Torrelavega', 
                    'Portes de material en Castro Urdiales', 
                    'Mudanzas en Cantabria Laredo'
                ];
    let images = [
                    '/img/mudanzas-santander.png',
                    '/img/mudanzas-torrelavega.png', 
                    '/img/mudanzas-laredo.png', 
                    '/img/mudanzas-santander-personas.png'
                ];
    let leyends = [
        "Porque cada cambio trae nuevos comienzos, en Mudanzas La Esperanza recogemos tus muebles, limpiamos tu espacio y retiramos lo que no necesitas, para que vivas con ligereza y tranquilidad",
        "Mudanzas La Esperanza: tu aliado para recoger, limpiar y renovar tu hogar o local. Un servicio completo con la confianza y profesionalidad que mereces",
        "Con Mudanzas La Esperanza tendrás la tranquilidad de dejar en buenas manos la recogida de muebles, limpieza y retirada de enseres. Nos ocupamos de todo para que tu hogar vuelva a respirar",
        "Mudanzas La Esperanza: nos encargamos de recoger tus muebles, limpiar cada rincón y retirar enseres, para que solo te preocupes de disfrutar tu nuevo espacio"
    ];
    let imagesUseCases = [
        '/images/0.png',
        '/images/1.png',
        '/images/2.png',
        '/images/3.png'
    ];
    let randomNumber = Math.floor(Math.random() * titles.length);
    let heroImage = document.getElementById('hero-image');
    if (heroImage) {
        heroImage.src = images[randomNumber];
    }
    let heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        heroTitle.textContent = titles[randomNumber];
    }
    let largeLeend = document.getElementById('largeLeend');
    if (largeLeend) {
        largeLeend.textContent = leyends[randomNumber];
    }
    let usesCases = document.getElementById('uses-cases');
    if (usesCases) {
        usesCases.src = imagesUseCases[randomNumber];
    }
}

window.onload = function() {
  setTitleImage();
};
