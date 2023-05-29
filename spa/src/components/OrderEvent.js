import {isAdmin} from "../utils/Utils";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export function OrderEvent() {
    const {eventId} = useParams();

    const [quantity, setQuantity] = useState(0);
    const [priceForOneTicket, setPriceForOneTicket] = useState(0);
    const [price, setPrice] = useState(0);
    const [eventOrdered, setEventOrdered] = useState(false);
    const [eventBooked, setEventBooked] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://127.0.0.1:5000/tickets/${eventId}`
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
                setPriceForOneTicket(data.price);
            })
            .catch((error) => {
                alert(error);
            });
    }, [eventId]); // or with eventId

    if (isAdmin()) {
        return <h1 className={"m-5 text-center"}><b>Access denied.</b></h1>;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let url;
        if (eventOrdered) {
            url = `http://127.0.0.1:5000/tickets/buy/${eventId}`
        } if (eventBooked) {
            url = `http://127.0.0.1:5000/tickets/book/${eventId}`
        }

        const user_id = parseInt(localStorage.getItem("user_id"), 10);
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({quantity, user_id})
        })
            .then(async response => {
                if (!response.ok) {
                    const json_data = await response.json();
                    throw new Error(json_data.message);
                }
                return response.json()
            })
            .catch((error) => {
                alert(error);
            });

        navigate("/")

    }

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity);
        setPrice(prevPrice => newQuantity * priceForOneTicket);
    };

    const handleOrder = () => {
        setEventOrdered(true);
    }
    const handleBooking = () => {
        setEventBooked(true);
    }


    return(
        <div className="container">
            <div className="row ">
                <div className="col-12 text-center text-md-start">
                    <form onSubmit={handleSubmit}>
                        <h1 className="top-text mt-4">Order event</h1><br/>
                        <input onChange={handleQuantityChange} defaultValue={0} type="number" className="form-control mt-3" placeholder="Quantity"/><br/>
                        {quantity > 1 ?
                            (<p className="informative-grey-text mt-4">{quantity} tickets</p>)
                            :
                            (<p className="informative-grey-text mt-4">{quantity} ticket</p>)
                        }
                        <p className="informative-grey-text">Total: {price} UAH</p>
                        <div>
                            <input onClick={handleOrder} type="submit" className="order-button" value="BUY"/>
                            <input onClick={handleBooking} type="submit" className="order-button" value="BOOK"/><br/>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )
}