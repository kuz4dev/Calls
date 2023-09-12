import Footer from "./footer/Footer";
import User from "./user/User";
import styles from './CallScreen.module.css';
import { useState } from "react";
import Chat from "../chat/Chat";

const CallScreen = (props) => {

    let [isChat, setIsChat] = useState(false);

    const toggleChat = () => {
        setIsChat(!isChat);
    };

    const closeChat = () => {
        setIsChat(false);
    };

    // const users = props.rooms.map(room => {
    //     if (room.roomID === props.me.roomID) {
    //         return room.users.map(user => <User name={user.userName} />)
    //     }
    //     return null;
    // })

    // console.log(users);

    return (
        <div className={styles.callScreen}>
            <div>
                <div className={`${styles.users} ${isChat ? styles.width : null}`}>
                    {/* {users} */}
                    <User isChat={isChat} className={styles.user} name={'Jason'} />
                    <User isChat={isChat} className={styles.user} name={'Aboba'} />
                    <User isChat={isChat} className={styles.user} name={'Ken'} />
                    <User isChat={isChat} className={styles.user} name={'Barbie'} />
                </div>
                <Footer toggleChat={toggleChat} />
            </div>
            {isChat &&
                <Chat className={styles.chat} closeChat={closeChat} />}
        </div>
    );
};

export default CallScreen;