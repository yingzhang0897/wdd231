// Define a function to set the active navigation link
// export function setActiveNav() {
//     // Get all navigation links
//     const navLinks = document.querySelectorAll('.nav-link');

//     // Get the current page URL
//     const currentPage = window.location.pathname;

//     // Loop through links and add 'active' class to the matching one
//     navLinks.forEach(link => {
//         if (link.getAttribute('href') === currentPage) {
//             link.classList.add('active');
//         }
//     });
// }
export function setActiveNav() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop(); // Extract just the filename

    console.log('Current Page:', currentPage); // Log current page

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop(); // Extract just the filename
        console.log('Checking link:', linkPath); // Log each link being checked

        if (linkPath === currentPage) {
            link.classList.add('active');
            console.log('Active link set for:', linkPath); // Log when active class is set
        }
    });
}


