import styles from './Header.module.css';
import { ReactComponent as Settings } from './../../assets/icons/settingsHeader.svg';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import SettingsModal from '../settings/Settings';

const Header = () => {

    const [settingsModal, setSettingsModal] = useState(false)

    const closeSettingsModal = () => {
        setSettingsModal(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                calls
            </div>
            <Routes>
                <Route path='/room/:id' element={<Settings onClick={() => setSettingsModal(!settingsModal)} className={styles.settings} />} />
            </Routes>
            {settingsModal &&
                <SettingsModal closeSettingsModal={closeSettingsModal} />
            }
        </header>
    );
};

export default Header;