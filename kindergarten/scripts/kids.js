export const kids = [
    {
        name: "Isaac",
        age: 3,
        program: "preschool",
        img: "images/kids/Isaac-3.webp"
    },
    {
        name: "Isaac",
        age: 4,
        program: "preschool",
        img: "images/kids/Isaac-4.webp"
    },
    {
        name: "Isaac",
        age: 5,
        program: "kindergarten",
        img: "images/kids/Isaac-5.webp"
    },
    {
        name: "Isaac",
        age: 6,
        program: "kindergarten",
        img: "images/kids/Isaac-6.webp"
    },
    {
        name: "Rhelina",
        age: 3,
        program: "preschool",
        img: "images/kids/Rhelina-3.webp"
    },
    {
        name: "Rhelina",
        age: 4,
        program: "preschool",
        img: "images/kids/Rhelina-4.webp"
    },
    {
        name: "Rhelina",
        age: 5,
        program: "kindergarten",
        img: "images/kids/Rhelina-5.webp"
    },
    {
        name: "Rhelina",
        age: 6,
        program: "kindergarten",
        img: "images/kids/Rhelina-6.webp"
    },
    {
        name: "Luke",
        age: 3,
        program: "preschool",
        img: "images/kids/Luke-3.webp"
    },
    {
        name: "Luke",
        age: 4,
        program: "preschool",
        img: "images/kids/Luke-4.webp"
    },
    {
        name: "Luke",
        age: 5,
        program: "kindergarten",
        img: "images/kids/Luke-5.webp"
    },
    {
        name: "Luke",
        age: 6,
        program: "kindergarten",
        img: "images/kids/Luke-6.webp"
    },
    {
        name: "Luke",
        age: 7,
        program: "after-school activity",
        img: "images/kids/Luke-7.webp"
    }
];

export function createKidCards(filteredKids = kids) {
    // Get the container element
    const container = document.querySelector('.item-container');
  
    // Clear any existing content in the container
    container.innerHTML = '';
  
    // Iterate over the kids array
    filteredKids.forEach(kid => {
      // Create a card element for each kid
      const card = document.createElement('div');
      card.classList.add('kid-card');
  
      // Create an image element
      const img = document.createElement('img');
      img.src = kid.img;
      img.alt = `${kid.name}, Age ${kid.age}`;
      img.height = 300;
      img.loading = "lazy";
  
      // Create a name element
      const name = document.createElement('h3');
      name.textContent = kid.name;
  
      // Create an age element
      const age = document.createElement('p');
      age.textContent = `Age: ${kid.age}`;
  
      // Append image, name, and age to the card
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(age);
  
      // Append the card to the container
      container.appendChild(card);
    });
}

export function searchKidByName() {
    //Check if the search container already exists
    if (document.querySelector('.search-container')) return;
    // Create a container for the search input and icon
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');
  
    // Create a search input element
    const searchInput = document.createElement('input');
    searchInput.id = 'searchKidInput';
    searchInput.type = 'text';
    searchInput.placeholder = 'Search for a kid by name...';
  
    // Create a search icon element
    const searchIcon = document.createElement('span');
    searchIcon.classList.add('search-icon');
    searchIcon.innerHTML = '&#128269;'; // Unicode for search icon (🔍)
  
    // Append the search icon and input to the container
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchIcon);
  
    // Insert the search container before the container element
    const container = document.querySelector('.item-container');
    container.parentNode.insertBefore(searchContainer, container);
  
    searchInput.addEventListener('input', () => {
      const searchValue = searchInput.value.toLowerCase();
  
      // Filter kids based on the search input
      const filteredKids = kids.filter(kid => kid.name.toLowerCase().includes(searchValue));
  
      // Display the filtered kids
      createKidCards(filteredKids);
    });
}

export function filterByProgram() {
    // Create a container for the program filter dropdown
    const filterContainer = document.createElement('div');
    filterContainer.classList.add('filter-container');

    // Create a label for the filter
    const filterLabel = document.createElement('label');
    filterLabel.for = 'programFilter';
    filterLabel.textContent = 'Filter by Program: ';

    // Create a select element for filtering
    const programFilter = document.createElement('select');
    programFilter.id = 'programFilter';

    // Create options for the select element
    const programs = ['All', 'preschool', 'kindergarten', 'after-school activity'];
    programs.forEach(program => {
        const option = document.createElement('option');
        option.value = program;
        option.textContent = program;
        programFilter.appendChild(option);
    });

    // Append the label and select to the filter container
    filterContainer.appendChild(filterLabel);
    filterContainer.appendChild(programFilter);

    // Insert the filter container before the container element
    const container = document.querySelector('.item-container');
    container.parentNode.insertBefore(filterContainer, container);

    // Add event listener to the select element
    programFilter.addEventListener('change', () => {
        const selectedProgram = programFilter.value;

        // Filter kids based on the selected program
        const filteredKids = selectedProgram === 'All' ? kids : kids.filter(kid => kid.program === selectedProgram);

        // Display the filtered kids
        createKidCards(filteredKids);
    });
}
// call these functions on page load
document.addEventListener('DOMContentLoaded', () => {
    createKidCards();
    searchKidByName();
    filterByProgram();
});