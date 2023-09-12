import styles from './Settings.module.css';
import { ReactComponent as Micro } from './../../assets/icons/microSettings.svg';
import { ReactComponent as Headphones } from './../../assets/icons/headphonesSettings.svg';
import { ReactComponent as Close } from './../../assets/icons/closeSettings.svg';
import { ReactComponent as Camera } from './../../assets/icons/cameraSettings.svg';

const Settings = (props) => {

    // navigator.mediaDevices.enumerateDevices()
    //     .then(function (devices) {
    //         devices.forEach(function (device) {
    //             console.log(device);
    //         });
    //     })

    // navigator.getUserMedia()

    navigator.mediaDevices
        .enumerateDevices()
        .then((devices) => {
            devices.forEach(device => console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`));
        })

    const closeModal = () => {
        props.closeSettingsModal();
    };

    return (
        <div className={styles.modal}>
            <div className={styles.settingsModal}>
                <div className={styles.title}>
                    Настройки
                </div>

                <div className={styles.settings}>
                    <div className={styles.setting}>
                        <Micro className={styles.micro} />
                        {/* <span className={styles.settingLabel} >Устройство ввода</span> */}
                        <select className={styles.comboBox} name="inputs" id="inputsSelect">
                            <option value="">Выберите микрофон</option>
                            <option value="micro">Микрофон</option>
                        </select>
                    </div>
                    <div className={styles.setting}>
                        <Headphones className={styles.head} />
                        {/* <span className={styles.settingLabel} >Устройство вывода</span> */}
                        <select className={styles.comboBox} name="outputs" id="outputsSelect">
                            <option value="">Выберите наушники</option>
                            <option value="headphones">Наушники</option>
                        </select>
                    </div>
                    <div className={styles.setting}>
                        <Camera className={styles.camera} />
                        {/* <span className={styles.settingLabel} >Камера</span> */}
                        <select className={styles.comboBox} name="camera" id="cameraSelect">
                            <option value="">Выберите камеру</option>
                            <option value="headphones">Камера</option>
                        </select>
                    </div>
                </div>

                <Close onClick={closeModal} className={styles.close} />

            </div>
        </div>
    );
};

export default Settings;