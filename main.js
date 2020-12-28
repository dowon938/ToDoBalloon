"use strict";

const textInput = document.querySelector(".text");
const keyboard = document.querySelector(".keyboard");
const typingContainer = document.querySelector(".typingContainer");
const key = document.querySelectorAll(".key");

// textInput.addEventListener("keydown", (event) => {
//   console.log(event.code);
//   console.log(event);
// });
textInput.addEventListener("keydown", (event) => {
  let eventKey = document.querySelector(`[data-key='${event.code}']`);
  if (!eventKey) {
    return;
  }
  eventKey.id=("p");
});
textInput.addEventListener("keyup", (event) => {
  let eventKey = document.querySelector(`[data-key='${event.code}']`);
  if (!eventKey) {
    return;
  }
  eventKey.id=("");
});
textInput.addEventListener('focus',()=>{
  keyboard.style.opacity = "1";
  typingContainer.style.transform = "translateY(0%)";
  textInput.style.width = "96%";
  textInput.style.borderRadius = "15px"
  textInput.style.transform = "translate(-50%, +34px)"
})
textInput.addEventListener('blur',()=>{
  keyboard.style.opacity = "0";
  typingContainer.style.transform = "translateY(100%)";
  textInput.style.width = "50%";
  textInput.style.borderRadius = "25px"
  textInput.style.transform = "translate(-50%)"
})