const input = document.querySelector("#validation-input");
// const inputValid = document.querySelector("#validation-input.valid");
// const inputInvalid = document.querySelector("#validation-input.invalid");



function inputCheck() {
    
    if (input.value.length < input.dataset.lengt) {
         input.classList.add("valid");
    } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
    }
}

input.addEventListener("blur", inputCheck);
