import campusActionType from "./campuses.type";

export const INITIAL_CAMPUS_STATE = {
    allCampuses: []
};

const campusReducer = (state = INITIAL_CAMPUS_STATE, {type, payload}) => {
    console.log("CAMPUS REDUCER IS HANDLING FETCH ALL CAMPUSES ACTION");
    switch (type) {
        case campusActionType.FETCH_ALL_CAMPUSES:
            return {...state, payload};
        default:
            return state;
    }
}

export default campusReducer;
