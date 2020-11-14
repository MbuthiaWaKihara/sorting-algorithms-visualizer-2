import React from 'react'
import styles from '../styles/header.module.css';

//component
import Redirect from './Redirect';

const Header = () => {
    return (
        <div className={styles.container}>
            <Redirect 
            text="notes"
            />
            <Redirect 
            text="github"
            url="https://github.com/MbuthiaWaKihara/sorting-algorithms-visualizer-2"
            />
        </div>
    )
}

export default React.memo(Header)
