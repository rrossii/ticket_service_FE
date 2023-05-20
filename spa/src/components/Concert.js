import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export function Concert() {
    const [concerts, setConcerts] = useState([]);

    useEffect(() => {
        const allConcerts = () => {
            const url = `http://127.0.0.1:5000/tickets/findByCategory/concert`;

            fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
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
                    const concerts_data = [];

                    for (let i = 0; i < data.length; i++) {
                        const eventId = data[i].ticket_id;
                        const concertName = data[i].name;

                        concerts_data.push(
                            <div className="col col-md-5 col-lg-3 mx-4">
                                <div className="event-item">
                                    <Link to={`/event/${eventId}`}>
                                        <img src={`${process.env.PUBLIC_URL}/images/basic-event-photo.jpg`} alt="fest-image"
                                             width="250" height="200"/>
                                        <p className="event-main-text-info">{concertName}</p>
                                    </Link>
                                </div>
                            </div>
                        );

                        setConcerts(concerts_data);
                    }
                })
                .catch((error) => {
                    alert(error);
                });
            return concerts;
        }
        allConcerts();
    }, []);

    return(
        <div className="container mt-4" id="page-content">
            <div className="row">
                <div className="col-12">
                    <h1 className="top-text">Concerts</h1><br/>
                </div>
                {concerts}
            </div>
        </div>
    )
}