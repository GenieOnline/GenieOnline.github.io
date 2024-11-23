function toggleSeries(seriesId) {
    const series = document.getElementById(seriesId);
    const allSeries = document.querySelectorAll('.series-content');

    allSeries.forEach(content => {
        if (content !== series) {
            if (content.classList.contains('active')) {
                content.classList.remove('active');
                setTimeout(() => {
                    content.style.display = 'none';
                }, 500);
            }
        }
    });

    if (series.classList.contains('active')) {
        series.classList.remove('active');
        setTimeout(() => {
            series.style.display = 'none'; 
        }, 500);
    } else {
        series.style.display = 'flex'; 
        setTimeout(() => {
            series.classList.add('active'); 
        }, 0);
    }
}