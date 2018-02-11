import axios from "axios"

export function fetchAttendance(){
        return function(dispatch){
            axios.get("http://localhost:50562/api/attendance")
            .then((response) => {
                dispatch({type: "FETCH_ATTENDANCE_FULFILLED", payload: response.data})
            })
        }
}

export const changeName = name => (dispatch, getState) => {
    dispatch({type: "CHANGE_NAME", payload: name});
}
