
function logout() {
    localStorage.setItem('user_session', "False");
    localStorage.setItem('user_status', null);

    window.location.href = "index.html";
}

const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", async(event) => {
    event.preventDefault();
    logout();
});