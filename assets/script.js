document.addEventListener("DOMContentLoaded", function () {

const inputMonstly = document.querySelector('#radio-monthly');
const inputOnce = document.querySelector('#radio-once');
const labelMonstly = document.querySelector('.monthly-label');
const labelOnce = document.querySelector('.once-label');

inputMonstly.addEventListener('click', () =>{
  if (!inputMonstly.hasAttribute('checked')) {
    inputOnce.removeAttribute('checked');
    inputMonstly.setAttribute('checked','checked');
    labelMonstly.classList.add('checked-label')
    labelOnce.classList.remove('checked-label')
  }
})

inputOnce.addEventListener('click', () =>{
  if (!inputOnce.hasAttribute('checked')) {
    inputMonstly.removeAttribute('checked');
    inputOnce.setAttribute('checked','checked');
    labelMonstly.classList.remove('checked-label')
    labelOnce.classList.add('checked-label')

  }
})





























































});