// Simple hover effects for interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.problem-card, .benefit-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Simple fade-in effect for the page
    document.body.style.opacity = '1';
    
    console.log('Smart Attend page loaded successfully!');
});

// Add smooth transitions on page load
window.addEventListener('load', () => {
    document.body.style.transition = 'opacity 0.3s ease';
});

// Initialize page
document.body.style.opacity = '0';