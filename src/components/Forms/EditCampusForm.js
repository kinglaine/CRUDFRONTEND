import React,{useState} from "react";
import "../Forms/AddCampusForm.css"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import AddStudentToCampus from "./AddStudentToCampus";
function EditCampusForm(){
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const currentUrl = "http://localhost:8081/api"+window.location.pathname;
    console.log(currentUrl);
    const handleSave = async (e) =>{
        try {
            e.preventDefault();
            await axios.put(currentUrl, {name, address, imageUrl, description});
            navigate('/campuses');
        } catch (error) {
            console.error(error);
        }
    }
    return(
        <div>
            <div id="formContainer">
                <h1>Edit Campus Form</h1>
                <p>* All Fields Are Required</p>
                <form className="campusForm" onSubmit={handleSave}>
                    <input type="text" id="name" required placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input> <br></br>
                    <input type="text" id="address" required placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}></input> <br></br>
                    <input type="text" id="imageUrl" required placeholder="Image Url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input> <br></br>
                    <textarea id="description" placeholder="Description" required value={description} onChange={(e) => setDescription(e.target.value)}></textarea> <br></br>
                    <button type="submit" id="submit">Save Changes</button>
                </form>
            </div>
            <AddStudentToCampus></AddStudentToCampus>
        </div>
    )
}

export default EditCampusForm;