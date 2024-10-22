import { programLevels, terms } from './program-term.js';


document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    if (hamButton && navigation) {
        hamButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            hamButton.classList.toggle('open');
        });
    }
    // Initialize program and term cards
    displayProgramCard();
    displayTermCard();

    // Function to display program cards
    function displayProgramCard() {
        const programCardContainer = document.getElementById('program-card');

        programLevels.forEach((levelInfo, index) => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'program-card';
            cardDiv.innerHTML = `
                <h3>${levelInfo.name}</h3>
                <button type="button" onclick="showProgramDetails(${index})">Learn More</button>
            `;
            cardDiv.tabIndex = 0;

            programCardContainer.appendChild(cardDiv);

            setTimeout(() => {
                cardDiv.classList.add('fade-in');
            }, index * 200);
        });
    }

    // Function to display term cards
    function displayTermCard() {
        const termCardContainer = document.getElementById('term-card');

        terms.forEach((termInfo, index) => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'term-card';
            cardDiv.innerHTML = `
                <h3>${termInfo.name}</h3>
                <button type="button" onclick="showTermDetails(${index})">Learn More</button>
            `;
            cardDiv.tabIndex = 0;

            termCardContainer.appendChild(cardDiv);

            setTimeout(() => {
                cardDiv.classList.add('fade-in');
            }, index * 200);
        });
    }

    // Function to show program details in the program modal
    window.showProgramDetails = function(index) {
        const modal = document.getElementById('program-modal');
        const modalContent = modal.querySelector('.modal-body');

        const levelInfo = programLevels[index];

        // Update the modal content with program details
        modalContent.innerHTML = `
            <h2>${levelInfo.name}</h2>
            <p><strong>Age Group:</strong> ${levelInfo.ageGroup}</p>
            <p>${levelInfo.description}</p>
        `;

        modal.showModal();
    };

    // Function to show term details in the term modal
    window.showTermDetails = function(index) {
        const modal = document.getElementById('term-modal');
        const modalContent = modal.querySelector('.modal-body');

        const termInfo = terms[index];

        // Update the modal content with term details
        modalContent.innerHTML = `
            <h2>${termInfo.name}</h2>
            <p><strong>Duration:</strong> ${termInfo.duration}</p>
            <p><strong>Tuition:</strong> ${termInfo.tuition}</p>
            <p><strong>Dates:</strong> ${termInfo.date}</p>
        `;

        modal.showModal();
    };

    // Add close functionality to both modals
    document.querySelectorAll('dialog .close').forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            const modal = closeButton.closest('dialog');
            modal.close();
        });
    });

    // Optional: Close modals when clicking outside the modal content
    document.querySelectorAll('dialog').forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.close();
            }
        });
    });
    //for the program checkbox and activity radio
    const programCheckboxes = document.querySelectorAll('#program-checkboxes input[name="program"]');
    const activityRadios = document.getElementById('activity-radios');

    // Listen for changes on program checkboxes
    programCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            if (checkbox.value === 'after-school' && checkbox.checked) {
                activityRadios.style.display = 'block';
            } else if (checkbox.value === 'after-school' && !checkbox.checked) {
                activityRadios.style.display = 'none';
                // Uncheck all radio buttons when hidden
                activityRadios.querySelectorAll('input[type="radio"]').forEach(radio => {
                    radio.checked = false;
                });
            }
        });
    });
    //date in the footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

