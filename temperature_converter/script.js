const celciusElement = document.querySelector('#celcius');
const fahrenheitElement = document.querySelector('#fahrenheit');

const convertToFahrenheit = ((celcius) => {
  if(fahrenheitElement){
    const fValue = (celcius * 9/5) + 32;
    fahrenheitElement.value = Number.isInteger(fValue) ? fValue : fValue.toFixed(2);
  }
   else if(celciusElement.value === '') {
    fahrenheitElement.value = '';
   }
}) 

const convertToCelcius = ((fahrenheit) => {
  if(celciusElement) {
    const cValue = (fahrenheit - 32) * 5/9;
    celciusElement.value = Number.isInteger(cValue) ? cValue : cValue.toFixed(2);
  }
   else if (fahrenheitElement.value === '') {
    celciusElement.value = '';
   }
}) 


celciusElement.addEventListener('input', (e) => {
  convertToFahrenheit(parseFloat(e.target.value))})

fahrenheitElement.addEventListener('input', (e) => {
  convertToCelcius(parseFloat(e.target.value))})