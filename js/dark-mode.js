document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check for saved preference or system preference
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Toggle dark mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
        });
    }

    // Watch for system preference changes
    prefersDarkScheme.addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            document.body.classList.toggle('dark-mode', e.matches);
        }
    });
});