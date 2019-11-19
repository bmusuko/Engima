let userCookie = (document.cookie.match(/^(?:.*;)?\s*user\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];

if (userCookie != null) {
    window.location.replace('homepage.html');
}

let input = document.getElementById('password');

//To execute login button if enter key pressed on password input
input.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        document.getElementById("login-button").click();
    }
});

function login(e) {
    let getData = new FormData(document.forms.loginForm);
    let request = new XMLHttpRequest();
    request.open("POST", "php/login.php", true);
    request.send(getData);

    request.onload = function() {
        switch (request.response) {
            case '200':
                window.location.replace('homepage.html');
                break;

            case '201':
                document.getElementById('error-alert').innerHTML = 'Login failed';
                break;

            case '301':
                document.getElementById('error-alert').innerHTML = 'Wrong password';
                break;

            case '302':
                document.getElementById('error-alert').innerHTML = 'Username/email is not registered';
                break;

            case '401':
                document.getElementById('error-alert').innerHTML = 'Username/email is empty';
                break;

            case '402':
                document.getElementById('error-alert').innerHTML = 'Password is empty';
                break;
        }
    }
    e.preventDefault();
}

document.getElementById('loginForm').addEventListener('submit', login);