let imagesToLoad = document.querySelectorAll("[data-src]");
const loadImage = (img) => {
    const src = img.getAttribute("data-src");
    img.src = src;
    img.onload = () => {
    img.removeAttribute("data-src");
    };
}
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};
const imgObserver = new IntersectionObserver((entries,imgObserver) => {
    entries.forEach(entry =>{
        if (!entry.isIntersecting){
            return;
        }else{
            loadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);
imagesToLoad.forEach(image => {
    imgObserver.observe(image);
});
//visits
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("visits-ls"));
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}
numVisits++;
localStorage.setItem("visits-ls", numVisits);
