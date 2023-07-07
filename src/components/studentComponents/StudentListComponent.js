import React from "react";
import StudenComponent from "./StudentComponent";

function StudentListComponent({studentsData, campusName}){
    return (
        studentsData?.map((item) => {
            return(
                <div key={item.email}>
                    <StudenComponent campusName={campusName} StudentName={item.firstName+" "+item.lastName} imgUrl={item.imageUrl}></StudenComponent>
                </div>
            )
        }) 
    )
}

export default StudentListComponent;