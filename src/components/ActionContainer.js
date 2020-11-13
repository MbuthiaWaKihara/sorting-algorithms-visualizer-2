import React from 'react';
import styles from '../styles/actioncontainer.module.css';


const ActionContainer = ({children}) => {
    return (
        <>
            <div className={styles.container}>
                {children}
            </div>  
        </>
    )
}

export default React.memo(ActionContainer);
