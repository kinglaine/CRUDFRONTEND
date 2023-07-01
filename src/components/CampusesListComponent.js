import React from "react";

export default function CampusesList({allCampuses}){
    console.log("LISTING CAMPUSES FROM CAMPUSESLIST COMPONENT");
    return allCampuses? (
        allCampuses.map((item) => {
            return (
                <div  key={item.id}>
                    <p>{item.name}</p>
                </div>
            )
        })
    ) :
    (<h1>Loading campuses....</h1>)
}