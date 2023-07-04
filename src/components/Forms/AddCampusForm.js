import React, { useState } from "react";
import "../Forms/AddCampusForm.css"
import axios from "axios";
function AddCampusForm({setFormVisible}) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    
    const handleSubmit = async (e) =>{
        e.preventDefault(); 
        try {
            const response = await axios.post('http://localhost:8081/api/campuses/addcampus', {name, address, imageUrl, description});
            console.log(response.data);
            setFormVisible(false);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div id="formContainer">
            <h1>New Campus Form</h1>
            <p>* All Fields Are Required</p>
            <form className="campusForm" onSubmit={handleSubmit}>
                <input type="text" id="name" required placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input> <br></br>
                <input type="text" id="address" required placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}></input> <br></br>
                <input type="text" id="imageUrl" required placeholder="Image Url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input> <br></br>
                <textarea id="description" placeholder="Description" required value={description} onChange={(e) => setDescription(e.target.value)}></textarea> <br></br>
                <button type="submit" id="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddCampusForm;