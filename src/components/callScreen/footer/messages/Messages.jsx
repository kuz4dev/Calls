import styles from './Messages.module.css';
import { ReactComponent as Message } from './../../../../assets/icons/chat.svg';

const Messages = (props) => {
    return (
        <div className={styles.message}>
            <Message onClick={() => props.toggleChat()} className={styles.svg} />
            {props.unreadMessages !== 0 && <div className={styles.unreadMessages}>{props.unreadMessages}</div>}
        </div>
    );
};

export default Messages