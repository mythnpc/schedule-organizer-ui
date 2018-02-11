export default function reducer(state={
    fetching: false,
    fetched: false,
    error: null,
    season: []
}, action){
    switch(action.type){
        case "FETCH_SEASON_PENDING":{
            return {...state, fetching: true}
            break;
        }
        case "FETCH_SEASON_REJECTED": {
            return {...state, fetching: false, error: action.payload}
            break;
        }
        case "FETCH_SEASON_FULFILLED": {
            return {
                ...state, 
                fetching: false, 
                fetched: true, 
                season: action.payload
            }
            break;
        }
    }
    return state;
};