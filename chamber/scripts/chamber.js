// Mock events data
const events = [
    { name: "Business Networking", date: "Sept 30" },
    { name: "Chamber Luncheon", date: "Oct 5" },
];

const eventSection = document.getElementById("events");

events.forEach(event => {
    const eventElement = document.createElement('div');
    eventElement.innerHTML = `<h3>${event.name}</h3><p>${event.date}</p>`;
    eventSection.appendChild(eventElement);
});

// Weather Data (Mock)
const weatherData = {
    temperature: 75,
    condition: "Sunny"
};

const weatherSection = document.getElementById("weather");
weatherSection.innerHTML = `<p>${weatherData.temperature}°F - ${weatherData.condition}</p>`;

// Keynote Tickets Button
function buyTickets() {
    alert('Redirecting to the ticket purchase page...');
}

// Fetch member data and display it on the page
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();

    const directoryContainer = document.getElementById('directory-container');
    directoryContainer.innerHTML = '';  // Clear any existing content

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('business-card');

        memberCard.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="${member.website}">${member.website}</a></p>
            <img src="${member.image}" alt="${member.name} logo">
        `;

        directoryContainer.appendChild(memberCard);
    });
}

// Toggle between Grid and List views
document.getElementById('gridView').addEventListener('click', () => {
    document.getElementById('directory-container').classList.remove('list-view');
    document.getElementById('directory-container').classList.add('grid-view');
});

document.getElementById('listView').addEventListener('click', () => {
    document.getElementById('directory-container').classList.remove('grid-view');
    document.getElementById('directory-container').classList.add('list-view');
});

// Set current year and last modified date in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Call the function to fetch and display members
fetchMembers();
