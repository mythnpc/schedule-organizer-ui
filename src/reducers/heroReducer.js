export default function reducer(state={
    fetching: false,
    fetched: false,
    error: null,
    heroes: []
}, action){
    switch(action.type){
        case "FETCH_HEROES_PENDING":{
            return {...state, fetching: true}
            break;
        }
        case "FETCH_HEROES_REJECTED": {
            return {...state, fetching: false, error: action.payload}
            break;
        }
        case "FETCH_HEROES_FULFILLED": {
            return {
                ...state, 
                fetching: false, 
                fetched: true, 
                heroes: action.payload
            }
            break;
        }
    }
    return state;
};