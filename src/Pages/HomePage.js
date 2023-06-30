import React from "react";

function HomePage({setPageName}){
    setPageName("Home");
    return(
        <div style={{textAlign:'center', marginTop: '20%', fontSize: 50}}>
            <span>WELCOME TO CAMPUS MANAGER!</span>
        </div>
    );
}

export default HomePage;