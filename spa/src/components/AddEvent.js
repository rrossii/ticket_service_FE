import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {isAdmin} from "../utils/Utils";

export function AddEvent() {
    const [name, setName] = useState("");
    const [inputPrice, setInputPrice] = useState();
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [inputQuantity, setInputQuantity] = useState();
    const [quantity, setQuantity] = useState(0);
    const [place, setPlace] = useState("");
    const [info, setInfo] = useState("");

    const [year, setYear] = useState(2023);
    const [month, setMonth] = useState(1);
    const [day, setDay] = useState(1);
    const [hour, setHour] = useState(18);

    const navigate = useNavigate();

    if (!isAdmin()) {
        return <h1 className={"m-5 text-center"}><b>Access denied.</b></h1>;
    }

    const getDaysInMonth = (y, m) => {
        const date = new Date(y, m, 1);
        date.setMonth(date.getMonth() + 1);
        date.setDate(date.getDate() - 1);
        return date.getDate();
    }

    const daysArray = () => {
        const daysInMonth = getDaysInMonth(year, month);
        const days = []

        for (let i = 1; i <= daysInMonth; i++) {
            days.push(<option type="number" value={i}>{i}</option>);
        }

        return days;
    }

    const hoursArray = () => {
        const hours = []
        for (let i = 0; i <= 23; i++) {
            hours.push(<option type="number" value={i}>{i}:00</option>);
        }

        return hours;
    }

    const categoriesArray = () => {
        const categ = ["Theater", "Festival", "Sport", "Concert"];
        const res = [];

        for (let i = 0; i < categ.length; i++) {
            res.push(<option type="string" value={categ[i]}>{categ[i]}</option>);
        }
        return res;
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        const url = `http://127.0.0.1:5000/tickets`
        const authToken = localStorage.getItem('token')

        setPrice(parseInt(inputPrice, 10));
        setQuantity(parseInt(inputQuantity, 10));

        const date1 = new Date(year, month, day, hour);
        const date = date1.getFullYear().toString() + '-' + (date1.getMonth() + 1).toString() + '-' + date1.getDate().toString() +
            ' ' + date1.getHours().toString() + ':' + date1.getMinutes().toString() + ':' + date1.getSeconds().toString()

        fetch(url, {
            method: "POST",
            body: JSON.stringify({name, price, category, quantity, date, place, info}),
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
            .then(() => {
                navigate("/admin") // зробити потім щоб перекидало на сторінку подій
            })
            .catch((error) => {
                alert(error);
            });


    }
    const handleCancel = () => {
        navigate("/admin")
    }

    return(
        <div className="container text-center" id="add-event">
            <div className="row">
                <div className="col-md-7">
                    <form>
                        <h1 className="top-text">Add event</h1><br/>
                        <input onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="Name" required/><br/>
                        <input onChange={e => setPlace(e.target.value)} type="text" className="form-control" placeholder="Place" required/><br/>
                        <input onChange={e => setInputPrice(e.target.value)} type="number" className="form-control" placeholder="Price" required/><br/>
                        <select onChange={e => setCategory(e.target.value)} className="form-control" placeholder="Category" required>
                            {categoriesArray()}
                        </select><br/>
                        <input onChange={e => setInputQuantity(e.target.value)} type="number" className="form-control" placeholder="Quantity" required/><br/>
                        <input onChange={e => setInfo(e.target.value)} type="text" className="form-control" placeholder="Information" required/><br/>

                        <div className="calendar">
                            <div className="calendar-header">
                                <select onChange={e => setYear(e.target.value)} value={year} className="year-dropdown" required>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                </select>
                                <select onChange={e => setMonth(e.target.value)} value={month} className="month-dropdown mt-3" required>
                                    <option value="0">January</option>
                                    <option value="1">February</option>
                                    <option value="2">March</option>
                                    <option value="3">April</option>
                                    <option value="4">May</option>
                                    <option value="5">June</option>
                                    <option value="6">July</option>
                                    <option value="7">August</option>
                                    <option value="8">September</option>
                                    <option value="9">October</option>
                                    <option value="10">November</option>
                                    <option value="11">December</option>
                                </select>
                                <select onChange={e => setDay(e.target.value)} value={day} className="day-dropdown" required>
                                    {daysArray()}
                                </select>
                                <br/>
                                <select onChange={e => setHour(e.target.value)}  className="hour-dropdown" placeholder="Hour" required>
                                    {hoursArray()}
                                </select>
                            </div>
                        </div>

                    </form>
                </div>
                <div className="col-md-5">
                    <form>
                        <img src={`${process.env.PUBLIC_URL}/images/basic-photo-icon.jpg`} alt="no-uploaded-photo" width="70%" height="50%"/>
                        <input type="file" className="my-3" name="event-photo"/>
                        <input type="submit" value="Upload a photo"/>
                    </form>
                    <input onClick={handleCancel} type="submit" className="my-4" value="Cancel"/>
                    <input onClick={handleSubmit} type="submit" className="my-4" value="Save"/>
                </div>
            </div>
        </div>
    )
}