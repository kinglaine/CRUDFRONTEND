import React, { useEffect, useState } from "react";
import CampusComponent from "../campusComponents/CampusComponent.js";
export default function CampusesList({allCampuses, setCampusListChanged, campusListChanged}){
    console.log("LISTING CAMPUSES FROM CAMPUSESLIST COMPONENT");
    
    return allCampuses? (
        allCampuses.map((item) => {
            return (
                <div  key={item.id} style={{marginBottom: '10px', flexBasis: '50%', boxSizing: 'border-box', padding:'10px'}}>
                    <CampusComponent campusName={item.name} imgUrl={item.imageUrl} setCampusListChanged={setCampusListChanged} campusListChanged={campusListChanged}></CampusComponent>
                </div>
            )
        })
    ) :
    (<h1>Loading campuses....</h1>)
}