const userSession = localStorage.getItem('user_session');

const signInButton = document.getElementById('login-btn');
const signUpButton = document.getElementById('register-btn');

if (userSession) {
    signInButton.style.display = 'none';
    signUpButton.style.display = 'none';
} else {
    signInButton.style.display = 'inline';
    signUpButton.style.display = 'inline';
}