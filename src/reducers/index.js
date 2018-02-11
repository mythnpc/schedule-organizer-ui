import { combineReducers } from "redux"

import attendance from "./attendanceReducer"
import season from "./seasonReducer"

export default combineReducers({
    attendance,
    season
})