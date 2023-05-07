import React, { useEffect, useState } from 'react';
import '../styles.scss';
import {isAdmin} from "../utils/Utils";

export function UserListing() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const url = `http://127.0.0.1:5000/user`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => alert(error));
    }, []);

    // checking
    if (!isAdmin()) {
        return <h1 className={"m-5 text-center"}><b>Access denied. Only admin users are allowed.</b></h1>;
    }

    return(
        <div>
            {users.map(user => (
                <div className="text-center mt-5" id="user-listing" key={user.user_id}>
                    <h3 style={{fontFamily: "Kulim Park"}}>{user.first_name} {user.last_name}</h3>
                    <p className="ordinary-text">Email: {user.email}</p>
                </div>
            ))}
        </div>
    )
}