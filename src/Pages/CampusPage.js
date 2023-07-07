import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampusesThunk } from "../redux/campuses/campuses.action";
import CampusesList from "../components/campusComponents/CampusesListComponent";
import AddCampusComponent from "../components/campusComponents/AddCampusComponent";
import AddCampusComponentEmptyDatabase from "../components/campusComponents/AddCampusComponentEmptyDatabase";

function CampusPage(){
    const [campusListChanged, setCampusListChanged] = useState(false);
    const fetchAllCampuses = () => {
        console.log("RUNNING IDSPATHC FROM FETCHALLCAPUSES");
        return dispatch(fetchAllCampusesThunk());
    };

    const dispatch = useDispatch();
    let allCampuses = useSelector((state) => state.campuses.allCampuses);
    useEffect(() => {
        console.log("FETCH ALL CAMPUSES CALLED IN USEFFECT");
        fetchAllCampuses();
    }, [campusListChanged]);
    
    return (
        <div>
            {
                (allCampuses.length > 0?
                    (<div>
                        <AddCampusComponent></AddCampusComponent>
                        <div style={{display: 'flex', flexWrap:'wrap'}}>
                            <CampusesList allCampuses={allCampuses} setCampusListChanged={setCampusListChanged} campusListChanged={campusListChanged}></CampusesList>
                        </div>
                    </div> ):
                (<AddCampusComponentEmptyDatabase/>))      
            }
        </div>
    );
};

export default CampusPage;