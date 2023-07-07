import React from "react";
import { Link } from "react-router-dom";
import './StudenComponent.css'
function StudenComponent({campusName, StudentName, imgUrl}){
    //check if image is valid
    function isNotImageUrl(url) {
        const imageExtensions = /\.(jpeg|jpg|gif|png|svg)$/i;
        const imagePatterns = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))/i;
        return !imageExtensions.test(url) || !imagePatterns.test(url);
    }
    const imgContainer = {
        width: '100%',
        height: '30vh',
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    const imgContainerInvalid = {
        width: '100%',
        height: '30vh',
        textAlign: 'center',
        backgroundColor: 'grey'
    }
    
    return(
        <div id="studentContainer">
            {isNotImageUrl(imgUrl)? <div style={imgContainerInvalid}> <p>[No Campus Image]</p></div> : <div style={imgContainer}></div>}
            <div id="studentInfo">
                <Link>{StudentName? StudentName : 'Student Name'}</Link>
                <Link>{campusName? campusName: 'Campus Name'}</Link>
            </div>
        </div>
    )
}

export default StudenComponent;