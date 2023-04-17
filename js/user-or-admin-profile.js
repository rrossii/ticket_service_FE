const currentUserStatus = localStorage.getItem("user_status");

const profileUser = document.getElementById("profile-user-btn");
const profileAdmin = document.getElementById("profile-admin-btn");

if (currentUserStatus === null) {
    profileAdmin.style.display = "none";
    profileUser.style.display = "none";
} else if (currentUserStatus === "admin") {
    profileUser.style.display = "none";
} else if (currentUserStatus === "user") {
    profileAdmin.style.display = "none";
}