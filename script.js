document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('nav-links-active');
    });

    // Animación de barras de habilidades
    const skillLevels = document.querySelectorAll('.skill-level');
    const skillsSection = document.querySelector('#skills');
    const options = {
        threshold: 0.3
    };

    function handleSkillsAnimation(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillLevels.forEach(skill => {
                    const width = skill.style.width;
                    skill.style.width = '0';
                    setTimeout(() => {
                        skill.style.width = width;
                    }, 500);
                });
                observer.unobserve(skillsSection);
            }
        });
    }

    const observer = new IntersectionObserver(handleSkillsAnimation, options);
    observer.observe(skillsSection);
});



    window.addEventListener('scroll', function() {
        var nav = document.querySelector('nav');
        if (window.scrollY > 50) { // Ajusta este valor según cuándo quieras que ocurra el cambio
            nav.style.backgroundColor = '#2C3E50'; // Cambia el color de fondo cuando se hace scroll
        } else {
            nav.style.backgroundColor = 'transparent'; // Fondo transparente por defecto
        }
    });

    // Manejo del icono del menú para dispositivos móviles
    document.querySelector('.menu-icon').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });

// Obtener el botón
let mybutton = document.getElementById("scrollToTopBtn");

// Mostrar el botón cuando el usuario se desplaza hacia abajo 20px desde la parte superior del documento
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Cuando el usuario hace clic en el botón, desplazarse hacia la parte superior del documento
mybutton.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
