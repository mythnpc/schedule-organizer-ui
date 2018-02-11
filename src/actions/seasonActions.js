import axios from "axios"

export function fetchSeason(){
        return function(dispatch){
            axios.get("http://localhost:50562/api/season")
            .then((response) => {
                dispatch({type: "FETCH_SEASON_FULFILLED", payload: response.data})
            })
        }
}