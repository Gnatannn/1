var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form -state';

const formData = {};

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}
const localData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
console.log(localData);
console.log(form);

function onPageReload() {
  //   console.log(form.firstElementChild.firstElementChild.value);
  //   console.log(emailInput);
  //   console.log(messageInput);
  if (emailInput.value === '' || messageInput.value === '') {
    emailInput.value = localData.email;
    messageInput.value = localData.message;
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
