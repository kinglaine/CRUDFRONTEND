import React from "react";
import './AddCampusComponentEmptyDatabase.css';
function AddCampusComponentEmptyDatabase({setFormVisible}){
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormVisible(true);
    }
    return (
        <div className="container">
            <h1>All Campuses</h1>
            <p id="notice">There are no campuses registered in the database.</p>
            <button id="addCampusButton" onClick={handleSubmit}>Add Campus</button>
        </div>
    )
}

export default AddCampusComponentEmptyDatabase;