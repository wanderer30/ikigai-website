// Dark Mode Toggle Functionality
(function() {
    let isInitialized = false;
    
    // Apply saved theme and update logo
    function applyTheme() {
        const currentTheme = localStorage.getItem('theme') || 'light';
        const isDark = currentTheme === 'dark';
        
        if (isDark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        
        // Update logo - try multiple times for dynamically loaded content
        function updateLogo() {
            const logoImg = document.querySelector('.logo img');
            if (logoImg && logoImg.src) {
                if (isDark) {
                    if (!logoImg.src.includes('black.jpg')) {
                        logoImg.src = logoImg.src.replace('white.jpg', 'black.jpg');
                    }
                } else {
                    if (!logoImg.src.includes('white.jpg')) {
                        logoImg.src = logoImg.src.replace('black.jpg', 'white.jpg');
                    }
                }
            }
        }
        
        updateLogo();
        
        // Also try after a short delay for w3-include-html
        setTimeout(updateLogo, 200);
        setTimeout(updateLogo, 500);
        
        // Update icon
        function updateIcon() {
            const toggleIcon = document.querySelector('#darkModeToggle .toggle-icon');
            if (toggleIcon) {
                toggleIcon.textContent = isDark ? '☀️' : '🌙';
            }
        }
        
        updateIcon();
        setTimeout(updateIcon, 200);
        setTimeout(updateIcon, 500);
    }
    
    // Toggle dark mode
    function toggleDarkMode() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        const newTheme = isDarkMode ? 'dark' : 'light';
        
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        const toggleIcon = document.querySelector('#darkModeToggle .toggle-icon');
        if (toggleIcon) {
            toggleIcon.textContent = isDarkMode ? '☀️' : '🌙';
        }
        
        // Update logo
        const logo = document.querySelector('.logo img');
        if (logo && logo.src) {
            if (isDarkMode) {
                logo.src = logo.src.replace('white.jpg', 'black.jpg');
            } else {
                logo.src = logo.src.replace('black.jpg', 'white.jpg');
            }
        }
    }
    
    // Initialize once
    function init() {
        if (isInitialized) return;
        
        // Use event delegation - single listener on document
        document.addEventListener('click', function(e) {
            if (e.target.closest('#darkModeToggle')) {
                e.preventDefault();
                toggleDarkMode();
            }
        }, { passive: true });
        
        isInitialized = true;
    }
    
    // Apply theme immediately
    applyTheme();
    
    // Initialize after DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            init();
            applyTheme();
        });
    } else {
        init();
        applyTheme();
    }
    
    // Also apply theme after window loads (for w3-include-html)
    window.addEventListener('load', function() {
        init();
        applyTheme();
    });
})();
