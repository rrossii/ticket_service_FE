import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";

export function Festival() {
    const [festivals, setFestivals] = useState([]);

    useEffect(() => {
        const allFestivals = () => {
            const url = `http://127.0.0.1:5000/tickets/findByCategory/festival`;

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
                    const fests = [];

                    for (let i = 0; i < data.length; i++) {
                        const eventId = data[i].ticket_id;
                        const festivalName = data[i].name;
                        const image = data[i].image;

                        fests.push(
                            <div className="col col-md-5 col-lg-3 mx-4">
                                <div className="event-item">
                                    <Link to={`/event/${eventId}`}>
                                        <img src={image} alt="fest-image"
                                             width="250" height="200"/>
                                        <p className="event-main-text-info">{festivalName}</p>
                                    </Link>
                                </div>
                            </div>
                        );

                        setFestivals(fests);
                    }
                })
                .catch((error) => {
                    alert(error);
                });

            return festivals;
        }
        allFestivals();
    }, []);

    return(
        <div className="container mt-4" id="page-content">
            <div className="row">
                <div className="col-12">
                    <h1 className="top-text">Festivals</h1><br/>
                </div>
                {festivals}
            </div>
        </div>
    )
}