// Fetch member data and display it on the page
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();

    const directoryContainer = document.getElementById('directory-container');
    directoryContainer.innerHTML = '';  // Clear any existing content

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('business-card');

        let memberContent = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="${member.website}">${member.website}</a></p>
        `;

        if (!directoryContainer.classList.contains('list-view')) {
            memberContent += `<img src="${member.image}" alt="${member.name} logo" width="200">`;
        }

        memberCard.innerHTML = memberContent;
        directoryContainer.appendChild(memberCard);
    });
}

// Toggle between Grid and List views
document.getElementById('gridView').addEventListener('click', () => {
    document.getElementById('directory-container').classList.remove('list-view');
    document.getElementById('directory-container').classList.add('grid-view');
    fetchMembers();
});

document.getElementById('listView').addEventListener('click', () => {
    document.getElementById('directory-container').classList.remove('grid-view');
    document.getElementById('directory-container').classList.add('list-view');
    fetchMembers();
});

// Call the function to fetch and display members
fetchMembers();
