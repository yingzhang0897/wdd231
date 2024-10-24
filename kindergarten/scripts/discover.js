// Import the kids array (if using a module system)
import { kids, createKidCards, searchKidByName } from './kids.js';
import { hamButton } from './hambutton.js';
import { displayVisitMessage } from './message.js';

// Function to create and display cards for each kid
// Call the functions to set up the page
document.addEventListener('DOMContentLoaded', () => {
  hamButton(); // Initialize the hamburger button
  displayVisitMessage(); // Call the function to display visit message
  createKidCards(); // Display kids cards
  searchKidByName();//search for a kid by name
  document.getElementById('currentYear').textContent = new Date().getFullYear(); // Display year in footer
});
