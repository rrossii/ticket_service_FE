const URL = 'http://127.0.0.1:5000';

function login(email, password) {
    const url = `${URL}/user/login`;

    fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json()
        })
        .then(data => {
            localStorage.setItem('name', data.first_name);
            localStorage.setItem('surname', data.last_name);
            localStorage.setItem('email', data.email);

            if (data.user_status === "admin") {
                window.location.href = "admin-profile.html";
            } else if (data.user_status === "user") {
                window.location.href = "index.html";
            }

        })
        .catch(() => {
            alert("Wrong credentials");
        });
}


const loginForm = document.querySelector("form");
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    login(email, password);

});
