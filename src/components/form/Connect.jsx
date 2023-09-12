import styles from './Form.module.css';
import { useNavigate } from 'react-router-dom';
import { Checkbox, Input } from './../common/formsControls/FormsControls';
import { v4 } from 'uuid';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const Connect = (props) => {

    const navigate = useNavigate();

    const connectToRoom = (values) => {
        // props.changeUsername(values.name);
        const roomID = v4();
        navigate(`/room/${roomID}`);
    };

    const closeModal = () => {
        props.closeConnectRoomModal();
    };

    return (
        <div className={styles.modal}>
            <div className={styles.form}>
                <div className={styles.title}>
                    Подключиться к встрече
                </div>

                <Formik
                    initialValues={{
                        meetID: '',
                        name: '',
                        rememberMe: false,
                        disableMicro: false,
                        disableVideo: false
                    }}
                    validationSchema={Yup.object({
                        meetID: Yup.string().trim()
                            .required('Введите ID встречи')
                            .matches(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/, 'Введите корректный ID встречи'),
                        name: Yup.string().trim()
                            .max(30, 'Имя должно быть не более 30 символов')
                            .min(2, 'Имя должно быть не менее 2 символов')
                            .required('Введите имя'),
                        rememberMe: Yup.boolean(),
                        disableMicro: Yup.boolean(),
                        disableVideo: Yup.boolean(),
                    })}
                    onSubmit={(values) => {
                        connectToRoom(values);
                    }}
                    onReset={() => {
                        closeModal();
                    }}
                >
                    <Form className={styles.inputBlock}>
                        <div className={styles.inputs}>
                            <Input name={'meetID'} type={'text'} placeholder={'ID встречи'} />
                            <Input name={'name'} type={'text'} placeholder={'Ваше имя'} />
                        </div>
                        <div className={styles.checkboxesBlock}>
                            <Checkbox name={'rememberMe'} label={'Запомнить имя для будущих встреч'} />
                            <Checkbox name={'disableMicro'} label={'Отключить микрофон'} />
                            <Checkbox name={'disableVideo'} label={'Отключить видеокамеру'} />
                        </div>

                        <div className={styles.buttons}>
                            <button type='submit' className={styles.buttonLogin}>Войти</button>
                            <button type='reset' className={styles.buttonCancel}>Отмена</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Connect;