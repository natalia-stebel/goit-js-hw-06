
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const submitForm = document.querySelector(".login-form");
const submitBtn = document.querySelector("button");
const emailForm = document.querySelector("input[name='email']");
const passwordForm = document.querySelector("input[name='password']");


submitForm.addEventListener("submit", checkFormSubmit)

function checkFormSubmit(evt) {
    evt.preventDefault();
    const formRefs = evt.currentTarget.elements;



    if (formRefs.email.value === "" || formRefs.password.value === "") {
        return alert("Необходимо заполнить все поля!")
    }

    let email = formRefs.email.value;
    let password = formRefs.password.value;
    let formInput = { email, password }
    console.log(formInput);
    evt.currentTarget.reset();
}



