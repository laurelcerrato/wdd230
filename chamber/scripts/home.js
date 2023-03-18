//last modified js
const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();
document.getElementById("date").textContent = document.lastModified

//date js
const datefield = document.querySelector(".date");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
datefield.innerHTML = `<em>${fulldateUK}</em>`;
//nav js
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#primaryNav");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})
//Banner js
const banner = document.querySelector(".banner");
//using the now variable that holds the current date I use getDay() to get the day of the week
const dayOfW = now.getDay();
if (dayOfW == 1 || dayOfW == 2){
    banner.style.display = "block";
}else{
    banner.style.display= "none";
}
document.querySelector(".banner__close").addEventListener("click", function () {
    this.closest(".banner").style.display = "none";
});
//spotlight section
const url = './json/directory.json';

async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json();
    const companie = data.companies[Math.floor(Math.random() * data.length)];
    displayCompanies(companie);  // note that we reference the prophet array of the data object given the structure of the json file
}
getCompaniesData();

const displayCompanies = (data) => {
    const randKey = keys[randIndex]

// Use the key to get the corresponding name from the "names" object
const name = names[randKey]
    const card1 = document.querySelector('.spotlight1');
    const card2 = document.querySelector('.spotlight2');
    const card3 = document.querySelector('.spotlight3');
     // select the output container element
     // select the output container element
    data.forEach(company => {
      // Create elements to add to the div.cards element
    card1 = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let number = document.createElement('p');
    let email = document.createElement('p');
    let logo = document.createElement('img');
      // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${company.name}`;
    address.textContent = `Address: ${company.address}`;
    number.textContent = `Phone Number: ${company.number}`;   
    email.textContent = `Email: ${company.email}`; 

      // Build the image portrait by setting all the relevant attribute
    logo.setAttribute('src', company.img);
    logo.setAttribute('alt', `Logo of ${company.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '200');
    logo.setAttribute('height', '200');

      // Append the section(card) with the created elements
    card1.appendChild(logo);
    card1.appendChild(h2);
    card1.appendChild(address);
    card1.appendChild(number);
    card1.appendChild(email);
    cards.appendChild(card1);
    } )// end of forEach loop
  } // end of function expression

