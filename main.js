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
}

function validateInput(input){
    removeErrorStyle(input);
    let errorMessage = {
        Pattern: '" is not validated!',
        Required: '" is required!',
        ConfirmedPass: '" does not match the password!'
    };

    if (!isRequiredField(input)){
        showError(input, errorMessage.Required);
    } else if (isFieldPattern(input)) {
        var pattern = input.getAttribute('pattern');
        var reg = new RegExp(pattern);
        if (!reg.test(input.value.toUpperCase())) { 
            showError(input, errorMessage.Pattern);
        } else if (input.id === password.id)
            validatePassword(input, errorMessage.ConfirmedPass);
    }

}

function validatePassword(password, errorMessage){
    let confirm = document.getElementById('confirm');
    if (!(password.value === confirm.value)){
        return showError(confirm, errorMessage);
    } else 
        removeErrorStyle(confirm);
}

function showError(input, errorType){
    let errorItem = document.createElement('li');
    errorItem.className = 'error-item';
    errorItem.textContent = 'field "' + input.name + errorType;
    input.classList.add('err');
    input.parentNode.classList.add('error-star');
    document.querySelector('.result').appendChild(errorItem);
}

function removeErrorStyle(input){
    input.classList.remove('err');
    input.parentNode.classList.remove('error-star');
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