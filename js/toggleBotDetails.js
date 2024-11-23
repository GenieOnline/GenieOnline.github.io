function toggleBotDetails(botId) {
    const details = document.getElementById(botId);
    const allDetails = document.querySelectorAll('.bot-detail-wrapper');
    const botCards = document.querySelectorAll('.bot-card');
    const card = document.querySelector(`.bot-card[onclick="toggleBotDetails('${botId}')"]`);

    let isActive = details.classList.contains('active');

    allDetails.forEach(detail => {
        detail.classList.remove('active');
        detail.style.opacity = 0;
        botCards.forEach(card => card.classList.remove('active'));
    });

    if (!isActive) {
        details.classList.add('active');
        details.style.opacity = 0;
        setTimeout(() => {
            details.style.opacity = 1;
        }, 50);
        card.classList.add('active');
    }
}