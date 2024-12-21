function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuOverlay = document.querySelector('.menu-overlay');

    if (navLinks.classList.contains('active')) {
        navLinks.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            navLinks.classList.remove('active');
            menuOverlay.classList.remove('active');
        }, 300);
    } else {
        navLinks.classList.add('active');
        menuOverlay.classList.add('active');
        navLinks.style.transform = 'translateY(0)';
    }
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        const menuOverlay = document.querySelector('.menu-overlay');
        
        if (navLinks.classList.contains('active')) {
            navLinks.style.transform = 'translateY(-100%)';
            setTimeout(() => {
                navLinks.classList.remove('active');
                menuOverlay.classList.remove('active');
            }, 300);
        }
    });
});
