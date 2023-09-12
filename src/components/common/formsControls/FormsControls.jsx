import React from 'react';
import styles from './FormsControls.module.css';
import { useField } from 'formik';

export const Input = (props) => {

    const [field, meta] = useField(props);

    return (
        <div className={styles.component}>
            <input className={styles.input} {...field} {...props} />
            {meta.error && meta.touched ? (
                <div className={styles.error}>{meta.error}</div>
            ) : null}
        </div>
    );
};

export const Checkbox = ({ label, children, ...props }) => {

    const [field] = useField({ ...props, type: 'checkbox' });

    return (
        <div className={styles.component}>
            <input className={styles.customCheckbox} id={props.name} {...field} {...props} type='checkbox' />
            <label htmlFor={props.name}>{label}</label>
        </div >
    );
};
