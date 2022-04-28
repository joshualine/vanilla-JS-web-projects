const form = document.getElementById('form');
const email = document.getElementById('email');
const password1 = document.getElementById('password1')
const password2 = document.getElementById('password2')

// Function to get out the values of then inputs
function getInputValue(input){
  return input.value.trim()
}

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// show input success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    console.log("correct email")
  } else {
    showError(input, 'Email is not valid')
    console.log("wrong email")
  }
}

//Checking that the required fields are filled
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      console.log('fill the whole field')
      isRequired = true;
    } else{
      console.log("input successfully added")
    }
  });
  return isRequired;
}

function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    console.log('password mismatch')
  }
}
// Event Listener
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (checkRequired([email, password1, password2])) {
    checkEmail(email);
    checkPasswordMatch(password1, password2);
  }
})
