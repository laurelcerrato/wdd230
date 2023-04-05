//nav js
const hamburger = document.getElementById("toggle-button");
const navMenu = document.getElementById("navi-list");
hamburger.addEventListener("click", () => {
    // hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})
//date js
const datefield = document.querySelector(".date");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
datefield.innerHTML = `<em>${fulldateUK}</em>`;

//last modified js
const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();
document.getElementById("date").textContent = document.lastModified