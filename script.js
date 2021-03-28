// Get value from buttons
const buttons = document.querySelectorAll('button');
// Get display value
const display = document.querySelector('.display');
// Add event listener to buttons on click
buttons.forEach(function (button) {
  button.addEventListener('click', calculate);
})

//Calculate function
function calculate(e) {
    const selectedButton = e.target.value;
    const { target } = e;
    //Replace zero on first click if number selected
    if ((display.value === '0') && (target.matches('.number'))) {
      display.value = selectedButton;
    }
    else if (selectedButton === '=') {
      display.value = eval(display.value);
    }
    else if (selectedButton === 'clear') {
      display.value = '0';
    }
    else {
      display.value += selectedButton;
    }
  }
