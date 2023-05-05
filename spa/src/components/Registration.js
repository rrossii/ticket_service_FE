import {useState} from "react";
import {useNavigate} from "react-router-dom";

export function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            setPasswordError('Password length must be greater than or equal to 8');
        } else {
            setPasswordError("")
        }
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <form>
                        <h1 className="top-text">Sign Up</h1><br/>
                        <input type="text" className="form-control" id="name" placeholder="Your Name" required /><br/>
                            <input type="text" className="form-control" id="surname" placeholder="Enter Surname" required /><br/>
                                <input type="text" className="form-control" id="username" placeholder="Enter Username" required /><br/>
                                    <input type="text" className="form-control" id="user_status" placeholder="Admin or User" required /><br/>
                                        <input type="email" className="form-control" id="email" placeholder="Enter Email" required /><br/>
                                            <input type="text" className="form-control" id="phone" placeholder="Enter Phone" required /><br/>
                                                <input type="password" className="form-control" id="password" placeholder="Enter Password" required /><br/>
                                                    <input type="password" className="form-control" id="password_repeat" placeholder="Confirm Password" required /><br/>
                                                        <input type="submit" value="Sign up" />
                                                        <p className="mt-2">Already have an account?
                                                            <a href="login.html">Sign in</a>.</p>
                    </form>
                </div>
            </div>
        </div>
    )
}