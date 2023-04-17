const userSession = localStorage.getItem('user_session');
if (userSession) {
    const signInButton = document.getElementById('login-btn');
    const signUpButton = document.getElementById('register-btn');
    signInButton.style.display = 'none';
    signUpButton.style.display = 'none';
}