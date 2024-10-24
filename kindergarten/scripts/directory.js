// Import the teachers array
import { teachers } from './teachers.js';

document.addEventListener('DOMContentLoaded', () => {
    //hamButton
    import ('./hambutton.js').then(module => {
    const {hamButton} = module;
    hamButton();
    });
    //teachers display
    const itemContainer = document.querySelector('.item-container');
    const modal = document.getElementById('teacher-modal');
    const modalBody = modal.querySelector('.modal-body');
    const closeButton = modal.querySelector('.close');

    // Function to render teacher images in the container
    function displayTeachers() {
        teachers.forEach(teacher => {
            // Create an image element for each teacher
            const imgElement = document.createElement('img');
            imgElement.src = teacher.img;
            imgElement.alt = teacher.name;
            imgElement.classList.add('teacher-image');
            
            // Add event listener to open modal on image click
            imgElement.addEventListener('click', () => {
                openModal(teacher);
            });

            // Append the image to the item container
            itemContainer.appendChild(imgElement);
        });
    }

    // Function to open the modal with full teacher information
    function openModal(teacher) {
        // Set the modal content with the teacher's full information
        modalBody.innerHTML = `
            <h2>${teacher.name}</h2>
            <p><strong>Age:</strong> ${teacher.age}</p>
            <p><strong>Expertise:</strong> ${teacher.expertise}</p>
            <p><strong>Personality Traits:</strong> ${teacher.personalityTraits}</p>
        `;

        // Show the modal
        modal.showModal();
    }

    // Add click event to close button
    closeButton.addEventListener('click', () => {
        modal.close();
    });

    // Add event listener to close modal when clicking outside the modal body
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });

    // Display teachers on page load
    displayTeachers();
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

