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

    //pick of the week
    import ('./pick-of-week.js').then(module => {
        const picks = module. pickOfTheWeek;
        const pickSection = document.getElementById("pick-of-the-week");
        if (pickSection) {
            picks.forEach(pick => {
                const pickElement = document.createElement('div');
                pickElement.innerHTML = `
                    <img src="${pick.img}" alt="${pick.name}" width="150">
                    <h3>${pick.name}</h3>
                    <p>Age: ${pick.age}</p>
                    <p>$ {pick.description}</P>
                `;
                pickSection.appendChild(pickElement);
            });
        }
    });
});