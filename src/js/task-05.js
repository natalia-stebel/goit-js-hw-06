const inputEl = document.querySelector("#name-input");
const textLabel = document.querySelector("#name-output");

function inputReaction(event) {
    textLabel.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        textLabel.textContent = "Anonymous";
        
    }

}
inputEl.addEventListener('input',inputReaction);

