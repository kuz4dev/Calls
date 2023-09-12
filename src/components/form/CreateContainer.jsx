import { createRoom } from '../../redux/callScreenReducer';
import { connect } from 'react-redux';
import Create from './Create';
import { setUserData } from '../../redux/authReducer';

const mapStateToProps = (state) => {
    return {
        form: state.forms,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createRoom: (roomID, user) => {
            dispatch(createRoom(roomID, user));
        },
        setUserData: (roomID, userName, userID) => {
            dispatch(setUserData(roomID, userName, userID));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);