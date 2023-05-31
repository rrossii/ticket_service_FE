import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {categoriesArray, findCategoryNameByItsId} from "../utils/Utils";

export function UpdateEvent() {
    const { eventId } = useParams();

    const [defaultName, setDefaultName] = useState("");
    const [defaultPrice, setDefaultPrice] = useState(0);
    const [defaultCategory, setDefaultCategory] = useState("");
    const [defaultQuantity, setDefaultQuantity] = useState(0);
    const [defaultPlace, setDefaultPlace] = useState("");
    const [defaultStatus, setDefaultStatus] = useState("");
    const [defaultInfo, setDefaultInfo] = useState("");
    const [defaultDate, setDefaultDate] = useState();
    const [defaultImageName, setDefaultImageName] = useState("basic-event-photo.jpg");

    const [name, setName] = useState("");
    const [inputPrice, setInputPrice] = useState("");
    const [category, setCategory] = useState("");
    const [inputQuantity, setInputQuantity] = useState("");
    const [place, setPlace] = useState("");
    const [status, setStatus] = useState("");
    const [info, setInfo] = useState("");
    const [date, setDate] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageName, setImageName] = useState("");

    const navigate = useNavigate();

    const url = `http://127.0.0.1:5000/tickets/${eventId}`

    const getEventData = () => {
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
                setDefaultName(data.name);
                setDefaultPrice(data.price);
                setDefaultPlace(data.place);
                setDefaultCategory(findCategoryNameByItsId(data.category_id));
                setDefaultQuantity(data.quantity);
                setDefaultStatus(data.status);
                setDefaultDate(data.date);
                setDefaultInfo(data.info);
                setDefaultImageName(data.image.replace("/images/", ""));
            })
            .catch((error) => {
                alert(error);
            });
    }
    getEventData();

    const handleSubmit = (event) => {
        event.preventDefault();

        const authToken = localStorage.getItem('token')

        const updatedName = name || defaultName;
        const updatedPrice = parseInt(inputPrice, 10) || defaultPrice;
        const updatedCategory = category || defaultCategory;
        const updatedQuantity = parseInt(inputQuantity, 10) || defaultQuantity;
        const updatedPlace = place || defaultPlace;
        const updatedStatus = status || defaultStatus;
        const updatedInfo = info || defaultInfo;
        const updatedDate = date || defaultDate;
        const updatedImageName = imageName || defaultImageName;

        fetch(url, {
            method: "PUT",
            body: JSON.stringify({updatedName, updatedPrice, updatedCategory, updatedQuantity, updatedDate, updatedPlace, updatedStatus, updatedInfo, updatedImageName}),
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
                navigate(`/event/${eventId}`)
            })
            .catch((error) => {
                alert(error);
            });

    }
    const handleCancel = () => {
        navigate("/");
    }

    const handleFileChange = (event) => {
        const img = event.target.files[0];
        setSelectedImage(img);
        setImageName(img.name);
    };

    return(
        <div className="container text-center" id="update-profile-info">
            <div className="row">
                <div className="col-md-7">
                    <form>
                        <h1 className="top-text mb-4">Edit event information</h1><br/>
                        <label className="text-left mt-2" htmlFor="myInput">Event name</label>
                        <input onChange={e => setName(e.target.value)} defaultValue={defaultName} type="text" className="form-control" placeholder="Name"/><br/>

                        <label className="text-left mt-2" htmlFor="myInput">Place</label>
                        <input onChange={e => setPlace(e.target.value)} defaultValue={defaultPlace} type="text" className="form-control" placeholder="Place"/><br/>

                        <label className="text-left mt-2" htmlFor="myInput">Price</label>
                        <input onChange={e => setInputPrice(e.target.value)} defaultValue={defaultPrice} type="number" className="form-control" placeholder="Price"/><br/>

                        <label className="text-left mt-2" htmlFor="myInput">Category</label>
                        <select onChange={e => setCategory(e.target.value)} defaultValue={defaultCategory} className="form-control" placeholder="Category">
                            {categoriesArray()}
                        </select><br/>

                        <label className="text-left mt-2" htmlFor="myInput">Quantity</label>
                        <input onChange={e => setInputQuantity(e.target.value)} defaultValue={defaultQuantity} type="number" className="form-control" placeholder="Quantity"/><br/>

                        <label className="text-left mt-2" htmlFor="myInput">Status</label>
                        <select onChange={e => setStatus(e.target.value)} defaultValue={defaultStatus} type="text" className="form-control" placeholder="Status">
                            <option value="available">Available</option>
                            <option value="sold out">Sold out</option>
                        </select><br/>

                        <label className="text-left mt-2" htmlFor="myInput">Information</label>
                        <input onChange={e => setInfo(e.target.value)} defaultValue={defaultInfo} type="text" className="form-control" placeholder="Information"/><br/>
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