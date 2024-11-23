function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    body.style.transition = 'background-image 0.3s';
    body.style.backgroundImage = isDark ? "url('https://t.mwm.moe/mp')" : "url('https://t.mwm.moe/pc')";
}