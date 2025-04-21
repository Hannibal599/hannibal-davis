document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.header-center');
    const headerRight = document.querySelector('.header-right');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            navLinks.classList.toggle('nav-active');
            headerRight.classList.toggle('nav-active');
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('hamburger-active');
                navLinks.classList.remove('nav-active');
                headerRight.classList.remove('nav-active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Ensure content isn't hidden behind header
    function adjustContentPadding() {
        const header = document.querySelector('.main-header');
        if (header) {
            const headerHeight = header.offsetHeight;
            document.body.style.paddingTop = `${headerHeight}px`;
            
            // Adjust home page hero height
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.height = `calc(100vh - ${headerHeight}px)`;
            }
        }
    }

    window.addEventListener('resize', adjustContentPadding);
    adjustContentPadding();
});