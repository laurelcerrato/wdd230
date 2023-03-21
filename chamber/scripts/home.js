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
// //spotlight section
// const url = './json/directory.json';

// async function getCompaniesData() {
//     const response = await fetch(url);
//     const data = await response.json();
//     getrandomcard(data.companies);
// }
// getCompaniesData();


// async function getrandomcard(data){
//     let cards = [];
//     var arrayRandom1 = Math.floor(Math.random() * data.length);
//     var arrayRandom2 = Math.floor(Math.random() * data.length);
//     var arrayRandom3 = Math.floor(Math.random() * data.length);

//     const spotlight1 = document.querySelector(".spotlight1");
//     const spotlight2 = document.querySelector(".spotlight2");
//     const spotlight3 = document.querySelector(".spotlight3");


//     data.forEach((company) => {
//         if(company.status == "Gold" || company.status == "Silver")
//         {
//             cards.push(company);
//         }
//     })}
//     let chosenSpotlight = cards.pop();
//     var card3 = document.createElement('section');

//     let h2 = document.createElement('h2');
//     let address = document.createElement('p');
//     let number = document.createElement('p');
//     let email = document.createElement('p');
//     let logo = document.createElement('img');
    
//       // Build the h2 content out to show the prophet's full name - finish the template string
//     h2.textContent = `${chosenSpotlight.name}`;
//     address.textContent = `Address: ${chosenSpotlight.address}`;
//     number.textContent = `Phone Number: ${chosenSpotlight.number}`;   
//     email.textContent = `Email: ${chosenSpotlight.email}`; 

//       // Build the image portrait by setting all the relevant attribute
//     logo.setAttribute('src', chosenSpotlight.img);
//     logo.setAttribute('alt', `Logo of ${chosenSpotlight.name}`);
//     logo.setAttribute('loading', 'lazy');
//     logo.setAttribute('width', '200');
//     logo.setAttribute('height', '200');

//       // Append the section(card) with the created elements
//     card3.appendChild(logo);
//     card3.appendChild(h2);
//     card3.appendChild(address);
//     card3.appendChild(number);
//     card3.appendChild(email);

//     spotlight1.appendChild(card3);

// const displayCompanies = (data) => {
//    // select the output container element
//     const spot1 = document.querySelector(".spotlight1");
//     const spot2 = document.querySelector(".spotlight2");
//     const spot3 = document.querySelector(".spotlight3");

//     const cards = [];
//     var arrayRandom1 = Math.floor(Math.random() * data.length);
//     var arrayRandom2 = Math.floor(Math.random() * data.length);
//     var arrayRandom3 = Math.floor(Math.random() * data.length);
//     cards.push(data[arrayRandom1]);
//     cards.push(data[arrayRandom2]);
//     cards.push(data[arrayRandom3]);

//     cards.forEach(company=> {
//     // Create elements to add to the div.cards element
//     if(company.status == "Gold" || company.status == "Silver"){
//     var card1 = document.createElement('section');
//     var card2 = document.createElement('section');
//     var card3 = document.createElement('section');

//     let h2 = document.createElement('h2');
//     let address = document.createElement('p');
//     let number = document.createElement('p');
//     let email = document.createElement('p');
//     let logo = document.createElement('img');
    
//       // Build the h2 content out to show the prophet's full name - finish the template string
//     h2.textContent = `${company.name}`;
//     address.textContent = `Address: ${company.address}`;
//     number.textContent = `Phone Number: ${company.number}`;   
//     email.textContent = `Email: ${company.email}`; 

//       // Build the image portrait by setting all the relevant attribute
//     logo.setAttribute('src', company.img);
//     logo.setAttribute('alt', `Logo of ${company.name}`);
//     logo.setAttribute('loading', 'lazy');
//     logo.setAttribute('width', '200');
//     logo.setAttribute('height', '200');

//       // Append the section(card) with the created elements
//     card1.appendChild(logo);
//     card1.appendChild(h2);
//     card1.appendChild(address);
//     card1.appendChild(number);
//     card1.appendChild(email);
//     card1.classList.add("spotlight1");

//     card3.appendChild(logo);
//     card3.appendChild(h2);
//     card3.appendChild(address);
//     card3.appendChild(number);
//     card3.appendChild(email);
//     card3.classList.add("spotlight3");

//     card2.appendChild(logo);
//     card2.appendChild(h2);
//     card2.appendChild(address);
//     card2.appendChild(number);
//     card2.appendChild(email);
//     card2.classList.add("spotlight2");

//     spot.appendChild(card1);
//     spot.appendChild(card2);
//     spot.appendChild(card2);
//     return card1
    
// }
// })
//     // end of forEach loop
// } // end of function expression

//spotlight section
const url = './json/directory.json';

async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json();
    displaySpotlights(data.companies);
}

async function displaySpotlights(businesses) {
    const spotlight1 = document.querySelector(".spotlight1");
    const spotlight2 = document.querySelector(".spotlight2");
    const spotlight3 = document.querySelector(".spotlight3");
    const cards = [];
    var arrayRandom1 = Math.floor(Math.random() * cards.length);
    var arrayRandom2 = Math.floor(Math.random() * cards.length);
    var arrayRandom3 = Math.floor(Math.random() * cards.length);

    businesses.forEach((business) => {
        if (business.status == "Gold" || business.status == "Silver")
        {
            cards.push(business);
        }
    })
    console.log(cards)
    
    //Spotlight 1
    let company1 = cards[Math.floor(Math.random() * cards.length) ];
    console.log(company1);
    const card1 = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let number = document.createElement('p');
    let email = document.createElement('p');
    let logo = document.createElement('img');
    
      // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${company1.name}`;
    address.textContent = `Address: ${company1.address}`;
    number.textContent = `Phone Number: ${company1.number}`;   
    email.textContent = `Email: ${company1.email}`; 

      // Build the image portrait by setting all the relevant attribute
    logo.setAttribute('src', company1.img);
    logo.setAttribute('alt', `Logo of ${company1.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '200');
    logo.setAttribute('height', '200');

      // Append the section(card) with the created elements
    card1.appendChild(logo);
    card1.appendChild(h2);
    card1.appendChild(address);
    card1.appendChild(number);
    card1.appendChild(email);

    spotlight1.appendChild(card1);


   //Spotlight 2
    let company2 = cards[arrayRandom2];
    let card2 = document.createElement('section');
    h2 = document.createElement('h2');
    address = document.createElement('p');
    number = document.createElement('p');
    email = document.createElement('p');
    logo = document.createElement('img');
    
        // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${company2.name}`;
    address.textContent = `Address: ${company2.address}`;
    number.textContent = `Phone Number: ${company2.number}`;   
    email.textContent = `Email: ${company2.email}`; 

        // Build the image portrait by setting all the relevant attribute
    logo.setAttribute('src', company2.img);
    logo.setAttribute('alt', `Logo of ${company2.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '200');
    logo.setAttribute('height', '200');

     // Append the section(card) with the created elements
    card2.appendChild(logo);
    card2.appendChild(h2);
    card2.appendChild(address);
    card2.appendChild(number);
    card2.appendChild(email);

    spotlight2.appendChild(card2);

    //Spotlight 1
    let company3 = cards[arrayRandom3];
    let card3 = document.createElement('section');
    h2 = document.createElement('h2');
    address = document.createElement('p');
    number = document.createElement('p');
    email = document.createElement('p');
    logo = document.createElement('img');
    
      // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${company3.name}`;
    address.textContent = `Address: ${company3.address}`;
    number.textContent = `Phone Number: ${company3.number}`;   
    email.textContent = `Email: ${company3.email}`; 

      // Build the image portrait by setting all the relevant attribute
    logo.setAttribute('src', company3.img);
    logo.setAttribute('alt', `Logo of ${company3.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '200');
    logo.setAttribute('height', '200');

      // Append the section(card) with the created elements
    card3.appendChild(logo);
    card3.appendChild(h2);
    card3.appendChild(address);
    card3.appendChild(number);
    card3.appendChild(email);

    spotlight3.appendChild(card3);
}
getCompaniesData();


