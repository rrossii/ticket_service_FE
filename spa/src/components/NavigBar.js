export function NavigBar() {
    return(
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-expand-md" id="navig-bar">
                    <a className="navbar-brand" href="index.html">
                        <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo-image" width="40" height="30"
                             className="d-inline-block align-top"/>
                        TicketServe
                    </a>
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
                                <a className="nav-link" href="login.html">Sign in</a>
                            </li>
                            <li className="nav-item active" id="register-btn">
                                <a className="nav-link" href="registration.html">Sign up</a>
                            </li>
                            <li className="nav-item active" id="profile-user-btn">
                                <a className="nav-link" href="user-profile.html">Profile</a>
                            </li>
                            <li className="nav-item active" id="profile-admin-btn">
                                <a className="nav-link" href="admin-profile.html">Profile</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}