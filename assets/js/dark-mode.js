// Dark Mode Toggle Functionality
(function() {
    // Initialize dark mode
    function initDarkMode() {
        const currentTheme = localStorage.getItem('theme') || 'light';
        
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
        
        // Update logo
        const logoImg = document.querySelector('.logo img');
        if (logoImg) {
            if (currentTheme === 'dark') {
                logoImg.src = logoImg.src.replace('white.jpg', 'black.jpg');
            } else {
                logoImg.src = logoImg.src.replace('black.jpg', 'white.jpg');
            }
        }
        
        // Setup toggle button
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            const toggleIcon = darkModeToggle.querySelector('.toggle-icon');
            
            // Update icon
            if (toggleIcon) {
                toggleIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
            }
            
            // Add click event
            darkModeToggle.addEventListener('click', function() {
                const isDarkMode = document.body.classList.toggle('dark-mode');
                const newTheme = isDarkMode ? 'dark' : 'light';
                
                // Save preference
                localStorage.setItem('theme', newTheme);
                
                // Update icon
                if (toggleIcon) {
                    toggleIcon.textContent = isDarkMode ? '☀️' : '🌙';
                }
                
                // Update logo
                const logo = document.querySelector('.logo img');
                if (logo) {
                    if (isDarkMode) {
                        logo.src = logo.src.replace('white.jpg', 'black.jpg');
                    } else {
                        logo.src = logo.src.replace('black.jpg', 'white.jpg');
                    }
                }
            });
        }
    }
    
    // Wait for DOM and w3-include-html to load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(initDarkMode, 300);
        });
    } else {
        setTimeout(initDarkMode, 300);
    }
    
    // Also run after page fully loads (for w3-include-html)
    window.addEventListener('load', function() {
        setTimeout(initDarkMode, 300);
    });
})();
