import React, { useEffect, useState } from "react";
import "../campusComponents/SingleCampusViewComponent.css";
import axios from "axios";
import StudentListComponent from "../studentComponents/StudentListComponent";
import StudentsListEmptyComponent from "../studentComponents/StudentsListEmptyComponents"
function SingleCampusViewComponent(){
    const currentUrl = "http://localhost:8081/api/campuses"+window.location.pathname;
    console.log("hhe curr url is",currentUrl);
    const [campusData, setCampusData] = useState(null);
    const [studentsData, setStudentsData] = useState(null);
    function getCampusData(){
        try {
            axios.get(currentUrl).then((response) =>{
                setCampusData(response.data);
                console.log("this is the res",response)
            })
        } catch (error) {
            console.log("error");
        }
    }

    function getStudentsData(){
        try {
            axios.get(`${currentUrl}/Students`).then((response) =>{
                setStudentsData(response.data)
                console.log("this is the res studen",response)
            })
        } catch (error) {
            console.log("error");
        }
    }
    useEffect(()=>{
        getCampusData();
        getStudentsData();
    },[]);
    const imgContainer = {
        width: '50%',
        height: '40vh',
        backgroundImage: `url(${campusData?.imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    const imgContainerInvalid = {
        width: '50%',
        height: '40vh',
        textAlign: 'center',
        backgroundColor: 'rgb(77, 81, 81)'
    }
    function isNotImageUrl(url) {
        const imageExtensions = /\.(jpeg|jpg|gif|png|svg)$/i;
        const imagePatterns = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))/i;
      
        return !imageExtensions.test(url) || !imagePatterns.test(url);
    }
    
   
    return (
        <div>
            <div id="singleCampusContainer">
                {isNotImageUrl(campusData?.imageUrl)? <div style={imgContainerInvalid}> <p>[No Campus Image]</p></div> : <div style={imgContainer}></div>}
                <div id="text">
                    <h1>{campusData? campusData.name : 'N/A campus name'}</h1>
                    <p>{campusData? campusData.description: 'N/A campus description'}</p>
                </div>
            </div>
            <div id="addressAndButtons">
                {campusData? <span>{campusData.address}</span>: <span>N/A Address</span>}
                <div id="campusIngleViewButtons">
                    <a href="">Edit</a>
                    <button id="deleteCampusSingleView">Delete</button>
                </div>
            </div>
           {
            studentsData?.length > 0?
            <div>
                 <div id="AddStudentI" style={{display:'flex', padding: '1%', justifyContent:'space-between'}}>
                <h1>Students on campus</h1>
                <button id="addStudentsButon">Add Students</button>
                </div>
                <div id="studentOnCampus" style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'20px', padding:'1%'}}>
                    <StudentListComponent studentsData={studentsData} campusName={campusData?.name}></StudentListComponent>
                </div>
            </div>:
            <StudentsListEmptyComponent></StudentsListEmptyComponent>
           }
        </div>
    )
}

export default SingleCampusViewComponent;