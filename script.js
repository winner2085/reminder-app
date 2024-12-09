const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const addButton = document.getElementById("add-button");
const input = document.getElementById("input-container");
const container = document.querySelector('.container');
const numberContainer = document.querySelector('.number');

const reminderArray = [];
let number = 0;


addButton.addEventListener('click', () => {
    reminderArray.push(input.value);
    container.innerHTML += input.value;
    input.value = '';
    let newReminder = document.createElement("p");
    newReminder.classList.add("large-text");
    newReminder.textContent = input;
    container.appendChild(newReminder);
});


rightButton.addEventListener('click', () =>{
    number ++;
    numberContainer.textContent = number;
    container.innerHTML = '';
    reminderArray.forEach(element => {
        if(element.number === number) {
            let newReminder = document.createElement("p");
            newReminder.classList.add("large-text");
            newReminder.textContent = element.text;
            container.appendChild(newReminder);
        }
    });
});

leftButton.addEventListener('click', () => {
    if (number > 0) {
        number--;
        numberContainer.textContent = number;
        container.innerHTML = '';
        reminderArray.forEach(element => {
            if (element.number === number) {
                let newReminder = document.createElement("p");
                newReminder.classList.add("large-text");
                newReminder.textContent = element.text;
                container.appendChild(newReminder);
            }
        });
    }
});
