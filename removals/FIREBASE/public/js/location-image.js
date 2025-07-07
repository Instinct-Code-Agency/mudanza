let path        = window.location.href;
let ciudadSlug  = path.split("/").pop();
let ciudadNombre = ciudadSlug.replace(/-/g, " ");
ciudadNombre = ciudadNombre.split(" ").map(word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}).join(" ");

ciudadNombre = ciudadNombre.replaceAll('#', '');

document.title = 'MUDANZAS EN ' + ciudadNombre.toUpperCase() + ' - LA ESPERANZA';


// Cambiar meta description
let metaDescription = document.querySelector('meta[name="description"]');
if(metaDescription) {
  metaDescription.setAttribute("content", "Mudanzas La Esperanza - Mudanzas en " + ciudadNombre + ", recogida de muebles viejos, podas y más.");
}

// Cambiar og:title
let ogTitle = document.querySelector('meta[property="og:title"]');
if(ogTitle) {
  ogTitle.setAttribute("content", "Mudanzas La Esperanza | Mudanzas en " + ciudadNombre + " y recogida de muebles viejos");
}

// Cambiar og:description
let ogDescription = document.querySelector('meta[property="og:description"]');
if(ogDescription) {
  ogDescription.setAttribute("content", "Mudanzas profesionales en " + ciudadNombre + " y toda Cantabria. Retirada de muebles viejos, podas y transporte de materiales en desuso. Solicita presupuesto sin compromiso.");
}

// Cambiar og:url
let ogUrl = document.querySelector('meta[property="og:url"]');
if(ogUrl) {
  ogUrl.setAttribute("content", path);
}

// Cambiar twitter:title
let twitterTitle = document.querySelector('meta[name="twitter:title"]');
if(twitterTitle) {
  twitterTitle.setAttribute("content", "Mudanzas La Esperanza | Mudanzas en " + ciudadNombre + " y recogida de muebles viejos");
}

// Cambiar twitter:description
let twitterDescription = document.querySelector('meta[name="twitter:description"]');
if(twitterDescription) {
  twitterDescription.setAttribute("content", "Mudanzas profesionales en " + ciudadNombre + " y toda Cantabria. Retirada de muebles viejos, podas y transporte de materiales en desuso.");
}

// Cambiar canonical
let canonical = document.querySelector('link[rel="canonical"]');
if(canonical) {
  canonical.setAttribute("href", path);
}

let randomIndex = Math.floor(Math.random() * locationArray.length);
let htmlContent = locationArray[randomIndex];
    htmlContent = htmlContent.replaceAll('CUIDAD_X', ciudadNombre);
let appHtmlObj = document.getElementById("app");
if(appHtmlObj) {
    appHtmlObj.innerHTML = htmlContent;
}


let imagesURL = []
let cityName = ciudadNombre;

fetch("https://imagedeveloper.pythonanywhere.com/?city=" + cityName).then(res => res.json()).then(result => {
    if(result.images && result.images.length > 0){
        result.images.forEach(imageRef => {
            let imageUrl = "https://imagedeveloper.pythonanywhere.com/show_image/" + imageRef;
            imagesURL.push(imageUrl); 
        });
    }

    let randomIndex = Math.floor(Math.random() * imagesURL.length);
    if(imagesURL.length > 0) {  
        document.getElementById("imgID").src = imagesURL[randomIndex];
        document.getElementById("imgID").style.display = "block";
    } else {
        document.getElementById("imgID").src = "/images/servicio0.png";
        document.getElementById("imgID").style.display = "block";
    }
});


if(!ciudadNombre){
  let randomCity = listOfCities[Math.floor(Math.random() * listOfCities.length)];
  window.location.href = "/Mudanzas/" + randomCity.replace(/ /g, "-");
}