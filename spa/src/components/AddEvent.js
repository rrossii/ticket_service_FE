import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {isAdmin, categoriesArray, daysArray, hoursArray} from "../utils/Utils";

export function AddEvent() {
    const [name, setName] = useState("");
    const [inputPrice, setInputPrice] = useState();
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [inputQuantity, setInputQuantity] = useState();
    const [quantity, setQuantity] = useState(0);
    const [place, setPlace] = useState("");
    const [info, setInfo] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageName, setImageName] = useState("basic-event-photo.jpg");

    const [year, setYear] = useState(2023);
    const [month, setMonth] = useState(1);
    const [day, setDay] = useState(1);
    const [hour, setHour] = useState(18);

    const navigate = useNavigate();

    if (!isAdmin()) {
        return <h1 className={"m-5 text-center"}><b>Access denied.</b></h1>;
    }

    const handleFileChange = (event) => {
        const img = event.target.files[0];
        setSelectedImage(img);
        setImageName(img.name);
    };

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
            body: JSON.stringify({name, price, category, quantity, date, place, info, imageName}),
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
                                    {daysArray(year, month)}
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
                        <input onChange={handleFileChange} type="file" className="my-3" name="event-photo"/>
                    </form>
                    <input onClick={handleCancel} type="submit" className="my-4" value="Cancel"/>
                    <input onClick={handleSubmit} type="submit" className="my-4" value="Save"/>
                </div>
            </div>
        </div>
    )
}