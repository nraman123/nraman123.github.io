/* ================================
   Raman Records - Main JavaScript
   ================================ */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Raman Records site loaded');

    // Popup Modal Logic
    const popupTriggers = document.querySelectorAll('[data-popup]');
    const popupOverlays = document.querySelectorAll('.popup-overlay');

    popupTriggers.forEach(trigger => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            const popupId = trigger.getAttribute('data-popup');
            const popup = document.getElementById(popupId);
            if (popup) {
                popup.classList.add('active');
                popup.setAttribute('aria-hidden', 'false');
            }
        });
    });

    popupOverlays.forEach(overlay => {
        const closeBtn = overlay.querySelector('.popup-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                overlay.classList.remove('active');
                overlay.setAttribute('aria-hidden', 'true');
            });
        }

        // Close when clicking the darkened background outside the popup box
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                overlay.classList.remove('active');
                overlay.setAttribute('aria-hidden', 'true');
            }
        });
    });

    // Close active popup on Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            popupOverlays.forEach(overlay => {
                if (overlay.classList.contains('active')) {
                    overlay.classList.remove('active');
                    overlay.setAttribute('aria-hidden', 'true');
                }
            });
        }
    });
});
