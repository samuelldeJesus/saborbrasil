const headerNavegador = document.querySelector(".header_navegador");
const seccionesOscuras = document.querySelectorAll(".seccion-oscura");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                headerNavegador.classList.add("header-oscuro");
            } else {
                headerNavegador.classList.remove("header-oscuro");
            }
        });
    },
    {
        threshold: 0.5
    }
);

seccionesOscuras.forEach((seccion) => {
    observer.observe(seccion);
});


// HEADER

const header = document.querySelector(".header_inicio");

let ultimaPosicionScroll = window.scrollY;

window.addEventListener("scroll", () => {

    const posicionActual = window.scrollY;

    if (posicionActual > ultimaPosicionScroll) {
        // ↓ Scroll hacia abajo
        header.classList.add("header-oculto");

    } else if (posicionActual < ultimaPosicionScroll) {
        // ↑ Scroll hacia arriba
        header.classList.remove("header-oculto");
    }

    ultimaPosicionScroll = posicionActual;
});


// -----------------------------------------------
// ----------archvio temporal (aviso)-------------
// ------------------------------------------------

const redesSociales = document.querySelectorAll(".red-social");

const aviso = document.querySelector(".aviso");
const avisoCerrar = document.querySelector(".aviso_cerrar");

redesSociales.forEach((red) => {

    red.addEventListener("click", (event) => {

        event.preventDefault();

        aviso.style.display = "flex";

    });

});

avisoCerrar.addEventListener("click", () => {

    aviso.style.display = "none";

});

// ---------------------------------------------

// -------animacion de secciones------------

const seccionesAnimadas = document.querySelectorAll(".seccion-animada");

const observerAnimaciones = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        } else {

            entry.target.classList.remove("visible");

        }

    });

}, {
    threshold: 0.3
});

seccionesAnimadas.forEach((seccion) => {
    observerAnimaciones.observe(seccion);
});