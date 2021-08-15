//login button event handler

document.getElementById('login-btn').addEventListener('click', function () {
    // console.log('login button clicked'); //just check

    //email input
    const emailField = document.getElementById('email-input');
    const userEmail = emailField.value;
    // console.log(userEmail);


    //password input
    const passwordField = document.getElementById('password-input');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    if (userEmail == 'dynamic@gmail.com' && userPassword == 'dynamic') {
        // console.log('valid user');
        window.location.href = 'user-profile.html';
    }


});