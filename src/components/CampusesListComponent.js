import React from "react";
import CampusComponent from "./CampusComponent";
export default function CampusesList({allCampuses}){
    console.log("LISTING CAMPUSES FROM CAMPUSESLIST COMPONENT");
    return allCampuses? (
        allCampuses.map((item) => {
            return (
                <div  key={item.id} style={{marginBottom: '10px'}}>
                    <CampusComponent campusName={item.name} imgUrl={item.imageUrl}></CampusComponent>
                </div>
            )
        })
    ) :
    (<h1>Loading campuses....</h1>)
}