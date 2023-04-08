const fruitsurl = "https://brotherblazzard.github.io/canvas-content/fruit.json";
async function getfruitsData() {
    const response = await fetch(fruitsurl);
    const data = await response.json();
    displayOptions(data);
    //getNutrition(data);
}
const fruit1 = document.querySelector(".fruits1");
const fruit2 = document.querySelector(".fruits2");
const fruit3 = document.querySelector(".fruits3");
//<option value="english">English</option>
getfruitsData()
const displayOptions = (fruits) =>{
    fruits.forEach(fruit => {
        let option = document.createElement('option');
        option.textContent = fruit.name;
        option.setAttribute("value",fruit.name);
        let option2 = document.createElement('option');
        option2.textContent = fruit.name;
        option2.setAttribute("value",fruit.name);
        let option3 = document.createElement('option');
        option3.textContent = fruit.name;
        option3.setAttribute("value",fruit.name);
        fruit1.appendChild(option);
        fruit2.appendChild(option2);
        fruit3.appendChild(option3);
        
    });
}
//nutrition info
const calories = 0;
const fat= 0;
const protein = 0;
const carbohydrates= 0;
const formElement = document.forms[0];
const formfruit1 = formElement.fruit1.value;
const formfruit2 = formElement.fruit2.value;
const formfruit3 = formElement.fruit3.value;

const getNutrition = (data) => {
    data.forEach(fruit =>{
        const fruitname = fruit.name;
        if(fruitname == formfruit1){
            carbohydrates += fruit.nutritions.carbohydrates;
            console.log(carbohydrates);
        }
    });
}
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
    feedbackElement.innerHTML = `Name: ${formElement.fname.value}<br>Email: ${formElement.email.value}<br>Phone: ${formElement.phone.value}<br> Selected fruits: ${formElement.fruit2.value}, ${formElement.fruit1.value}, ${formElement.fruit3.value} <br>Special Instructions: ${formElement.instructions.value} <br> Date: ${new Date().toDateString()} <br> Total Amount of Carbohydrates: ${carbohydrates} <br> Total Amount of protein: ${protein} <br> Total Amount of fat: ${fat} <br> Total Amount of calories: ${calories} `;
    feedbackElement.style.display = "block";
    feedbackElement.style.border= "1px solid #333";
    feedbackElement.style.borderRadius = "20px";
        })