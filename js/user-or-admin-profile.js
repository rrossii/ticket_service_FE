const currentUserStatus = localStorage.getItem("user_status");

const profileUser = document.getElementById("profile-user-btn");
const profileAdmin = document.getElementById("profile-admin-btn");

const signInButton = document.getElementById('login-btn');
const signUpButton = document.getElementById('register-btn');

if (currentUserStatus === "admin") {
    signInButton.style.display = 'none';
    signUpButton.style.display = 'none';

    profileUser.style.display = "none";
    profileAdmin.style.display = "inline";
} if (currentUserStatus === "user") {
    signInButton.style.display = 'none';
    signUpButton.style.display = 'none';

    profileAdmin.style.display = "none";
    profileUser.style.display = "inline";
} else {
    profileAdmin.style.display = "none";
    profileUser.style.display = "none";
    signInButton.style.display = 'inline';
    signUpButton.style.display = 'inline';
}