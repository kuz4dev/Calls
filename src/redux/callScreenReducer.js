const CHANGE_REMEMBERING_NAME = 'CHANGE_REMEMBERING_NAME';
const TOGGLE_MICRO = 'TOGGLE_MICRO';
const TOGGLE_VIDEO = 'TOGGLE_VIDEO';
const CHANGE_USERNAME = 'CHANGE_USERNAME';
const CREATE_ROOM = 'CREATE_ROOM';
const SET_USER = 'SET_USER';

const initialState = {
    rooms: [
        {
            roomID: 'b8b0cedf-806b-4431-a202-91e1cfccd8f8',
            users: [
                {
                    userID: 2,
                    userName: 'Igor',
                    isMicro: false,
                    isVideo: false,
                    isRememberName: false,
                },
                {
                    userID: 3,
                    userName: 'Masha',
                    isMicro: false,
                    isVideo: false,
                    isRememberName: false,
                },
                {
                    userID: 4,
                    userName: 'Kris',
                    isMicro: false,
                    isVideo: false,
                    isRememberName: false,
                },
            ]
        }
    ]
};

const callScreenReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_REMEMBERING_NAME: {
            return {
                ...state,
                rooms: action.isRememberName,
            };
        }
        case TOGGLE_MICRO: {
            return {
                ...state,
                isMicro: action.isMicro,
            };
        }
        case TOGGLE_VIDEO: {
            return {
                ...state,
                isVideo: action.isVideo,
            };
        }
        case CHANGE_USERNAME: {
            return {
                ...state,
                userName: action.newName,
            };
        }
        case CREATE_ROOM: {
            return {
                ...state,
                rooms: [...state.rooms, { roomID: action.roomID, users: { userID: action.user.userID, userName: action.user.userName, isMicro: action.user.isMicro, isVideo: action.user.isVideo, isRememberName: action.user.isRememberName } }],
            }
        }
        default:
            return state;
    };
};

export const changeRememberingName = (isRememberName, userID) => ({ type: CHANGE_REMEMBERING_NAME, isRememberName, userID });
export const toggleMicro = (isMicro, userID) => ({ type: TOGGLE_MICRO, isMicro, userID });
export const toggleVideo = (isVideo, userID) => ({ type: TOGGLE_VIDEO, isVideo, userID });
export const changeUsername = (newName) => ({ type: CHANGE_USERNAME, newName });
export const createRoom = (roomID, user) => ({ type: CREATE_ROOM, roomID, user })

export default callScreenReducer;