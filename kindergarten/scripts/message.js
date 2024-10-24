// Define a function to handle the visit message
export function displayVisitMessage() {
    // Get the current date in milliseconds
    const currentDate = Date.now();
    
    // Retrieve the last visit date from localStorage
    const lastVisit = localStorage.getItem("lastVisit");
    
    const messageArea = document.createElement("section");
    messageArea.classList.add("visit-message");
    const sidebar = document.querySelector(".sidebar");
    
    // Check if the user has visited before
    if (lastVisit) {
        const lastVisitDate = parseInt(lastVisit, 10);
        const timeDifference = currentDate - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
        if (timeDifference < 1000 * 60 * 60 * 24) {
            messageArea.textContent = "Back so soon! Awesome!";
        } else {
            messageArea.textContent = `You last visited ${daysDifference} day${daysDifference === 1 ? "" : "s"} ago.`;
        }
    } else {
        messageArea.textContent = "Welcome! Let us know if you have any questions.";
    }
    
    // Store the current date as the last visit date
    localStorage.setItem("lastVisit", currentDate);
    
    // Append the message area to the sidebar
    if (sidebar) {
        sidebar.appendChild(messageArea);
    }
}
