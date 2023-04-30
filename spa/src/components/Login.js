export function Login() {
    return(
        <div className="container" id="login-form">
            <div className="row">
                <div className="col">
                    <form>
                        <h1 className="top-text">Sign In</h1>
                        <br />
                        <input type="text" className="form-control" id="email" placeholder="Email" required />
                        <br />
                        <input type="password" className="form-control" id="password" placeholder="Password" required />
                        <br />
                        <input type="submit" value="Sign in" />
                    </form>
                </div>
            </div>
        </div>
    );
}

