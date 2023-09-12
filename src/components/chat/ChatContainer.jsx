import { addMessage } from './../../redux/chatReducer';
import { connect } from 'react-redux';
import Chat from './Chat';

const mapStateToProps = (state) => {
    return {
        chat: state.chat.messagesData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text) => {
            dispatch(addMessage(text));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);