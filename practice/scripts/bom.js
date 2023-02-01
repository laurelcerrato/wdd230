const ul = document.querySelector("ul");
const input =document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener('click', () =>{
    let inputV = input.value;
    input.value= " ";

    let li = document.createElement("li");
    let button = document.createElement("button");
    li.textContent= inputV;
    button.textContent= "❌";
    li.appendChild(button);
    ul.appendChild(li);
    button.addEventListener('click', () => {
        ul.removeChild(li);
        
    });
    input.focus();
    input.value = "";
});