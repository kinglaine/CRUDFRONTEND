import React from "react";
import "./CampusComponent.css";

function CampusComponent({campusName, imgUrl}){
    const imgContainer = {
        width: '300px',
        height: '200px',
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return(
        <div id="campusContainer">
            <div style={imgContainer}></div>
            <div id="info">
                <div className="about">
                    <span id="campusName"><a href="">{campusName}</a></span>
                    <span>6 Students</span>
                </div>
                <div id="actions">
                    <a id="edit" href="">Edit</a>
                    <button id="delete">Delete</button>
                </div>
            </div>
        </div>
    )
}
export default CampusComponent;