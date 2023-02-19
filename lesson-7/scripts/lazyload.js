
const images = document.querySelectorAll("img[data-src]")
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};
const load = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src")};
        image.className = "none";
    }
if ('IntersectionObserver' in window) {
    const imageOb= new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                load(item.target)
                observer.unobserve(item.target)
            }
        })
        }, imgOptions)
    images.forEach((img) => {
        imageOb.observe(img)
    })
}
else {
    images.forEach((img) => {
        load(img)
    })
}
window.onload = function() { var placeholder = document.querySelector('data-src'), small = placeholder.querySelector('.img-small') // 1: load small image and show it
var img = new Image(); img.src = small.src; img.onload = function () { small.classList.add('loaded'); };
// 2: load large image
var imgLarge = new Image(); imgLarge.src = placeholder.dataset.large; imgLarge.onload = function () { imgLarge.classList.add('loaded'); }; placeholder.appendChild(imgLarge);}
