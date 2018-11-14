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
    console.info(input);
    
    input.classList.remove('err');
    let errorArr = document.querySelector('.result');
    
    if (!isFieldFill(input)){
        let errorItem = document.createElement('li');
        errorItem.className = 'error-item';
        errorItem.textContent = 'field "' + input.name + '" is not required!';
        input.classList.add('err');
        errorArr.appendChild(errorItem);
    } else {
        if (input.hasAttribute('pattern')) {
            var pattern = input.getAttribute('pattern');
            var reg = new RegExp(pattern);
            if (!reg.test(input.value.toUpperCase())) { 
            
                let errorItem = document.createElement('li');
                errorItem.className = 'error-item';
                errorItem.textContent = 'field "' + input.name + '" is not validate';
                input.classList.add('err');
                errorArr.appendChild(errorItem);
            } 
          }
    }
}

function isFieldFill(input){
    return ((input.hasAttribute('required')) && (input.value.length > 0))
}

function clearErrorArea(){
    let result = document.querySelector('.result');
    result.innerHTML = '';        
}

//if(e.target.classlist.has('class'))
