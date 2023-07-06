import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampusesThunk } from "../redux/campuses/campuses.action";
import CampusesList from "../components/CampusesListComponent";
import AddCampusComponent from "../components/AddCampusComponent";
import AddCampusComponentEmptyDatabase from "../components/AddCampusComponentEmptyDatabase";
import AddCampusForm from "../components/Forms/AddCampusForm";

function CampusPage(){
    const [formVisible, setFormVisible] = useState(false);

    const fetchAllCampuses = () => {
        console.log("RUNNING IDSPATHC FROM FETCHALLCAPUSES");
        return dispatch(fetchAllCampusesThunk());
    };

    const dispatch = useDispatch();
    let allCampuses = useSelector((state) => state.campuses.allCampuses);
    useEffect(() => {
        console.log("FETCH ALL CAMPUSES CALLED IN USEFFECT");
        fetchAllCampuses();
    }, [formVisible]);
    
    return (
        <div>
            {
                formVisible?(<AddCampusForm setFormVisible = {setFormVisible}></AddCampusForm>):
                (allCampuses.length > 0?
                    (<div>
                        <AddCampusComponent setFormVisible = {setFormVisible}></AddCampusComponent>
                        <div style={{display: 'flex', flexWrap:'wrap'}}>
                            <CampusesList allCampuses={allCampuses}></CampusesList>
                        </div>
                    </div> ):
                (<AddCampusComponentEmptyDatabase setFormVisible = {setFormVisible}/>))      
            }
        </div>
    );
};

export default CampusPage;