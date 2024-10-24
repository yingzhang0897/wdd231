document.addEventListener('DOMContentLoaded', () => {
    //hamButton
    import ('./hambutton.js').then(module => {
        const {hamButton} = module;
        hamButton();
    });
    //wayfinding in nav
    import ('./setActiveNav.js').then(module => {
        const {setActiveNav} = module;
        setActiveNav();
    })
    // Events section
    import('./events.js').then(module => {
        const events = module.events;
        const eventSection = document.getElementById("events");

        if (eventSection) {
            events.forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.innerHTML = `<p>${event.name}</p><span>${event.date}</span>`;
                eventSection.appendChild(eventElement);
            });
        }
    });

    // Weather section
    import('./weather.js').then(module => {
        const { fetchWeatherData, displayWeatherForecast } = module;
        fetchWeatherData();
        displayWeatherForecast();
    });

    // Pick of the week
    import('./pick-of-week.js').then(module => {
        const picks = module.pickOfTheWeek;
        const pickSection = document.getElementById("pick-of-the-week");
    
        // Get the <dialog> element and the components within it
        const modal = document.getElementById("pick-modal");
        const modalBody = document.querySelector(".modal-body");
        const closeModal = document.querySelector(".close");
    
        if (pickSection) {
            picks.forEach(pick => {
                // Create an image element for each pick of the week
                const imgElement = document.createElement('img');
                imgElement.src = pick.img;
                imgElement.alt = pick.name;
                imgElement.width = 150;
                imgElement.classList.add('pick-image'); // Add class for styling
    
                // Add click event to open the dialog and show details
                imgElement.addEventListener('click', () => {
                    modalBody.innerHTML = `
                        <h3>${pick.name}</h3>
                        <p>Age: ${pick.age}</p>
                        <p>${pick.description}</p>
                    `;
                    modal.showModal(); // Opens the <dialog>
                });
    
                // Append the image element to the pickSection
                pickSection.appendChild(imgElement);
            });
    
            // Close the dialog when the user clicks the close button
            closeModal.addEventListener('click', () => {
                modal.close(); // Closes the <dialog>
            });
    
            // Optional: Close the dialog when clicking outside the modal body
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.close();
                }
            });
        }
    });
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
