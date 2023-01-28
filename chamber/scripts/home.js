const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();
document.getElementById("date").textContent = document.lastModified
// nav js
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x =document.getElementById("hamburgerBtn");
x.onclick= toggleMenu;

const datefield = document.querySelector(".date");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
datefield.innerHTML = `<em>${fulldateUK}</em>`;
