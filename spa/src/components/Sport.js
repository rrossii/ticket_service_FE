import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export function Sport() {
    const [sportEvents, setSportEvents] = useState([]);

    useEffect(() => {
        const allSportEvents = () => {
            const url = `http://127.0.0.1:5000/tickets/findByCategory/sport`;

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
                    const sport = [];

                    for (let i = 0; i < data.length; i++) {
                        const eventId = data[i].ticket_id;
                        const sportEventName = data[i].name;
                        const image = data[i].image;

                        sport.push(
                            <div className="col col-md-5 col-lg-3 mx-4">
                                <div className="event-item">
                                    <Link to={`/event/${eventId}`}>
                                        <img src={image} alt="fest-image"
                                             width="250" height="200"/>
                                        <p className="event-main-text-info">{sportEventName}</p>
                                    </Link>
                                </div>
                            </div>
                        );

                        setSportEvents(sport);
                    }
                })
                .catch((error) => {
                    alert(error);
                });
            return sportEvents;
        }
        allSportEvents();
    }, []);

    return(
        <div className="container mt-4" id="page-content">
            <div className="row">
                <div className="col-12">
                    <h1 className="top-text">Sport Events</h1><br/>
                </div>
                {sportEvents}
            </div>
        </div>
    )
}