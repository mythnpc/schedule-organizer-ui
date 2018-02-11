export default function reducer(state={
    fetching: false,
    fetched: false,
    error: null,
    attendance: [],
    name: "Jawsh"
}, action){
    switch(action.type){
        case "FETCH_ATTENDANCE_PENDING":{
            return {...state, fetching: true}
            break;
        }
        case "FETCH_ATTENDANCE_REJECTED": {
            return {...state, fetching: false, error: action.payload}
            break;
        }
        case "FETCH_ATTENDANCE_FULFILLED": {
            return {
                ...state, 
                fetching: false, 
                fetched: true, 
                attendance: action.payload
            }
            break;
        }
        case "CHANGE_NAME":{
            return {
                ...state,
                name: action.payload
            }
        }
    }
    return state;
};