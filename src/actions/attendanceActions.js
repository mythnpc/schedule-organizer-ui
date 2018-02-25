import axios from "axios"

export function fetchAttendance(){
        return function(dispatch){
            axios.get("http://localhost:50562/api/attendance")
            .then((response) => {
                dispatch({type: "FETCH_ATTENDANCE_FULFILLED", payload: response.data})
            })
        }
}

export function updateAttendance(attendance){
    return function(dispatch){
        let request = {
            url: "http://localhost:50562/api/attendance",
            method: "PUT",
            data: attendance
        }

        axios(request)
        .then((response) => {
            dispatch({type: "UPDATE_ATTENDANCE_FULFILLED", payload: response.data})
        })
    }
}

export function updateSelectedSeason(previousSeason, selectedSeason){
    return function(dispatch, getState){
        var seasons = getState().season.season;
        var exist = seasons.find(x => x.id === selectedSeason);
        if (exist) {
            dispatch({type: "UPDATE_SELECTED_SEASON", selectedSeason: selectedSeason})
          }

    }
}