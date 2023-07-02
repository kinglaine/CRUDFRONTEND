import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampusesThunk } from "../redux/campuses/campuses.action";
import CampusesList from "../components/CampusesListComponent";

function CampusPage(){
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
        <div style={{marginTop: '10px', columnCount: 2}}>
            <CampusesList allCampuses={allCampuses}></CampusesList>
        </div>
    );
};

export default CampusPage;