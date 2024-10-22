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

        if (pickSection) {
            picks.forEach(pick => {
                // Create a container div element for each pick of the week
                const pickContainer = document.createElement('div');
                pickContainer.classList.add('pick-container'); // Adding a class for styling purposes

                // Set the HTML content of the pickContainer
                pickContainer.innerHTML = `
                    <div class="pick-container">
                        <div class="pick-image" style="flex-grow: 1"><img src="${pick.img}" alt="${pick.name}" width="150"></div>
                        <div class="pick-info" style="flex-grow: 2">
                            <h3>${pick.name}</h3>
                            <p>Age: ${pick.age}</p>
                            <p>${pick.description}</p>
                        </div>
                    <div>
                `;

                // Append the pickContainer to the pickSection
                pickSection.appendChild(pickContainer);
            });
        }
    });
    //date in footer
    import ('./date.js').then(module => {
        const currentYear = module.currentYear;
        document.getElementById('currentYear').textContent = currentYear;
    });
});
