import React from "react";
import '../campusComponents/AddCampusComponent.css';
import { Link } from "react-router-dom";
function AddCampusComponent() {
    return(
        <div id="container">
            <h1 id="header">All Campuses</h1>
            <Link to={"/campuses/addCampus"} id="addCampusButton" color="black">Add Campus</Link>
        </div>
    );
}

export default AddCampusComponent;