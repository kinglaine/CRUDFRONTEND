import { combineReducers } from "redux";
import campusReducer from "./campuses/campuses.reducer";

const rootReducer = combineReducers({
    campuses: campusReducer
});

export default rootReducer;