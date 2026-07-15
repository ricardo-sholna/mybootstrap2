/* Javascript do template (tema) das páginas */

// Habilita tooltips do Bootstrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

const header = document.querySelector("#wrap > header");
const brand = document.querySelector(".navbar-brand");

const observer = new IntersectionObserver(
    ([entry]) => {
        brand.classList.toggle("show", !entry.isIntersecting);
    },
    {
        threshold: 0
    }
);

observer.observe(header);