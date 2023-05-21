const throttle = require('lodash.throttle');

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('submit', onFormSubmit);

const saveFormDataThrottled = throttle(saveFormData, 500);

refs.form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value.trim();
  saveFormData();
  saveFormDataThrottled(); 
});

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData)
  formData = {};
  localStorage.removeItem(STORAGE_KEY);
  refs.form.reset();
}

function saveFormData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFormData() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      formData = JSON.parse(savedData);
      Object.entries(formData).forEach(([key, value]) => {
        refs.form.elements[key].value = value
      });
    }
  } catch (error) {
    console.log(error.messages);
  }
}
loadFormData();
console.log(formData);