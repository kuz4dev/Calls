import styles from './Chat.module.css';
import { ReactComponent as Close } from './../../assets/icons/chatClose.svg';
import { ReactComponent as Attach } from './../../assets/icons/chatAttach.svg';
import { ReactComponent as Face } from './../../assets/icons/chatFace.svg';
import Message from './message/Message';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const Chat = (props) => {

    const sendMessage = (values) => {
        console.log(values.roomChat);
    };

    return (
        <div className={styles.chat}>
            <div className={styles.header}><Close onClick={() => props.closeChat()} className={styles.close} /></div>

            <div className={styles.messages}>
                <Message text='Hi, Barbie!' senderName='Ken' other={true} />
                <Message text='Hi, Ken!' senderName='Barbie' other={true} />
            </div>

            <Formik
                initialValues={{
                    roomChat: '',
                }}
                validationSchema={Yup.object({
                    roomChat: Yup.string().trim()
                        .max(300, 'Сообщение может содержать не более чем 300 символов')
                        .required('Вы не можете отправить пустое сообщение'),
                })}
                onSubmit={(values) => {
                    sendMessage()
                }}
            >
                <Form className={styles.form}>
                    <Field className={styles.textarea} as='textarea' type='submit' id='roomChat' name='roomChat' placeholder='Напечатать сообщение...' />

                    <div className={styles.chatButtons}>
                        <Attach className={styles.button} />
                        <Face className={styles.button} />
                    </div>
                </Form>
            </Formik>
        </div>
    );
};


export default Chat;
