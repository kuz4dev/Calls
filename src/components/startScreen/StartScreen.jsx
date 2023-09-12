import styles from './StartScreen.module.css';
import { ReactComponent as Plus } from './../../assets/icons/plus.svg';
import { ReactComponent as Phone } from './../../assets/icons/phone.svg';
import { ReactComponent as Settings } from './../../assets/icons/settings.svg';
import Preview from './preview/Preview';
import { useEffect, useState } from 'react';
import ConnectContainer from '../form/ConnectContainer';
import CreateContainer from '../form/CreateContainer';
import { getDate, getTime } from './../../modules/getTime';
import SettingsModal from './../settings/Settings';

const StartScreen = () => {

    const [createRoom, setCreateRoom] = useState(false);
    const [connectToRoom, setConnectToRoom] = useState(false);
    const [isSettings, setIsSettings] = useState(false);

    let time = getTime();

    const closeCreateRoomModal = () => {
        setCreateRoom(false);
    };

    const closeConnectRoomModal = () => {
        setConnectToRoom(false);
    };

    const closeSettingsModal = () => {
        setIsSettings(false);
    };

    useEffect(() => { }, [createRoom, connectToRoom]);

    return (
        <main className={styles.main}>
            <div className={styles.cards}>
                <div onClick={() => setCreateRoom(true)} className={`${styles.card} ${styles.plus}`}>
                    <Plus />
                </div>
                <div onClick={() => setConnectToRoom(true)} className={`${styles.card} ${styles.phone}`}>
                    <Phone />
                </div>
                <div className={`${styles.card} ${styles.date}`}>
                    {getDate()} <br />
                    <span className={styles.time}>{time}</span>
                </div>
                <div className={`${styles.card} ${styles.settings}`}>
                    <Settings onClick={() => setIsSettings(!isSettings)} className={styles.settingsSVG} />
                </div>
            </div>
            <Preview />

            {createRoom &&
                <CreateContainer closeCreateRoomModal={closeCreateRoomModal} />
            }

            {connectToRoom &&
                <ConnectContainer closeConnectRoomModal={closeConnectRoomModal} />
            }
            {isSettings &&
                <SettingsModal closeSettingsModal={closeSettingsModal} />
            }
        </main>
    );
};

export default StartScreen;