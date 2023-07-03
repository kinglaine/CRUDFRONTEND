import React from "react";
import './AddCampusComponentEmptyDatabase.css';
function AddCampusComponentEmptyDatabase(){
    return (
        <div className="container">
            <h1>All Campuses</h1>
            <p id="notice">There are no campuses registered in the database</p>
            <button id="addCampusButton">Add Campus</button>
        </div>
    )
}

export default AddCampusComponentEmptyDatabase;