import {useNavigate, useParams} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import {isAdmin} from "../utils/Utils";
import {DeleteEvent} from "./DeleteEvent";

export function EventPage() {
    const ifAdmin = isAdmin();

    const { eventId } = useParams();

    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState();
    const [info, setInfo] = useState("Some info about event");

    const navigate = useNavigate();

    const url = `http://127.0.0.1:5000/tickets/${eventId}`

    useEffect(() => {
        fetch(url, {
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
                return response.json()
            })
            .then(data => {
                setName(data.name);
                setPrice(data.price);
                setPlace(data.place);
                setDate(data.date);
                setInfo(data.info);
            })
            .catch((error) => {
                alert(error);
            });
    }, [eventId]);

    const handleUpdateEventClick = () => {
        navigate(`/update-event/${eventId}`);
    }
    const handleDeleteEventClick = () => {
        const confirmed = window.confirm("Are you sure you want to delete this event? This can't be undone.");
        if (confirmed) {
            DeleteEvent(eventId);
            navigate("/");
        }
    }

    return(
        <div className="container">
            <div className="row ">
                <div className="col-12 col-md-9 text-center text-md-start">
                    <img src={`${process.env.PUBLIC_URL}/images/basic-event-photo.jpg`} alt="event-photo" style={{ width: '70%'}}/>
                </div>
                <div className="col-12 col-md-3 pt-5 mt-3 me-1 me-md-0 mt-md-0 text-center event-info-wrap">
                    <div className="event-main-text-info">
                        <p>{date}, {place}</p>
                        <p>{price} UAH</p>
                        <button className="basic-button">Order</button>
                    </div>
                </div>

            </div>
            <div className="row" style={{ width: '70%'}}>
                <div className="col">
                    <h1 className="top-text mt-4" id="event-title">{name}</h1>
                    <h4 className="top-text" id="event-info">{info}</h4>
                    <br/>
                    <br/>
                    <br/>
                    {ifAdmin ? (
                            <div className={"justify-content-between"}>
                                <button onClick={handleUpdateEventClick} className="basic-button">Update event info</button>
                                <button onClick={handleDeleteEventClick} className="delete-button p-2" >Delete event</button>
                            </div>
                        ) : (
                            <></>
                    )}
                </div>
            </div>
        </div>
    )
}