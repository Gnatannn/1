var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
// const emailInput = document.querySelector('input');
// const messageInput = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

let formData = {};

form.addEventListener('input', throttle(onFormInput, 1000));
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

// const localData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

function onPageReload() {
  // event.preventDefault();
  //   console.log(form.firstElementChild.firstElementChild.value);
  // console.log(emailInput);
  // console.log(messageInput);
  // if (emailInput.value === '') {
  //   emailInput.value = localData.email || '';
  // }
  // if (messageInput.value === '') {
  //   messageInput.value = localData.message || '';
  // }

  let saveData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (saveData) {
    Object.entries(saveData).forEach(([key, value]) => {
      formData[key] = value;
      form.elements[key].value = value;
      console.log(saveData);
    });
  }
}
onPageReload();

function onFormSubmit(event) {
  event.preventDefault();
  const { email, message } = event.target.elements;
  const emailValue = email.value;
  const messageValue = message.value;
  const user = {
    emailValue,
    messageValue,
  };

  if (emailValue === '' || messageValue === '') {
    window.alert(
      "Please fill the form right now! Otherwise I'll call your mom!"
    );
  } else {
    console.log(user);
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
}
