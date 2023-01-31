/*
* File: app.js
* Author: Faragó Csaba
* Copyright: 2023, Faragó Csaba
* Group: Szoft I-1-E
* Date: 2023-01-31
* Github: https://github.com/szalami/terkup.git
*/
const radius = document.querySelector("#radius");
const height = document.querySelector("#height");
const calcButton = document.querySelector("#calcButton");
const area = document.querySelector("#area");

let calculate = (r, h) => {
    return (Math.pow(r, 2) * Math.PI * h) / 3;     
}

calcButton.addEventListener("click", () => {
    if(radius.value != "" && height.value != ""){
        area.value = calculate(Number(radius.value), Number(height.value));
    }
});

