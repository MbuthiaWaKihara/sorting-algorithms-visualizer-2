import React from 'react';
import css from '../styles/redirect.module.css';

const Redirect = ({text, url}) => {
    const styles =  {
        width: '10%',
        height: '100%',
        position: 'relative',
        left: text === "notes" ? '65%' : '74%',
        textAlign: 'center',
        fontFamily: '"Poppins", sans-serif',
        fontSize: 30,
        color: '#b1b3b1',
        cursor: 'pointer',
    }
    return (
        <div style={styles}>
            <a href={url} style={{position: 'relative', top: '30%'}} className={css.link}>{text}</a>
        </div>
    )
}

export default React.memo(Redirect);
