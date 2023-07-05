import React from "react";
import "./CampusComponent.css";
import axios from "axios";
function CampusComponent({campusName, imgUrl}){
    //check if image is valid
    function isNotImageUrl(url) {
        const imageExtensions = /\.(jpeg|jpg|gif|png|svg)$/i;
        const imagePatterns = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))/i;
      
        return !imageExtensions.test(url) || !imagePatterns.test(url);
    }
    const imgContainer = {
        width: '300px',
        height: '200px',
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    const imgContainerInvalid = {
        width: '300px',
        height: '200px',
        textAlign: 'center',
        backgroundColor: 'rgb(193, 190, 190)'
    }
    const handleDelete = async (e) => {
        try {
            await axios.delete(`http://localhost:8081/api/campuses/RemoveCampus/${campusName}`);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div id="campusContainer">
            {isNotImageUrl(imgUrl)? <div style={imgContainerInvalid}> <p>[No Campus Image]</p></div> : <div style={imgContainer}></div>}
            <div id="info">
                <div className="about">
                    <span id="campusName"><a href="">{campusName}</a></span>
                    <span>6 Students</span>
                </div>
                <div id="actions">
                    <a id="edit" href="">Edit</a>
                    <button id="delete" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}
export default CampusComponent;