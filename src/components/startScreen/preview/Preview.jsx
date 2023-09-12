import styles from './Preview.module.css';
import animalPhoto from './../../../assets/images/mainScreen/main.png';

const Preview = () => {
    return (
        <div className={styles.animalPhoto}>
            <img src={animalPhoto} alt={'animals'} />
            <div className={styles.slogan}>
                Enjoy<br />every<br />moment
            </div>
        </div>
    );
};

export default Preview;