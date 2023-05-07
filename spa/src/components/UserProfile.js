
import {Link, useNavigate} from "react-router-dom";
import {Logout} from "./Logout";

export function UserProfile() {
    const first_name = localStorage.getItem("first_name" || "");
    const last_name = localStorage.getItem("last_name" || "");
    const username = localStorage.getItem("username" || "");
    const user_status = localStorage.getItem("user_status" || "");
    const email = localStorage.getItem("email" || "");

    const navigate = useNavigate();

    if (user_status !== "user") {
        return <h1 className={"m-5 text-center"}><b>Access denied.</b></h1>;
    }

    const handleLogout = () => {
        Logout();
        navigate("/");
    };

    return(
        <div className="container text-center mt-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="top-text">Profile</h1><br/>
                </div>
                <div className="col-md-3">
                    <nav className="nav nav-pills flex-column">
                        <button className="basic-button"><a href="purchase-history.html">Purchase history</a></button>
                        <button className="basic-button"><a href="#">Favourites</a></button>
                        <button onClick={handleLogout} className="basic-button my-3" id="logout-btn">Log out</button>
                    </nav>
                </div>
                <div className="col-md-9">
                    <table className="user-info">
                        <tr>
                            <td>Name</td>
                            <td id="name">{first_name}</td>
                        </tr>
                        <tr>
                            <td>Surname</td>
                            <td id="surname">{last_name}</td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td id="username">{username}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td id="email">{email}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td id="user-status">{user_status}</td>
                        </tr>
                    </table>
                    <button className="basic-button"><Link to="/update-profile">Edit</Link></button>
                </div>
            </div>
        </div>
    )
}