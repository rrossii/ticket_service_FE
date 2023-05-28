import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export function Theater() {
    const [theaters, setTheaters] = useState([]);

    useEffect(() => {
        const allTheaters = () => {
            const url = `http://127.0.0.1:5000/tickets/findByCategory/theater`;

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
                    const theater = [];

                    for (let i = 0; i < data.length; i++) {
                        const eventId = data[i].ticket_id;
                        const theaterName = data[i].name;
                        const image = data[i].image;

                        theater.push(
                            <div className="col col-md-5 col-lg-3 mx-4">
                                <div className="event-item">
                                    <Link to={`/event/${eventId}`}>
                                        <img src={image} alt="fest-image"
                                             width="250" height="200"/>
                                        <p className="event-main-text-info">{theaterName}</p>
                                    </Link>
                                </div>
                            </div>
                        );

                        setTheaters(theater);
                    }
                })
                .catch((error) => {
                    alert(error);
                });
            return theaters;
        }
        allTheaters();
    }, []);

    return(
        <div className="container mt-4" id="page-content">
            <div className="row">
                <div className="col-12">
                    <h1 className="top-text">Theater</h1><br/>
                </div>
                {theaters}
            </div>
        </div>
    )
}