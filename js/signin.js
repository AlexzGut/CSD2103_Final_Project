const signin = function () {
    const errorClass = 'error-span';
    const username = document.getElementById('username');
    const usernameError = document.getElementById('username-error');

    const password = document.getElementById('password');
    const passwordError = document.getElementById('password-error');

    let isValid = true;

    if (username.value == "") {
        usernameError.innerText = 'Please enter your username';
        usernameError.className = errorClass;
        isValid = false;
    } else {
        usernameError.innerText = '';
        usernameError.className = '';
    }

    if (password.value == "") {
        passwordError.innerText = 'Please enter your password';
        passwordError.className = errorClass;
        isValid = false;
    } else {
        passwordError.innerText = '';
        passwordError.className = '';
    }

    if (isValid) {
        document.getElementById('signin-form').submit();
    }
    
};

$(function () {
    $('#btn-submit').on('click', signin);   
});