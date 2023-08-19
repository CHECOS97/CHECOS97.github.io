window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("abajo",window.scrollY>0);
})

// Contador
function actualizarContador() {
    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.textContent);

    // Aumentar o disminuir gradualmente la velocidad según el valor actual del contador
    var velocidad = 1; // Velocidad inicial

    if (contador > 718) {
        // Reducir la velocidad cuando llegue a los últimos 10 números
        velocidad = 300; // Velocidad reducida
    }

    contadorElemento.textContent = contador + 1; // Incrementar el contador
    contador++; // Incrementar el contador en la variable

    // Si no ha llegado al final, seguir actualizando el contador
    if (contador <= 727) {
        setTimeout(actualizarContador, velocidad);
    }
}

// Función para manejar las intersecciones (cuando el elemento entra o sale de la pantalla)
function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Iniciar el contador cuando el elemento sea visible
            actualizarContador();

            // Detener la observación una vez que el contador ha comenzado
            observer.unobserve(entry.target);
        }
    });
}

// Crear un IntersectionObserver para observar el elemento del contador
var contadorElemento = document.getElementById("contador");
var observer = new IntersectionObserver(handleIntersect);
observer.observe(contadorElemento);

window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var footerPosition = footer.getBoundingClientRect().top;

    if (footerPosition < window.innerHeight) {
        footer.classList.add('visible');
    }
});
