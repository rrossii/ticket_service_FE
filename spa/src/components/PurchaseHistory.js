import {isAdmin} from "../utils/Utils";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export function PurchaseHistory() {
    const [userPurchases, setUserPurchases] = useState([]);
    const [eventNames, setEventNames] = useState([]);

    const [eventBooked, setEventBooked] = useState(false);

    useEffect(() => {
        const user_id = localStorage.getItem("user_id");
        const authToken = localStorage.getItem('token');

        const url = `http://127.0.0.1:5000/tickets/user-purchase/${user_id}`

        fetch(url, {
            method: "GET",
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
                setUserPurchases(data);

                const fetchPromises = data.map(purchase => {
                    const eventId = purchase.ticket_id;
                    const url = `http://127.0.0.1:5000/tickets/${eventId}`;

                    return fetch(url, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                        .then(async response => {
                            if (!response.ok) {
                                const json_data = await response.json();
                                throw new Error(json_data.message);
                            }
                            return response.json();
                        });
                });

                Promise.all(fetchPromises)
                    .then(eventData => {
                        const eventNames = eventData.map(data => data.name);
                        setEventNames(eventNames);
                    })
                    .catch(error => {
                        alert(error);
                    });
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    if (isAdmin()) {
        return <h1 className={"m-5 text-center"}><b>Access denied.</b></h1>;
    }

    return(
        <div className="container text-center mt-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="top-text mt-3">Purchase history</h1><br/>
                </div>
                <div className="col">
                    <table className="purchase-history">
                        <tbody className="table-header">
                        <tr>
                            <th>Event</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                        </tbody>
                        {userPurchases.length === 0 ? (
                            <h1 className={"m-5 text-center"}><b>You haven't bought or booked anything by now.</b></h1>)
                            :
                            (userPurchases.map((purchase, index) => (
                                <tbody>
                                <tr>
                                    <td><Link to={`/event/${purchase.ticket_id}`} style={{color: 'inherit'}}>{eventNames[index]}</Link></td>
                                    <td>{purchase.quantity}</td>
                                    <td>{purchase.total_price}</td>
                                    <td>{purchase.status}</td>
                                </tr>
                                </tbody>
                            )))
                        }
                    </table>
                </div>
            </div>
        </div>
    )

}