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

const amountRadio = document.querySelectorAll('.amount-button-item');
const amountInput = document.querySelectorAll('input[type=radio]');
const amountValue = document.querySelector('#another-amount');
const inputs = document.querySelectorAll('input[type=number]');

const getAmount = () =>{
  Array.from(inputs).forEach(input => {
    const min = +input.min;
    const max = +input.max;

    input.addEventListener('input', (e) => {
        const value = +input.value;
        if (value > max) {input.value = max}
        else if (value < min) {input.value = min}
    })
  });

  for (let i = 0; i < amountRadio.length; i++) {
      amountRadio[i].addEventListener('click', () => {
          amountValue.value = amountInput[i].value;
      })
      amountValue.addEventListener('input', () => {
          if (amountValue.value == 5000) {
              amountInput[0].checked = true;
          }
          else if (amountValue.value == 2000) {
              amountInput[1].checked = true;
          }
          else if (amountValue.value == 1000) {
              amountInput[2].checked = true;
          }
          else if (amountValue.value == 500) {
              amountInput[3].checked = true;
          }
          else if (amountValue.value == 250) {
              amountInput[4].checked = true;
          }
          else if (amountValue.value == 100) {
              amountInput[5].checked = true;
          }
          else if (amountValue.value == 50) {
              amountInput[6].checked = true;
          }
          else if (amountValue.value == 25) {
              amountInput[7].checked = true;
          }
          else {
              amountInput[i].checked = false;
          }
      })
  }
}

getAmount();























































});