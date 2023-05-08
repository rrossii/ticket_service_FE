import React, { useEffect } from 'react';

export function DeleteProfile() {
    const user_id = localStorage.getItem("user_id" || "0");
    const authToken = localStorage.getItem('token');

    const url = `http://127.0.0.1:5000/user/${user_id}`;

    localStorage.setItem('user_session', "False");
    localStorage.setItem('user_status', null);

    fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${authToken}`
        }
    })
        .then(async response => {
            if (!response.ok) {
                const json_data = await response.json();
                throw new Error(json_data.error);
            }
        })
        .catch(error => alert(error));
}