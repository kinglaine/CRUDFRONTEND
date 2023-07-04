import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampusesThunk } from "../redux/campuses/campuses.action";
import CampusesList from "../components/CampusesListComponent";
import AddCampusComponent from "../components/AddCampusComponent";
import AddCampusComponentEmptyDatabase from "../components/AddCampusComponentEmptyDatabase";
import AddCampusForm from "../components/Forms/AddCampusForm";

function CampusPage(){
    const [formVisible, setFormVisible] = useState(false);
    useEffect(() => {
        console.log("FETCH ALL CAMPUSES CALLED IN USEFFECT");
        fetchAllCampuses();
    }, []);

    const allCampuses = useSelector((state) => state.campuses.payload);
    const dispatch = useDispatch();
    const fetchAllCampuses = () => {
        console.log("RUNNING IDSPATHC FROM FETCHALLCAPUSES");
        return dispatch(fetchAllCampusesThunk());
    };
    
    return (
        <div>
            {
                formVisible? <AddCampusForm setFormVisible = {setFormVisible}></AddCampusForm> :
                allCampuses?
                    <div>
                        <AddCampusComponent setFormVisible = {setFormVisible}></AddCampusComponent>
                        <div style={{marginTop: '10px', columnCount: 2}}>
                            <CampusesList allCampuses={allCampuses}></CampusesList>
                        </div>
                    </div> :
                    <AddCampusComponentEmptyDatabase/>            
            }
        </div>
    );
};

export default CampusPage;