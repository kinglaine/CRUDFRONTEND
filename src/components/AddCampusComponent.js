import React from "react";
import './AddCampusComponent.css';
function AddCampusComponent({setFormVisible}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormVisible(true);
    }
    return(
        <div id="container">
            <h1 id="header">All Campuses</h1>
            <button onClick={handleSubmit} id="addCampusButton">Add Campus</button>
        </div>
    );
}

export default AddCampusComponent;