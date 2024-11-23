function showTabContent(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    const targetContent = document.getElementById(tabId);

    contents.forEach(content => {
        content.classList.remove('active');
        content.style.opacity = 0;
    });

    targetContent.classList.add('active');

    setTimeout(() => {
        targetContent.style.opacity = 1;
    }, 50);
}