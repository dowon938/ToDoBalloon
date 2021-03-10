'use strict';

const textInput = document.querySelector('.text-input');
const keyboard = document.querySelector('.keyboard');
const typingContainer = document.querySelector('.typingContainer');
const key = document.querySelectorAll('.key');
const checked = document.querySelector('.radio-checked');
const submit = document.querySelector('.text-submit');
const textRadio = document.querySelector('.text-radio');
const radioLabel = document.querySelector('.radio-label');
const exit = document.querySelector('.text-exit');
const toDoContainer = document.querySelector('.toDoContainer');

// textInput.addEventListener("keydown", (event) => {
//   console.log(event.code);
//   console.log(event);
// });

textRadio.addEventListener('click', (event) => {
  const target = event.target;
  const classList = target.classList;
  switch (classList[1]) {
    case 'urgent':
      checked.innerHTML = 'urgent';
      checked.style.backgroundColor = 'tomato';
      break;
    case 'midium':
      checked.innerHTML = 'midium';
      checked.style.backgroundColor = 'orange';
      break;
    case 'low':
      checked.innerHTML = 'low';
      checked.style.backgroundColor = 'yellowgreen';
      break;
    default:
      break;
  }
});

checked.addEventListener('click', () => {
  textInput.focus();
  textRadio.classList.toggle('off');
});

submit.addEventListener('click', (event) => {
  event.preventDefault();
  const value = textInput.value;
  if (value === '') {
    return;
  }
  const priority = checked.innerHTML;
  // console.log(value);
  const item = document.createElement('li');
  item.setAttribute('class', `${priority} ${priority}size`);
  item.textContent = value;
  toDoContainer.appendChild(item);
  textRadio.classList.add('off');
  textInput.value = '';
});

textInput.addEventListener('keydown', (event) => {
  let eventKey = document.querySelector(`[data-key='${event.code}']`);
  eventKey.id = 'p';
});
textInput.addEventListener('keyup', (event) => {
  let eventKey = document.querySelector(`[data-key='${event.code}']`);
  eventKey.id = '';
});

textInput.addEventListener('focus', () => {
  keyboard.style.opacity = '1';
  typingContainer.style.transform = 'translateY(0%)';
  textInput.style.width = '96%';
  textInput.style.borderRadius = '15px';
  textInput.style.transform = 'translate(-50%, +34px)';
  checked.style.opacity = '1';
  submit.style.opacity = '1';
  exit.style.opacity = '1';
  checked.style.transform = 'translateY(0%)';
  submit.style.transform = 'translateY(0%)';
});
exit.addEventListener('click', () => {
  keyboard.style.opacity = '0';
  typingContainer.style.transform = 'translateY(100%)';
  textInput.style.width = '50%';
  textInput.style.borderRadius = '25px';
  textInput.style.transform = 'translate(-50%)';
  checked.style.opacity = '0';
  submit.style.opacity = '0';
  exit.style.opacity = '0';
  checked.style.transform = 'translateY(-80%)';
  submit.style.transform = 'translateY(-80%)';
  textRadio.classList.add('off');
  textInput.blur();
});
