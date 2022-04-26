const input = document.querySelector("#validation-input");
// const inputValid = document.querySelector("#validation-input.valid");
// const inputInvalid = document.querySelector("#validation-input.invalid");

input.addEventListener("blur", inputCheck);

function inputCheck(event) {
    input.classList.add("invalid")
    
    if (event.currentTarget.value.length > input.dataset.lengt) {
         
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
    
}


