// Dark Mode Toggle Functionality
(function() {
    let isInitialized = false;
    
    // Initialize dark mode
    function initDarkMode() {
        if (isInitialized) return;
        
        const currentTheme = localStorage.getItem('theme') || 'light';
        
        // Apply theme immediately
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
        
        // Setup toggle button - use event delegation
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            const toggleIcon = darkModeToggle.querySelector('.toggle-icon');
            
            // Update icon
            if (toggleIcon) {
                toggleIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
            }
            
            // Remove any existing listeners and add new one
            const newToggle = darkModeToggle.cloneNode(true);
            darkModeToggle.parentNode.replaceChild(newToggle, darkModeToggle);
            
            // Add click event to new button
            newToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const isDarkMode = document.body.classList.toggle('dark-mode');
                const newTheme = isDarkMode ? 'dark' : 'light';
                
                // Save preference
                localStorage.setItem('theme', newTheme);
                
                // Update icon
                const icon = newToggle.querySelector('.toggle-icon');
                if (icon) {
                    icon.textContent = isDarkMode ? '☀️' : '🌙';
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
            
            isInitialized = true;
        }
    }
    
    // Use event delegation on document for the toggle button
    document.addEventListener('click', function(e) {
        if (e.target.closest('#darkModeToggle')) {
            const toggle = e.target.closest('#darkModeToggle');
            const isDarkMode = document.body.classList.toggle('dark-mode');
            const newTheme = isDarkMode ? 'dark' : 'light';
            
            // Save preference
            localStorage.setItem('theme', newTheme);
            
            // Update icon
            const icon = toggle.querySelector('.toggle-icon');
            if (icon) {
                icon.textContent = isDarkMode ? '☀️' : '🌙';
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
        }
    });
    
    // Try to initialize multiple times to catch when header loads
    function tryInit() {
        initDarkMode();
        if (!isInitialized) {
            setTimeout(tryInit, 100);
        }
    }
    
    // Start trying to initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            tryInit();
        });
    } else {
        tryInit();
    }
    
    // Also try after window loads
    window.addEventListener('load', function() {
        setTimeout(tryInit, 200);
    });
    
    // Use MutationObserver to watch for when header is added
    const observer = new MutationObserver(function(mutations) {
        if (document.getElementById('darkModeToggle') && !isInitialized) {
            initDarkMode();
        }
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
