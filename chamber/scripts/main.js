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
            <div class="weather-icon">
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
            </div>       
            <div class="weather-info">     
                <p>Temperature: ${temp} °F</p>
                <p>Description: ${description}</p>
                <p>High: ${tempHigh} °F</p>
                <p>Low: ${tempLow} °F</p>
                <p>Humidity: ${humidity}%</p>
                <p>Sunrise: ${sunrise}</p>
                <p>Sunset: ${sunset}</p>
            </div>
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
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=49.52&lon=-122.69&appid=f098769938b919132231d5a3587a6cbb&units=imperial";

async function displayWeatherForecast() {
  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Extract the forecast list from the response
    const forecastList = data.list;

    // Get today's date
    const currentDate = new Date().toISOString().split('T')[0];

    // Initialize an empty object to store daily temperatures
    const dailyTemperatures = {};

    // Iterate over the forecast data
    forecastList.forEach(forecast => {
      // Extract the date and temperature
      const forecastTime = new Date(forecast.dt * 1000);
      const forecastDate = forecastTime.toISOString().split('T')[0];
      const temperature = forecast.main.temp;

      // Collect data only for the next three days (excluding today)
      if (forecastDate >= currentDate) {
        if (!dailyTemperatures[forecastDate]) {
          dailyTemperatures[forecastDate] = [];
        }
        dailyTemperatures[forecastDate].push(temperature);
      }
    });

    // Stop if we have data for the next three days
    const dates = Object.keys(dailyTemperatures).slice(0, 3);

    // Get the forecastCard element to display the data
    const forecastCard = document.getElementById('forecastCard');
    forecastCard.innerHTML = '';

    // Create a list to display daily average temperatures
    const ul = document.createElement('ul');

    dates.forEach(date => {
      const temperatures = dailyTemperatures[date];
      const averageTemp = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;

      // Create a list item for each day
      const li = document.createElement('li');
      li.textContent = `${date}: ${averageTemp.toFixed(2)}°F`;

      // Append the list item to the list
      ul.appendChild(li);
    });

    // Append the list to the forecastCard div
    forecastCard.appendChild(ul);

  } catch (error) {
    console.error("Error fetching data:", error);
    const forecastCard = document.getElementById('forecastCard');
    forecastCard.innerHTML = '<p>Unable to load weather data at the moment. Please try again later.</p>';
  }
}

// Call the function to display the weather forecast
displayWeatherForecast();

    
//randomly display three gold or silver level members cards
async function fetchSpotlightMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();

    // Filter members with gold or silver membership level
    const qualifiedMembers = members.filter(member =>
        member.membershipLevel === 'gold' || member.membershipLevel === 'silver'
    );

    // Shuffle and select three members randomly
    const selectedMembers = shuffleArray(qualifiedMembers).slice(0, 3);

    // Display the selected members in the spotlight section
    const spotlightContainer = document.getElementById('spotlight');
    spotlightContainer.innerHTML = ''; 

    selectedMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('spotlight-card');

        memberCard.innerHTML = `
        <h3>${member.name}</h3>  
        <div class="spotlight-logo">
            <img src="${member.image}" alt="${member.name} logo">
        </div>
        <div class="spotlight-info">
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${member.membershipLevel}</p>
        </div>
        `;
        spotlightContainer.appendChild(memberCard);
    });
}

// Utility function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Run the function to load the spotlight members when the page loads
document.addEventListener('DOMContentLoaded', fetchSpotlightMembers);





