import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export function Registration() {
    const [first_name, setName] = useState('');
    const [last_name, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [user_status, setUserStatus] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const phoneHandler = (e) => {
        setPhone(e.target.value);
        const letters = /[^0-9]+/;

        if (letters.test(e.target.value)) {
            setPhoneError("Phone number must contain only digits");
        } else if (e.target.value.length !== 10) {
            setPhoneError("Phone size must be 10");
        } else {
            setPhoneError("");
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError('Password length must be greater than or equal to 8');
        } else {
            setPasswordError("");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password.length < 8) {
            setPasswordError('Password length must be greater than or equal to 8');
        }

        const url = `http://127.0.0.1:5000/user/register`;

        fetch(url, {
            method: "POST",
            body: JSON.stringify( { first_name, last_name, username, user_status, email, phone, password }),
            headers: {
                "Content-Type": "application/json"
            }
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

                navigate("/");
            })
            .catch((error) => {
                if (passwordError !== '') {
                    alert(passwordError);
                } else if (phoneError !== '') {
                    alert(phoneError);
                } else {
                    alert(error);
                }
            });
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <h1 className="top-text">Sign Up</h1><br/>
                        <input onChange={e => setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Your Name" required autoComplete="off"/><br/>
                        <input onChange={e => setSurname(e.target.value)} type="text" className="form-control" id="surname" placeholder="Enter Surname" required autoComplete="off"/><br/>
                        <input onChange={e => setUsername(e.target.value)} type="text" className="form-control" id="username" placeholder="Enter Username" required autoComplete="off"/><br/>
                        <input onChange={e => setUserStatus(e.target.value)} type="text" className="form-control" id="user_status" placeholder="Admin or User" required /><br/>
                        <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="Enter Email" required autoComplete="off"/><br/>
                        <input onChange={e => phoneHandler(e)} value={phone} type="text" className="form-control" id="phone" placeholder="Enter Phone" required autoComplete="off"/><br/>
                        <input onChange={e => passwordHandler(e)} value={password} type="password" className="form-control" id="password" placeholder="Enter Password" required /><br/>
                        {/*<input onChange={e => setRepeatedPass(e.target.value)} type="password" className="form-control" id="password_repeat" placeholder="Confirm Password" required /><br/>*/}
                        <input className={"mt-3"} type="submit" value="Sign up" />
                        <p className="mt-2">Already have an account? <Link to="/login">Sign in</Link>.</p>
                    </form>
                </div>
            </div>
        </div>
    )
}