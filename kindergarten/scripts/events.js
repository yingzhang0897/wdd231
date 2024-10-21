const events = [
    { name: "Trick or Treat🎃 不给糖就捣蛋", date: "Oct 31" },
    { name: "Thanksgiving card 感恩节卡片", date: "Nov 28" },
    { name: "Christmas choir 圣诞节唱诗班", date: "Dec 24"},
    { name: "Chinese New Year 中国春节", date: "Jan 29"}
];

const eventSection = document.getElementById("events");

events.forEach(event => {
    const eventElement = document.createElement('div');
    eventElement.innerHTML = `<h3>${event.name}</h3><p>${event.date}</p>`;
    eventSection.appendChild(eventElement);
});
