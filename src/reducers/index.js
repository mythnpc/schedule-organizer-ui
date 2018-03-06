import { combineReducers } from "redux"

import attendance from "./attendanceReducer"
import season from "./seasonReducer"
import hero from "./heroReducer"


export default combineReducers({
    attendance,
    season,
    hero
})