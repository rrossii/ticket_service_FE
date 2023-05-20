import {Logout} from "./Logout";
import {Link, useNavigate } from "react-router-dom";
import {isAdmin} from "../utils/Utils";
import React from "react";
import {DeleteProfile} from "./DeleteProfile";

export function AdminProfile() {
    const first_name = localStorage.getItem("first_name" || "");
    const last_name = localStorage.getItem("last_name" || "");
    const username = localStorage.getItem("username" || "");
    const user_status = localStorage.getItem("user_status" || "");
    const email = localStorage.getItem("email" || "");

    const navigate = useNavigate();

    if (!isAdmin()) {
        return <h1 className={"m-5 text-center"}><b>Access denied. Only admin users are allowed.</b></h1>;
    }

    const handleLogout = () => {
        Logout();
        navigate("/");
    };

    const handleUserListingClick = () => {
        navigate("/user-list");
    };

    const handleAddEventClick = () => {
        navigate("/add-event");
    }

    const handleDeleteProfile = () => {
        const confirmed = window.confirm("Are you sure you want to delete your profile? This can't be undone.");
        if (confirmed) {
            DeleteProfile();
            navigate("/");
        }
    }

    return(
        <div className="container text-center mt-4" id="admin-page">
            <div className="row">
                <div className="col-12">
                    <h1 className="top-text">Profile</h1><br />
                </div>
                <div className="col-md-3">
                    <nav className="nav nav-pills flex-column">
                        <button className="basic-button"><a href="purchase-history.html">Purchase history</a></button>
                        <button className="basic-button"><a href="#">Favourites</a></button>
                        <button onClick={handleAddEventClick} className="basic-button">Add new event</button>
                        <button onClick={handleUserListingClick} className="basic-button">User listing</button>
                        <button onClick={handleLogout} className="basic-button my-3" id="logout-btn">Log Out</button>
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
                    <div className={"justify-content-between"}>
                        <button className="basic-button p-2"><Link to="/update-profile">Edit</Link></button>
                        <button onClick={handleDeleteProfile} className="delete-button p-2">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}