import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";

export function EventPage() {
    const { eventId } = useParams();

    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState();
    const [info, setInfo] = useState("Some info about event");

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
                    throw new Error(json_data.error);
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

    return(
        <div className="container">
            <div className="row">
                <img src={`${process.env.PUBLIC_URL}/images/basic-event-photo.jpg`} alt="event-photo" style={{ width: '60%'}}/>
                <div className="event-info-wrap col-5 pt-5 text-center">
                    <div className="event-main-text-info">
                        <p>{date}, {place}</p>
                        <p>{price} UAH</p>
                        <button className="basic-button">Order</button>
                    </div>
                </div>

            </div>
            <div className="row"  style={{ width: '60%'}}>
                <div className="col">
                    <h1 className="top-text mt-4" id="event-title">{name}</h1>
                    <h4 className="top-text" id="event-info">{info}</h4>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
    )
}