export const currentUrl = "https://api.openweathermap.org/data/2.5/weather?lat=45.48&lon=-122.21&appid=f098769938b919132231d5a3587a6cbb&units=imperial";

export async function fetchWeatherData() {
    try {
        const response = await fetch(currentUrl);
        const data = await response.json();
        
        // Extract relevant data
        const icon = data.weather[0].icon; // Weather icon code
        const description = data.weather[0].description; // Weather description
        const temp = data.main.temp; // Current temperature
        const tempHigh = data.main.temp_max; // High temperature
        const tempLow = data.main.temp_min; // Low temperature

        // Construct the weather card HTML
        const weatherHtml = `
            <div class="weather-icon">
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
            </div>       
            <div class="weather-info">   
                <p>Current Weather</p>  
                <p>Temperature: ${temp} °F</p>
                <p>Description: ${description}</p>
                <p>High: ${tempHigh} °F</p>
                <p>Low: ${tempLow} °F</p>
            </div>
        `;

        // Insert the weather card into the div with id "currentCard"
        document.getElementById('current-weather').innerHTML = weatherHtml;

    } catch (error) {
        console.error("Error fetching the weather data: ", error);
    }
}


//weather forecast
export const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=45.48&lon=-122.21&appid=f098769938b919132231d5a3587a6cbb&units=imperial";

export async function displayWeatherForecast() {
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
    const forecastCard = document.getElementById('weather-forecast');
  
    forecastCard.innerHTML = '';
    /// Create a title for the forecast section
    const title = document.createElement('p');
    title.textContent = `Weather Forecast`;

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
    forecastCard.appendChild(title);
    forecastCard.appendChild(ul);

    } catch (error) {
      console.error("Error fetching data:", error);
      const forecastCard = document.getElementById('weather-forecast');
      forecastCard.innerHTML = '<p>Unable to load weather data at the moment. Please try again later.</p>';
    }
}
  

  