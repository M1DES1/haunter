document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.main-container');
    
    // Ustawiamy startową przezroczystość
    container.style.opacity = '0';
    container.style.transition = 'opacity 1s ease-in-out';

    // Pokazujemy po krótkiej chwili
    setTimeout(() => {
        container.style.opacity = '1';
    }, 100);
});
