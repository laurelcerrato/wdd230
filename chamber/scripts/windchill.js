let temp = document.querySelector(".temperature");
let speed = document.querySelector(".wind-speed");
let windchill = document.querySelector(".wind-chill");
let celciustofarenh = (temp.innerHTML * 9/5)+ 32;
let mph = speed.innerHTML / 1.609344;
let finalwindchill;
if (celciustofarenh <= 50 && mph > 30){
    finalwindchill= 35.75 + (0.6215 * temp.innerHTML) - (35.75*(Math.pow(speed.innerHTML,0.16))) + (0.4275 * temp.innerHTML * (Math.pow(speed.innerHTML, 0.16)));
}else{
    finalwindchill= "N/A";
}
windchill.innerHTML= finalwindchill;