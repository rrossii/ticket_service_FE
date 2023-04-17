const URL = 'http://127.0.0.1:5000';

function register(first_name, last_name, username, user_status, email, phone, password) {
    const url= `${URL}/user/register`;

    fetch(url, {
        method: "POST",
        body: JSON.stringify( { first_name, last_name, username, user_status, email, phone, password }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json()
        })
        .then(data => {
            localStorage.setItem('name', data.first_name);
            localStorage.setItem('surname', data.last_name);
            localStorage.setItem('email', data.email);

            window.location.href = "index.html";
        })
        .catch((error) => {
            console.log(error);
            alert("Sign up failed");
        });
}

const registerForm = document.querySelector("form");

registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const first_name = document.getElementById("name").value;
    const last_name = registerForm.surname.value;
    const username = registerForm.username.value;
    const user_status = registerForm.user_status.value;
    const email = registerForm.email.value;
    const phone = registerForm.phone.value;
    const password = registerForm.password.value;

    register(first_name, last_name, username, user_status, email, phone, password);

});