const url = './json/directory.json';

async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data);  // note that we reference the prophet array of the data object given the structure of the json file
}
getCompaniesData();

const displayCompanies = (data) => {
    const cards = document.querySelector('.companies'); // select the output container element

    data.companies.forEach(company => {
      // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let number = document.createElement('p');
    let email = document.createElement('p');
    let logo = document.createElement('img');
      // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${company.name}`;
    address.textContent = `${company.address}`;
    number.textContent = `${company.number}`;   
    email.textContent = `${company.email}`; 

      // Build the image portrait by setting all the relevant attribute
    logo.setAttribute('src', company.img);
    logo.setAttribute('alt', `Logo of ${company.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '200');
    logo.setAttribute('height', '200');

      // Append the section(card) with the created elements
    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(number);
    card.appendChild(email);
    cards.appendChild(card);
    } )// end of forEach loop
  } // end of function expression
