import { getTime } from "./../modules/getTime";

const ADD_MESSAGE = 'ADD-MESSAGE';
// const ADD_REACTION_TO_MESSAGE = 'ADD_REACTION_TO_MESSAGE';

const initialState = {
    messagesData: [
        { id: 0, text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis maxime doloribus ratione incidunt, sint minus eos eius ea excepturi quisquam, consectetur perferendis, cupiditate maiores tenetur molestiae saepe non explicabo debitis.', time: '11:41' },
        { id: 1, text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis maxime doloribus ratione incidunt, sint minus eos eius ea excepturi quisquam, consectetur perferendis, cupiditate maiores tenetur molestiae saepe non explicabo debitis.', time: '11:41' },
        { id: 2, text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis maxime doloribus ratione incidunt, sint minus eos eius ea excepturi quisquam, consectetur perferendis, cupiditate maiores tenetur molestiae saepe non explicabo debitis.', time: '11:41' },
        { id: 3, text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis maxime doloribus ratione incidunt, sint minus eos eius ea excepturi quisquam, consectetur perferendis, cupiditate maiores tenetur molestiae saepe non explicabo debitis.', time: '11:41' },
    ],
};

const chatReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messagesData: [...state.messagesData, { id: state.messagesData.length, text: action.messageText, time: getTime() }],
            };
        }
        // case ADD_REACTION_TO_MESSAGE: {
        //     return {
        //         ...state,
        //         messagesData: state.messagesData.map(message => {
        //             if (message.id === action.messageId) {
        //                 message.isReact = !message.isReact;
        //             }
        //             return message;
        //         }),
        //     };
        // }
        default:
            return state;
    };
};

export const addMessage = (messageText) => ({ type: ADD_MESSAGE, messageText });
// export const onReactionChange = (id) => ({ type: ADD_REACTION_TO_MESSAGE, messageId: id });

export default chatReducer;