import React from 'react';

//scoped styles
import styles from '../styles/title.module.css';

const Title = ({content}) => {
    return (
        <>
            <div className={styles.container} >
                {content}
            </div>
        </>
    )
}

export default React.memo(Title);
