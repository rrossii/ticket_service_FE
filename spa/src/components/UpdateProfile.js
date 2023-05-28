import { useState } from "react";
import { useNavigate } from 'react-router-dom';


export function UpdateProfile() {
    const [first_name, setName] = useState(localStorage.getItem('first_name'));
    const [last_name, setSurname] = useState(localStorage.getItem('last_name'));
    const [username, setUsername] = useState(localStorage.getItem('username'));
    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [phone, setPhone] = useState(localStorage.getItem('phone'));
    const navigate = useNavigate();

    const returnToUserOrAdminProfile = () => {
        const status = localStorage.getItem("user_status");
        if (status === "admin") {
            navigate("/admin");
        } else if (status === "user") {
            navigate("/user-profile");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const user_id = localStorage.getItem("user_id"); // mмб перемістити в розділ then
        const authToken = localStorage.getItem('token');
        const url = `http://127.0.0.1:5000/user/${user_id}`

        fetch(url, {
            method: "PUT",
            body: JSON.stringify( { first_name, last_name, username, email, phone}),
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${authToken}`
            }
        })
            .then(async response => {
                if (!response.ok) {
                    const json_data = await response.json();
                    throw new Error(json_data.message);
                }
                return response.json()
            })
            .then(data => {
                localStorage.setItem('first_name', data.first_name);
                localStorage.setItem('last_name', data.last_name);
                localStorage.setItem('username', data.username);
                localStorage.setItem('email', data.email);
                localStorage.setItem('user_session', "True");
                // localStorage.setItem('user_id', data.user_id);

                returnToUserOrAdminProfile();
            })
            .catch((error) => {
                alert(error);
            });
    }

    const handleCancel = () => {
        returnToUserOrAdminProfile();
    }

    return(
        <div className="container text-center" id="update-profile-info">
            <div className="row">
                <div className="col-md-7">
                    <form>
                        <h1 className="top-text mb-4">Edit information</h1><br/>
                        <input onChange={e => setName(e.target.value)} value={first_name} type="text" className="form-control" placeholder="Name"/><br/>
                        <input onChange={e => setSurname(e.target.value)} value={last_name} type="text" className="form-control" placeholder="Surname"/><br/>
                        <input onChange={e => setUsername(e.target.value)} value={username} type="text" className="form-control" placeholder="Username"/><br/>
                        <input onChange={e => setEmail(e.target.value)} value={email} type="email" className="form-control" placeholder="Email"/><br/>
                        <input onChange={e => setPhone(e.target.value)} value={phone} type="text" className="form-control" placeholder="Phone"/><br/>
                    </form>
                </div>
                <div className="col-md-5">
                    <form>
                        <img src="/images/basic-photo-icon.jpg" alt="no-uploaded-photo" width="70%" height="50%"/>
                        <input type="file" className="my-3" name="profile-photo"/>
                        <input type="submit" value="Upload a photo"/>
                    </form>
                    <input onClick={handleCancel} type="submit" className="my-4" value="Cancel"/>
                    <input onClick={handleSubmit} type="submit" className="my-4" value="Save"/>
                </div>
            </div>
        </div>
    )
}