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



// // Keynote Tickets Button
// function buyTickets() {
//     alert('Redirecting to the ticket purchase page...');
// }

