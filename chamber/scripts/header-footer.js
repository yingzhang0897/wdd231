// This sets today's date in the header
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format( new Date() );
document.querySelector(".header-today h3").textContent = fulldate;

// Toggle the menu open or closed
function toggleMenu(){
    document.querySelector("nav ul").classList.toggle("menu-active");
    document.querySelector("#hamburger-x").classList.toggle("menu-active");
    document.querySelector("#hamburger-equiv").classList.toggle("menu-active");
}

// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});


let admin_flag = localStorage.getItem("admin_flag")
if (admin_flag != null && admin_flag.toUpperCase() == 'ENABLED'){
    document.querySelector('#admin-menu').style.display = 'list-item'
}


// Set current year and last modified date in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
const lastModifiedDate = `${lastModified.getFullYear()}-${(lastModified.getMonth() + 1).toString().padStart(2, '0')}-${lastModified.getDate().toString().padStart(2, '0')} ${lastModified.getHours().toString().padStart(2, '0')}:${lastModified.getMinutes().toString().padStart(2, '0')}:${lastModified.getSeconds().toString().padStart(2, '0')}`;
document.getElementById('lastModified').textContent += lastModifiedDate;

