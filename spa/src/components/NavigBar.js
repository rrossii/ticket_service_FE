import { Link } from 'react-router-dom';
export function NavigBar() {
    return(
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-expand-md" id="navig-bar">
                    <Link className="navbar-brand" to="/">
                        <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo-image" width="40" height="30"
                             className="d-inline-block align-top"/>
                        TicketServe
                    </Link>
                    <button className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav text-center">
                            <li className="nav-item active">
                                <a className="nav-link" href="concerts.html">Concerts</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="fests.html">Fests</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="theater.html">Theater</a>
                            </li>
                            <li className="nav-item active" id="login-btn">
                                <Link className="nav-link" to="/login">Sign in</Link>
                            </li>
                            <li className="nav-item active" id="register-btn">
                                <Link className="nav-link" to="/registration">Sign up</Link>
                            </li>
                            <li className="nav-item active" id="profile-user-btn">
                                <Link className="nav-link" to="/user-profile">Profile</Link>
                            </li>
                            <li className="nav-item active" id="profile-admin-btn">
                                <Link className="nav-link" to="/admin">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}