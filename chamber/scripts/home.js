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
    const companie = data;
    var arrayRandom1 = Math.floor(Math.random() * data.length);
    console.log(arrayRandom1)
    displayCompanies(companie);
}
getCompaniesData();

// Use the key to get the corresponding name from the "names" object
const displayCompanies = (data) => {
  const cards = document.querySelector('.spotlight'); // select the output container element
  data.companies.forEach(company=> {
    // Create elements to add to the div.cards element
    if(company.status == "Gold" || company.status == "Silver"){
    let card = document.createElement('section');
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
    var arrayRandom1 = Math.floor(Math.random() * company.length);
    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(number);
    card.appendChild(email);
    cards.appendChild(card);}
  } )// end of forEach loop
} // end of function expression

