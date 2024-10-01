// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=f098769938b919132231d5a3587a6cbb&units=imperial';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
        const data = await response.json();
        displayResults(data);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}
apiFetch();

function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc); 
    weatherIcon.setAttribute('width', '100');
    weatherIcon.setAttribute('height', '100');
    captionDesc.textContent = `${data.weather[0].description}`;
}
