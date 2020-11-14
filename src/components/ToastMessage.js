import React from 'react';
import classes from '../styles/toastmessage.module.css';

const ToastMessage = ({ message, closeToast }) => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>{message}</div>
            <button className={classes.closeButton} onClick={closeToast}>OK</button>
        </div>
    )
}

export default React.memo(ToastMessage)
