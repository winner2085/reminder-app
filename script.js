const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const addButton = document.getElementById("add-button");
const input = document.getElementById("input-container");
const container = document.querySelector('container');

const inputArray = [];

let storeInput = () =>{
    addButton.addEventListener('click', () =>{
        inputArray.push(input.value);
    });
}

storeInput ();