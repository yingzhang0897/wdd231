import { currentYear } from './date.js';

document.addEventListener('DOMContentLoaded', () => {
    // Non-import hamburger button functionality
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    if (hamButton && navigation) {
        hamButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            hamButton.classList.toggle('open');
        });
    }

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
        const modal = document.getElementById("modal");
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
    //date in footer
    import ('./date.js').then(module => {
        const currentYear = module.currentYear;
        document.getElementById('currentYear').textContent = currentYear;
    });
});
