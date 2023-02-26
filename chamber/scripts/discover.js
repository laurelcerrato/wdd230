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
date_1 = new Date().toDateString();
date_2 = new Date();

const days = (startDate, endDate) => {
    const difference = endDate.getTime() - startDate.getTime();
    const days = Math.ceil(difference / (1000 * 3600 * 24));
    return days;
}

let lastvisit = localStorage.getItem("last-visit");

if(!lastvisit){
    localStorage.setItem('last-visit', new Date().toDateString());
    document.querySelector(".visits").innerHTML= "Welcome, this is your first visit";
}else{
    const lastamount = days(new Date(lastvisit),new Date());
    document.querySelector(".visits").innerHTML= "Welcome again, Last visited : " +  lastamount + " days ago";
    localStorage.setItem('last-visit', new Date());
}

