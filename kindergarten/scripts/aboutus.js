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
});
