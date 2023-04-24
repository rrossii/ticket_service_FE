const userSession = localStorage.getItem('user_session');

const signInButton = document.getElementById('login-btn');
const signUpButton = document.getElementById('register-btn');

if (userSession === "True") {
    signInButton.style.display = 'none';
    signUpButton.style.display = 'none';
} else if (userSession === "False") {
    signInButton.style.display = 'inline';
    signUpButton.style.display = 'inline';
}
