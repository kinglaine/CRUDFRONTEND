import React from "react";
import '../campusComponents/AddCampusComponentEmptyDatabase.css';
import { Link } from "react-router-dom";
function AddCampusComponentEmptyDatabase(){
    return (
        <div className="container">
            <h1>All Campuses</h1>
            <p id="notice">There are no campuses registered in the database.</p>
            <Link to={"/campuses/addCampus"} id="addCampusButton" color="black">Add Campus</Link>
        </div>
    )
}

export default AddCampusComponentEmptyDatabase;