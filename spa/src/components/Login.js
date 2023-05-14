import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const emailHandler = (e) => {
        setEmail(e.target.value)

        const errorSymbols = " ![]№#$%&'*+-/=?^_`{|}~,;:\"\""
        let containError = false;
        for (let i = 0; i < errorSymbols.length; i++) {
            if (e.target.value.includes(errorSymbols[i])) {
                setEmailError(`Email cannot contain symbol ${errorSymbols[i]}`);
                containError = true;
                break;
            }
        }
        if (!containError) {
            setEmailError("")
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const url = `http://127.0.0.1:5000/user/login`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(async response => {
                if (!response.ok) {
                    const json_data = await response.json();
                    throw new Error(json_data.error);
                }
                return response.json()
            })
            .then(data => {
                localStorage.setItem('first_name', data.first_name);
                localStorage.setItem('last_name', data.last_name);
                localStorage.setItem('username', data.username);
                localStorage.setItem('email', data.email);
                localStorage.setItem('phone', data.phone);
                localStorage.setItem('user_session', "True");
                localStorage.setItem('user_status', data.user_status);
                localStorage.setItem('user_id', data.user_id);
                localStorage.setItem('token', data.token);

                if (data.user_status === "admin") {
                    navigate("/admin");
                } else if (data.user_status === "user") {
                    navigate("/");
                }

            })
            .catch((error) => {
                if (emailError !== '') {
                    alert(emailError);
                } else {
                    alert(error);
                }
            });
    }

    return(
        <div className="container" id="login-form">
            <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <h1 className="top-text">Sign In</h1>
                        <br />
                        <input onChange={e => emailHandler(e)} type="text" className="form-control" id="email" placeholder="Email" required  />
                        <br />
                        <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Password" required />
                        <br />
                        <input className={"mt-3"} type="submit" value="Sign in" />
                    </form>
                </div>
            </div>
        </div>
    );
}
