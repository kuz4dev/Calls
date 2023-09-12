const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    roomID: null,
    userName: null,
    userID: null
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                roomID: action.roomID,
                userName: action.userName,
                userID: action.userID,
            };
        }
        default:
            return state;
    };
};

export const setUserData = (roomID, userName, userID) => ({ type: SET_USER_DATA, roomID, userName, userID });

export default authReducer;