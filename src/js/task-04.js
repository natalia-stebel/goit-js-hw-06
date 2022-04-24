let counterValue = 0;

const value = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const incrementClick = () => {
    counterValue += 1;
    value.textContent = counterValue;
}

const decrementClick = () => {
    counterValue -= 1; 
    value.textContent = counterValue;
}

incrementBtn.addEventListener("click", incrementClick);
decrementBtn.addEventListener("click", decrementClick);