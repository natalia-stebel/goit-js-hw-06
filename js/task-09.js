function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtn = document.querySelector('.change-color');


const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');


changeBtn.addEventListener('click', changeBtnClick)

function changeBtnClick(){
  bodyEl.style.backgroundColor = getRandomHexColor()
  
  spanEl.textContent = getRandomHexColor()

}
