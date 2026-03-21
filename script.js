document.addEventListener('DOMContentLoaded', () => {
    const mediaRow = document.querySelector('.media-row');
    
    // Ustawienia początkowe do animacji
    mediaRow.style.opacity = '0';
    mediaRow.style.transform = 'translateY(50px)';
    mediaRow.style.transition = 'all 1s ease-out';

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        const boxTop = mediaRow.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            mediaRow.style.opacity = '1';
            mediaRow.style.transform = 'translateY(0)';
        }
    };

    // Sprawdź przy ładowaniu i przy skrolowaniu
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Wywołaj raz na start
});
