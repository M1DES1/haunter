// Prosty efekt pojawiania się elementów przy skrolowaniu
window.addEventListener('scroll', () => {
    const content = document.querySelector('.grid-container');
    const contentPosition = content.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (contentPosition < screenPosition) {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }
});

// Ustawienie początkowe dla animacji JS
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.grid-container');
    content.style.opacity = '0';
    content.style.transform = 'translateY(50px)';
    content.style.transition = 'all 0.8s ease-out';
});
