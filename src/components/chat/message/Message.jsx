import { getTime } from '../../../modules/getTime';
import styles from './Message.module.css';

const Message = (props) => {

    return (
        <div className={`${styles.message} ${props.other ? styles.left : styles.right}`}>
            <div className={styles.senderName}>
                {props.senderName}
            </div>
            <div className={styles.messageBody}>
                {props.text}
            </div>
            <div className={styles.messageTime}>
                {getTime()}
            </div>
        </div>
    );
};

export default Message;