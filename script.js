const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const addButton = document.getElementById("add-button");
const input = document.getElementById("input-container");
const container = document.querySelector('.container');
const scoreContainer = document.querySelector('.number');

const inputArray = [];
let score = 0;

let storeInput = () =>{
    addButton.addEventListener('click', () => {
        inputArray.push(input.value);
        container.innerHTML += input.value;
        
    });
}

let numberChange = () =>{
    rightButton.addEventListener('click', () =>{
        score += 1;
    });
}


storeInput ();