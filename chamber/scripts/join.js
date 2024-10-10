// Set the current date and time in ISO format as the value for the hidden input
document.getElementById('timestamp').value = new Date().toISOString();

const membershipLevels = [
    {
        level: 'Non-Profit Organization Level',
        cost: '0 dollars per year',
        benefits: [
            'Access to community events',
            'Basic training session',
            'No advertising',
            'No events discount'
        ]
    },
    {
        level: 'Bronze Membership Level',
        cost: '50 dollars per year',
        benefits: [
            'Access to community and special events',
            'Basic and intermediate training sessions',
            'Limited advertising',
            '5% event discount'
        ]
    },
    {
        level: 'Silver Membership Level',
        cost: '100 dollars per year',
        benefits: [
            'All Bronze benefits',
            'Priority advertising spots',
            'Access to premium training sessions',
            '10% event discount'
        ]
    },
    {
        level: 'Gold Membership Level',
        cost: '200 dollars per year',
        benefits: [
            'All Silver benefits',
            'Spotlight advertising on homepage',
            'VIP access to all events',
            '20% event discount',
            'Free admission to select events'
        ]
    }
];

// Function to display membership cards
function displayMembershipCard() {
    // Get the membership-card container
    const membershipCardContainer = document.getElementById('membership-card');

    // Loop through the membership levels and create a card for each
    membershipLevels.forEach((levelInfo, index) => {
        // Create a div for the membership card
        const cardDiv = document.createElement('div');
        cardDiv.className = 'membership-card';
        cardDiv.innerHTML = `
            <h3>${levelInfo.level}</h3>
            <button onclick="showStuff(${index})">Learn More</button>
        `;
        cardDiv.tabIndex = 0; // Make the card focusable
    
        membershipCardContainer.appendChild(cardDiv);

        setTimeout(() => {
            cardDiv.classList.add('fade-in');
        }, index * 200); // 200ms delay between cards for staggered animation
    });
}

// Function to show membership details in a modal
function showStuff(index) {
    // Get the modal and content elements
    const modal = document.getElementById('membership-modal');
    const modalContent = document.getElementById('modal-content');
    
    // Get the selected membership level information
    const levelInfo = membershipLevels[index];

    // Generate the modal content
    const benefitsList = levelInfo.benefits.map(benefit => `<li>${benefit}</li>`).join('');
    modalContent.innerHTML = `
        <h2>${levelInfo.level}</h2>
        <p><strong>Cost:</strong> ${levelInfo.cost}</p>
        <h3>Benefits:</h3>
        <ul>${benefitsList}</ul>
    `;

    // Display the modal
    modal.showModal();
    modal.focus(); // Focus the modal for accessibility
}
function closeModal() {
    const modal = document.getElementById('membership-modal');
    modal.close();
}

// Call the function to display the membership cards
displayMembershipCard();

