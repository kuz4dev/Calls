import styles from './User.module.css';

const User = (props) => {
    return (
        <div className={`${props.isChat ? styles.userWithChat : styles.userWithoutChat} ${styles.user}`}>
            <div className={styles.name}>
                {props.name}
            </div>
            <div className={styles.avatar}>
                {props.avatar ? <img src={props.avatar} alt={'avatar'} /> : props.name}
            </div>
        </div>
    );
};

export default User;