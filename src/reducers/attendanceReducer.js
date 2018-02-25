import { combineReducers } from 'redux'
import _ from 'lodash';

let initialState = {
    fetching: false,
    fetched: false,
    error: null,
    attendance: [],
    selectedSeason: 1
}

const attendance = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ATTENDANCE_PENDING": {
            return { ...state, fetching: true }
            break;
        }
        case "FETCH_ATTENDANCE_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
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
        case "UPDATE_ATTENDANCE_FULFILLED": {
            var response = action.payload;
            var attendanceClone = JSON.parse(JSON.stringify(state.attendance));
            var updatedAttendance = _.find(attendanceClone, x => x.id === response.id);
            updatedAttendance.fireDragonHardMode = response.fireDragonHardMode;
            updatedAttendance.iceDragonHardMode = response.iceDragonHardMode;
            updatedAttendance.poisonDragonHardMode = response.poisonDragonHardMode;
            updatedAttendance.blackDragonHardMode = response.blackDragonHardMode;

            return {
                ...state,
                fetching: false,
                fetched: true,
                attendance: attendanceClone
            }
            break;
        }
        case "UPDATE_SELECTED_SEASON": {
            return { ...state, selectedSeason: action.selectedSeason }
            break;
        }
    }
    return state;
};

export default attendance;