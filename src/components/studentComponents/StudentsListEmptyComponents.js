import React from "react";
import "./StudentsListEmptyComponent.css"
function StudentsListEmptyComponent(){
    return(
        <div style={{textAlign:'center'}}>
            <h1>Students on campus</h1>
            <p>Thre are no students currently registerres to this campus.</p>
            <button  id="addStudentsButonOnEmpty">Add Students</button>
        </div>
    )
}

export default StudentsListEmptyComponent;