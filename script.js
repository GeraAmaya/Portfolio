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

