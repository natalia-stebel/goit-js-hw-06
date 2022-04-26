// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка
// будет меняться размер текста.

const inputFontControl = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");


const inputControl = event => {
    inputText.style.fontSize = `${event.currentTarget.value}px`;
}

inputFontControl.addEventListener("input", inputControl);