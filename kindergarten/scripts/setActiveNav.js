// Define a function to set the active navigation link
export function setActiveNav() {
// Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
 // Get the current page URL
    const currentPage = window.location.pathname.split('/').pop(); // Extract just the filename
// Loop through links and add 'active' class to the matching one
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop(); // Extract just the filename

        if (linkPath === currentPage) {
            link.classList.add('active');
        }
    });
}
