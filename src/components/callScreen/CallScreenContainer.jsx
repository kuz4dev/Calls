import { toggleMicro, toggleVideo } from '../../redux/callScreenReducer';
import { connect } from 'react-redux';
import CallScreen from './CallScreen';

const mapStateToProps = (state) => {
    return {
        rooms: state.callScreen.rooms,
        me: state.auth,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMicro: () => {
            dispatch(toggleMicro());
        },
        toggleVideo: () => {
            dispatch(toggleVideo());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CallScreen);