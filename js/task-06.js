
   
const input = document.querySelector("#validation-input");
// const inputValid = document.querySelector("#validation-input.valid");
// const inputInvalid = document.querySelector("#validation-input.invalid");
const inputLength = input.getAttribute("data-length")

input.addEventListener("blur", inputCheck);

function inputCheck() {
  if (input.value.length < input.dataset.length) {
    input.classList.add("invalid");
  }
  
  else {
     input.classList.remove("invalid");
     input.classList.add("valid");
  }
}