document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });


// Inicializar AOS
AOS.init({
    duration: 1000, // Duración de la animación en milisegundos
    once: true // Animar sólo una vez
});

    // Animación de barras de habilidades al intersectar
    const skillBars = document.querySelectorAll('.skill-level');
    const skillsSection = document.querySelector('#skills');
    const options = {
        threshold: 0.3
    };

    function handleSkillsAnimation(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(skill => {
                    const width = skill.style.width;
                    skill.style.width = '0';
                    setTimeout(() => {
                        skill.style.width = width;
                    }, 500);
                });
                observer.unobserve(entry.target);
            }
        });
        
    }

    const observer = new IntersectionObserver(handleSkillsAnimation, options);
    if (skillsSection) {
        observer.observe(skillsSection);
    } else {
        console.error('No se encontró el elemento #skills');
    }
});

// Cambio de color del fondo de navegación al hacer scroll
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#2C3E50';
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});


// Obtener el botón
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Mostrar el botón cuando se desplaza hacia abajo
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
};

// Ir a la parte superior de la página al hacer clic en el botón
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplazamiento suave
    });
};

// Modal para galería de imágenes de certificados (si lo tienes implementado)
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

document.querySelectorAll(".gallery-item img").forEach(img => {
    img.onclick = function() {
        console.log("Imagen clickeada:", this.src); // Añadir este console.log
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        console.log("Modal abierto con imagen:", modalImg.src); // Añadir este console.log
    }
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    console.log("Cerrar modal clickeado"); // Añadir este console.log
    modal.style.display = "none";
}

// Script para el menú hamburguesa
document.getElementById("menu-icon").addEventListener("click", function() {
    var navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active"); // Alternar la clase 'active' para mostrar/ocultar
});