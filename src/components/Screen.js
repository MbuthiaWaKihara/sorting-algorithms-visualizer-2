import React from 'react';
import styles from '../styles/screen.module.css';

//components
import ArrayContainer from './ArrayContainer';

const Screen = () => {
    return (
        <>
            <div className={styles.container}>
                <ArrayContainer />
            </div> 
        </>
    )
}

export default React.memo(Screen);
