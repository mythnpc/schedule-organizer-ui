import axios from "axios"

export function fetchHeroes(){
        return function(dispatch){
            axios.get("http://localhost:50562/api/heroes")
            .then((response) => {
                dispatch({type: "FETCH_HEROES_FULFILLED", payload: response.data})
            })
        }
}