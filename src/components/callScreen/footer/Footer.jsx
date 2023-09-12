import styles from './Footer.module.css';
import { ReactComponent as Micro } from './../../../assets/icons/micro.svg';
import { ReactComponent as Video } from './../../../assets/icons/video.svg';
import { ReactComponent as Close } from './../../../assets/icons/closeVideo.svg';
import { ReactComponent as DemoScreen } from './../../../assets/icons/upload.svg';
import Messages from './messages/Messages';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = (props) => {

    const navigate = useNavigate();

    const [isMicro, setMicro] = useState(true);
    const [isVideo, setVideo] = useState(true);

    const toggleChat = () => {
        props.toggleChat();
    };

    return (
        <div className={styles.footer}>
            <div className={`${isMicro ? styles.inactive : null}`}>
                <Micro onClick={() => setMicro(!isMicro)} className={styles.svg} />
            </div>
            <div className={`${isVideo ? styles.inactive : null}`}>
                <Video onClick={() => setVideo(!isVideo)} className={styles.svg} />
            </div>
            <Close onClick={() => navigate('/')} className={`${styles.svg} ${styles.close}`} />
            <Messages toggleChat={toggleChat} unreadMessages={0} className={`${styles.svg}`} />
            <DemoScreen className={styles.svg} />
        </div>
    );
};

export default Footer;