const fruitsurl = "https://brotherblazzard.github.io/canvas-content/fruit.json";
async function getfruitsData() {
    const response = await fetch(fruitsurl);
    const data = await response.json();
    displayOptions(data);
    //getNutrition(data);
}
getfruitsData();


const formElement = document.forms[0];

const fruit1 = document.querySelector(".fruits1");
const fruit2 = document.querySelector(".fruits2");
const fruit3 = document.querySelector(".fruits3");
//<option value="english">English</option>
const displayOptions = (fruits) =>{
    console.log(fruits[0].nutritions);

    for(let i = 0; i < fruits.length; i++){ 
        console.log(fruits[i]);
        let option = document.createElement('option');
        option.textContent = fruits[i].name;
        option.setAttribute("value",fruits[i].name);

        let option1car= option.setAttribute("carbohydrates",fruits[i].nutritions.carbohydrates);
        let option1cal = option.setAttribute("calories",fruits[i].nutritions.calories);
        let option1fat = option.setAttribute("fat",fruits[i].nutritions.fat);
        let option1pro = option.setAttribute("pro",fruits[i].nutritions.protein);
        option.setAttribute("sugar",fruits[i].nutritions.sugar);

        let option2 = document.createElement('option');
        option2.textContent = fruits[i].name;
        option2.setAttribute("value",fruits[i].name);

        let option2car= option2.setAttribute("carbohydrates",fruits[i].nutritions.carbohydrates);
        let option2cal = option2.setAttribute("calories",fruits[i].nutritions.calories);
        let option2fat = option2.setAttribute("fat",fruits[i].nutritions.fat);
        let option2pro = option2.setAttribute("pro",fruits[i].nutritions.protein);
        option2.setAttribute("sugar",fruits[i].nutritions.sugar);

        let option3 = document.createElement('option');
        option3.textContent = fruits[i].name;
        option3.setAttribute("value",fruits[i].name);
        let option3car= option3.setAttribute("carbohydrates",fruits[i].nutritions.carbohydrates);
        let option3cal = option3.setAttribute("calories",fruits[i].nutritions.calories);
        let option3fat = option3.setAttribute("fat",fruits[i].nutritions.fat);
        let option3pro = option3.setAttribute("pro",fruits[i].nutritions.protein);
        option3.setAttribute("sugar",fruits[i].nutritions.sugar);
        fruit1.appendChild(option);
        fruit2.appendChild(option2);
        fruit3.appendChild(option3);
        }

//localstorage
const drinks = document.querySelector(".drinks");
let amountofdrinks = Number(window.localStorage.getItem("amount"));
formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    amountofdrinks++;
    localStorage.setItem("amount", amountofdrinks);
        })
//message
const feedbackElement = document.getElementById('feedback');
    formElement.addEventListener('submit', function(e) {
    e.preventDefault();

    const carbohydrates = Math.ceil(Number(fruit1.options[fruit1.selectedIndex].getAttribute("carbohydrates")) + Number(fruit3.options[fruit3.selectedIndex].getAttribute("carbohydrates")) + Number(fruit2.options[fruit2.selectedIndex].getAttribute("carbohydrates")));
    const calories = Math.ceil(Number(fruit1.options[fruit1.selectedIndex].getAttribute("calories")) + Number(fruit3.options[fruit3.selectedIndex].getAttribute("calories")) + Number(fruit2.options[fruit2.selectedIndex].getAttribute("calories")));
    const protein = Math.ceil(Number(fruit1.options[fruit1.selectedIndex].getAttribute("pro")) + Number(fruit3.options[fruit3.selectedIndex].getAttribute("pro")) + Number(fruit2.options[fruit2.selectedIndex].getAttribute("pro")));
    const fat = Math.ceil(Number(fruit1.options[fruit1.selectedIndex].getAttribute("fat")) + Number(fruit3.options[fruit3.selectedIndex].getAttribute("fat")) + Number(fruit2.options[fruit2.selectedIndex].getAttribute("fat")));
    const sugar = Math.ceil(Number(fruit1.options[fruit1.selectedIndex].getAttribute("sugar")) + Number(fruit3.options[fruit3.selectedIndex].getAttribute("sugar")) + Number(fruit2.options[fruit2.selectedIndex].getAttribute("sugar")));  

    feedbackElement.innerHTML = `Name: ${formElement.fname.value}<br>Email: ${formElement.email.value}<br>Phone: ${formElement.phone.value}<br> Selected fruits: ${formElement.fruit2.value}, ${formElement.fruit1.value}, ${formElement.fruit3.value} <br>Special Instructions: ${formElement.instructions.value} <br> Date: ${new Date().toDateString()} <br> Total Amount of Carbohydrates: ${carbohydrates} <br> Total Amount of protein: ${protein} <br> Total Amount of fat: ${fat} <br> Total Amount of calories: ${calories} <br> Total Amount of sugar: ${sugar} `;
    feedbackElement.style.display = "block";
    feedbackElement.style.border= "1px solid #333";
    feedbackElement.style.borderRadius = "20px";
        })}