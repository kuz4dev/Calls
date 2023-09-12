import { toggleMicro, changeRememberingName, toggleVideo, changeUsername } from '../../redux/callScreenReducer';
import { connect } from 'react-redux';
import Connect from './Connect';

const mapStateToProps = (state) => {
    return {
        rooms: state.callScreen.rooms,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeRememberingName: () => {
            dispatch(changeRememberingName());
        },
        toggleMicro: () => {
            dispatch(toggleMicro());
        },
        toggleVideo: () => {
            dispatch(toggleVideo());
        },
        changeUsername: (name) => {
            dispatch(changeUsername(name));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Connect);