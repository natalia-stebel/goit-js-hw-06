const input = document.querySelector("#validation-input");
// const inputValid = document.querySelector("#validation-input.valid");
// const inputInvalid = document.querySelector("#validation-input.invalid");
const inputLength = input.getAttribute("data-length")

input.addEventListener("blur", inputCheck);
function inputCheck(event) {
    input.classList.add("invalid")
    
    if (event.currentTarget.value.length > inputLength) {
         
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
    
}


