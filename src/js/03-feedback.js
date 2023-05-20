const throttle = require('lodash.throttle');

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onMessageInput, 500));
refs.email.addEventListener('input', throttle(onEmailInput, 500));

refs.form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  saveFormData();
});

function onFormSubmit(evt) {
  evt.preventDefault();
  clearFormData();
}

function onMessageInput(evt) {
  const message = evt.target.value;
  formData.message = message;
  saveFormData();
}

function onEmailInput(evt) {
  const email = evt.target.value;
  formData.email = email;
  saveFormData();
}

function saveFormData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    if (formData.email) {
      refs.email.value = formData.email;
    }
    if (formData.message) {
      refs.textarea.value = formData.message;
    }
  }
}

function clearFormData() {
  formData = {};
  localStorage.removeItem(STORAGE_KEY);
  refs.form.reset();
}

loadFormData();
console.log(formData)