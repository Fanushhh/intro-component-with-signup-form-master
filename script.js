
const form = document.querySelector('form');
const imgs = form.querySelectorAll('img');
const inputs = form.querySelectorAll('input');
const errorFields = form.querySelectorAll('.error-field');
const email = form.querySelector('input[name=email]');

// submitButton.addEventListener('click', function(e){
//     e.preventDefault();

//     console.log(e.target.value);
    
// })
const errors = ["First name cannot be empty", "Last Name cannot be empty", "Email Address cannot be empty", "Password cannot be empty"]

function validateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
      return true;
    } else {
      return false;
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    for(let i = 0; i< inputs.length; i++){
        if(inputs[i].value == ''){
            imgs[i].style.opacity = 1;
            errorFields[i].innerHTML = errors[i];
        }else if(inputs[i].name == 'email' && !validateEmail(inputs[i])){
            imgs[i].style.opacity = 1;
            errorFields[i].innerHTML = 'Email provided is not valid';
        }else{
            imgs[i].style.opacity = 0;
            errorFields[i].innerHTML = '';
        }
        
    }
    
    
})

