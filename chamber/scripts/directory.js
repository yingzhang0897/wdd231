let cachedMembers = [];

async function fetchMembers() {
    const directoryContainer = document.getElementById('directory-container');
    directoryContainer.innerHTML = '<p>Loading members...</p>';

    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        cachedMembers = await response.json();
        renderMembers();
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        directoryContainer.innerHTML = '<p>Error loading member information. Please try again later.</p>';
    }
}

function renderMembers() {
    const directoryContainer = document.getElementById('directory-container');
    directoryContainer.innerHTML = '';  // Clear any existing content

    cachedMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('business-card');

        let memberContent = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="${member.website}" target="_blank" rel="noopener noreferrer">${member.website}</a></p>
        `;

        if (!directoryContainer.classList.contains('list-view')) {
            memberContent += `<img src="${member.image}" alt="${member.name} logo" width="200">`;
        }

        memberCard.innerHTML = memberContent;
        directoryContainer.appendChild(memberCard);
    });
}

document.getElementById('gridView').addEventListener('click', () => {
    document.getElementById('directory-container').classList.remove('list-view');
    document.getElementById('directory-container').classList.add('grid-view');
    renderMembers();
});

document.getElementById('listView').addEventListener('click', () => {
    document.getElementById('directory-container').classList.remove('grid-view');
    document.getElementById('directory-container').classList.add('list-view');
    renderMembers();
});

// Initial fetch and render
fetchMembers();
