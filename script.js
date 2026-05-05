document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Obsługa płynnego przewijania dla linków w menu
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Sticky Navbar - zmiana tła przy przewijaniu
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // 3. Reveal on Scroll - animacja pojawiania się sekcji
    const sections = document.querySelectorAll('section');
    
    const revealOptions = {
        threshold: 0.15 // sekcja musi być widoczna w 15%, aby się pojawiła
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target); // Animujemy tylko raz
            }
        });
    }, revealOptions);

    sections.forEach(section => {
        section.classList.add('section-hidden'); // Dodajemy klasę startową
        revealObserver.observe(section);
    });
});