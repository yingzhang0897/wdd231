// events section
const events = [
    { name: "Business Networking", date: "Oct 30" },
    { name: "Chamber Luncheon", date: "Nov 5" },
];

const eventSection = document.getElementById("events");

events.forEach(event => {
    const eventElement = document.createElement('div');
    eventElement.innerHTML = `<h3>${event.name}</h3><p>${event.date}</p>`;
    eventSection.appendChild(eventElement);
});



// Keynote Tickets Button
function buyTickets() {
    alert('Redirecting to the ticket purchase page...');
}
//current weather
// API URL for the current weather
const currentUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=49.52&lon=-122.69&appid=f098769938b919132231d5a3587a6cbb&units=imperial';

// Function to fetch and display weather data
async function fetchWeatherData() {
    try {
        const response = await fetch(currentUrl);
        const data = await response.json();
        
        // Extract relevant data
        const icon = data.weather[0].icon; // Weather icon code
        const description = data.weather[0].description; // Weather description
        const temp = data.main.temp; // Current temperature
        const tempHigh = data.main.temp_max; // High temperature
        const tempLow = data.main.temp_min; // Low temperature
        const humidity = data.main.humidity; // Humidity percentage
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString(); // Sunrise time
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString(); // Sunset time

        // Construct the weather card HTML
        const weatherHtml = `
            <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">
            <p>Temperature: ${temp} °F</p>
            <p>Description: ${description}</p>
            <p>High: ${tempHigh} °F</p>
            <p>Low: ${tempLow} °F</p>
            <p>Humidity: ${humidity}%</p>
            <p>Sunrise: ${sunrise}</p>
            <p>Sunset: ${sunset}</p>
        `;

        // Insert the weather card into the div with id "currentCard"
        document.getElementById('currentCard').innerHTML = weatherHtml;

    } catch (error) {
        console.error("Error fetching the weather data: ", error);
    }
}

// Call the function to fetch weather data on page load
fetchWeatherData();

//weather forecast
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=49.52&lon=-122.69&appid=f098769938b919132231d5a3587a6cbb&units=imperial';

// Function to fetch and display forecast data
async function fetchForecastData() {
    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();

        // Get today's date
        const today = new Date();
        const dailyTemps = {};

        // Loop through forecast data and store temperatures
        data.list.forEach(item => {
        const date = item.dt_txt.split(' ')[0]; // Extract the date (YYYY-MM-DD)
        const temp = item.main.temp;

        // Initialize or add temperature for the date
        if (!dailyTemps[date]) {
            dailyTemps[date] = [];
        }
        dailyTemps[date].push(temp);
        });

        // Get the next three days
        const dates = Object.keys(dailyTemps).filter(date => new Date(date) > today).slice(0, 3);
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        // Prepare forecast HTML
        let forecastHTML = '';

        dates.forEach((date, index) => {
        const avgTemp = (dailyTemps[date].reduce((sum, temp) => sum + temp, 0) / dailyTemps[date].length).toFixed(1);
        const dayName = index === 0 ? 'Tomorrow' : dayNames[new Date(date).getDay()];
        forecastHTML += `<p><strong>${dayName}:</strong> ${avgTemp}°F</p>`;
        });

        // Update the forecastCard div with the forecast data
        document.getElementById('forecastCard').innerHTML = forecastHTML;

    } catch (error) {
            console.error("Error fetching forecast data:", error);
    }
}
fetchForecastData();




