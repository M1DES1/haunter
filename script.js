document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.center-wrapper');
    
    // Ustawienie początkowe
    wrapper.style.opacity = '0';
    wrapper.style.transition = 'opacity 1.2s ease-in-out';

    // Start animacji
    setTimeout(() => {
        wrapper.style.opacity = '1';
    }, 100);
});
