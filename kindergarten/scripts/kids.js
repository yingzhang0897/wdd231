export const kids = [
    {
        name: "Isaac",
        age: 3,
        img: "images/kids/Isaac-3.webp"
    },
    {
        name: "Isaac",
        age: 4,
        img: "images/kids/Isaac-4.webp"
    },
    {
        name: "Isaac",
        age: 5,
        img: "images/kids/Isaac-5.webp"
    },
    {
        name: "Isaac",
        age: 6,
        img: "images/kids/Isaac-6.webp"
    },
    {
        name: "Rhelina",
        age: 3,
        img: "images/kids/Rhelina-3.webp"
    },
    {
        name: "Rhelina",
        age: 4,
        img: "images/kids/Rhelina-4.webp"
    },
    {
        name: "Rhelina",
        age: 5,
        img: "images/kids/Rhelina-5.webp"
    },
    {
        name: "Rhelina",
        age: 6,
        img: "images/kids/Rhelina-6.webp"
    },
    {
        name: "Luke",
        age: 3,
        img: "images/kids/Luke-3.webp"
    },
    {
        name: "Luke",
        age: 4,
        img: "images/kids/Luke-4.webp"
    },
    {
        name: "Luke",
        age: 5,
        img: "images/kids/Luke-5.webp"
    },
    {
        name: "Luke",
        age: 6,
        img: "images/kids/Luke-6.webp"
    },
    {
        name: "Luke",
        age: 7,
        img: "images/kids/Luke-7.webp"
    }
];
export function createKidCards() {
    // Get the container element
    const container = document.querySelector('.item-container');
  
    // Clear any existing content in the container
    container.innerHTML = '';
  
    // Iterate over the kids array
    kids.forEach(kid => {
      // Create a card element for each kid
      const card = document.createElement('div');
      card.classList.add('kid-card');
  
      // Create an image element
      const img = document.createElement('img');
      img.src = kid.img;
      img.alt = `${kid.name}, Age ${kid.age}`;
      img.height = 300;
  
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
  
      // Clear the existing container content
      container.innerHTML = '';
  
      // Display the filtered kids
      filteredKids.forEach(kid => {
        const card = document.createElement('div');
        card.classList.add('kid-card');
  
        const img = document.createElement('img');
        img.src = kid.img;
        img.alt = `${kid.name}, Age ${kid.age}`;
        img.height = 300;
  
        const name = document.createElement('h3');
        name.textContent = kid.name;
  
        const age = document.createElement('p');
        age.textContent = `Age: ${kid.age}`;
  
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(age);
  
        container.appendChild(card);
      });
    });
}
  
  
    