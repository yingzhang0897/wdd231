// Define a function to set the active navigation link
export function setActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Get the current page URL
    const currentPage = window.location.pathname;

    // Loop through links and add 'active' class to the matching one
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}
