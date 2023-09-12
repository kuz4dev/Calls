import styles from './Form.module.css';
import { Checkbox, Input } from '../common/formsControls/FormsControls';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useSocket } from '../../context/Socket';
import { useCallback, useEffect, useState } from 'react';

const Create = (props) => {

    const { socket } = useSocket();
    const [name, setName] = useState();
    const [room, setRoom] = useState();

    const navigate = useNavigate();

    // const createRoom = ({ name, rememberMe }) => {
    //     console.log(name, rememberMe);
    //     const roomID = v4();
    //     const userID = v4();
    //     setUser({
    //         userID: userID,
    //         userName: name,
    //         isMicro: false,
    //         isVideo: false,
    //         isRememberName: rememberMe
    //     });
    //     props.setUserData(roomID, name, userID);
    //     props.createRoom(roomID, user)
    //     navigate(`/room/${roomID}`);

    //     socket.emit('room:join', { name, roomID });

    //     console.log(user);
    // };

    const createRoom = useCallback(({ name, rememberMe }) => {
        const roomID = v4();
        const userID = v4();
        const user = {
            userID: userID,
            userName: name,
            isMicro: false,
            isVideo: false,
            isRememberName: rememberMe
        };
        setRoom(roomID);
        setName(user.userName);
        props.setUserData(roomID, name, userID);
        props.createRoom(roomID, user)
        navigate(`/room/${roomID}`);

        socket.emit('room:join', { name, roomID });
    }, [name, room, socket]);

    const handleJoinRoom = useCallback((data) => {
        const { name, roomID } = data;
        console.log(name, roomID);
    }, []);

    useEffect(() => {
        socket.on('room:join', handleJoinRoom);
        return () => {
            socket.off('room:join', handleJoinRoom);
        };
    }, [socket, handleJoinRoom]);

    // const createRoom = useCallback(({ name, rememberMe }) => {
    //     const roomID = v4();
    //     const userID = v4();
    //     const user = {
    //         userID: userID,
    //         userName: name,
    //         isMicro: false,
    //         isVideo: false,
    //         isRememberName: rememberMe
    //     };
    //     props.setUserData(roomID, name, userID);
    //     props.createRoom(roomID, user)
    //     navigate(`/ room / ${ roomID }`);

    //     socket.emit('room:join', { name, roomID });

    //     console.log(user);
    // }, [socket]);

    const closeModal = () => {
        props.closeCreateRoomModal();
    };

    return (
        <div className={styles.modal}>
            <div className={styles.form}>
                <div className={styles.title}>
                    Создать встречу
                </div>

                <Formik
                    initialValues={{
                        name: '',
                        rememberMe: false
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string().trim()
                            .max(30, 'Имя должно быть не более 30 символов')
                            .min(2, 'Имя должно быть не менее 2 символов')
                            .required('Введите имя'),
                        rememberMe: Yup.boolean()
                    })}
                    onSubmit={(values) => {
                        createRoom(values);
                    }}
                    onReset={() => {
                        closeModal();
                    }}
                >
                    <Form className={styles.inputBlock}>
                        <Input name={'name'} type={'text'} placeholder={'Ваше имя'} />
                        <Checkbox name={'rememberMe'} label={'Запомнить имя для будущих встреч'} />

                        <div className={styles.buttons}>
                            <button className={styles.buttonLogin}
                                type='submit'>Создать</button>
                            <button className={styles.buttonCancel}
                                type='reset'>Отмена</button>
                        </div>
                    </Form>
                </Formik>

            </div>
        </div>
    );
};

export default Create;