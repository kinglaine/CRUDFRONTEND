import axios from "axios";
import campusActionType from "./campuses.type";

export const fetchAllCampuses = (payload) => {
    console.log("FETCH ALL CAMPUSES ACTION");
    return {
        type: campusActionType.FETCH_ALL_CAMPUSES,
        payload: payload
    };
};

export const fetchAllCampusesThunk = () =>{
    return async (dispatch) => {
        try {
            console.log("FETCH ALL CAMPUSES THUNK IS CALLED");
            const response = await axios.get("http://localhost:8081/api/campuses");
            console.log("FETCH ALL CAMPUSES THUNK COMPLETED");
            dispatch(fetchAllCampuses(response.data));
        } catch (error) {
            console.log(error);
        }
    };
};