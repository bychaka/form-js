window.onload = function(){
    let submit = document.getElementById('submit');
    submit.addEventListener('click', function(e){
        clearErrorArea();
        validateForm();
    });
}

function validateForm(){
    let userName = document.getElementById('user-name');
    validateInput(userName);
    let mail = document.getElementById('e-mail');
    validateInput(mail);
    let password = document.getElementById('password');
    validateInput(password);
    let confirm = document.getElementById('confirm');

}

function validateInput(input){
    input.classList.remove('err');
    
    if (!isRequiredField(input)){
        createErrorRequired(input);
    } else {
        if (isFieldPattern(input)) {
            var pattern = input.getAttribute('pattern');
            var reg = new RegExp(pattern);
            if (!reg.test(input.value.toUpperCase())) { 
                createErrorPattern(input);
            } 
          }
    }
}

function createErrorPattern(input){
    let errorItem = document.createElement('li');
    errorItem.className = 'error-item';
    errorItem.textContent = 'field "' + input.name + '" is not validated!';
    input.classList.add('err');
    document.querySelector('.result').appendChild(errorItem);
}

function createErrorRequired(input){
    let errorItem = document.createElement('li');
    errorItem.className = 'error-item';
    errorItem.textContent = 'field "' + input.name + '" is required!';
    input.classList.add('err');
    document.querySelector('.result').appendChild(errorItem);
}

function isFieldPattern(input){
    return (input.hasAttribute('pattern'))
}

function isRequiredField(input){
    return ((input.hasAttribute('required')) && (input.value.length > 0))
}

function clearErrorArea(){
    let result = document.querySelector('.result');
    result.innerHTML = '';        
}

//if(e.target.classlist.has('class'))
