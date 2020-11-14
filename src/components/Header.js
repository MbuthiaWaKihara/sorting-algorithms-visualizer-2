import React from 'react'
import styles from '../styles/header.module.css';

//component
import Redirect from './Redirect';
import CancelButton from './buttons/CancelButton';

//redux
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    status: state.animation.status,
});

const Header = ({status}) => {
    return (
        <div className={styles.container}>
            { status === 'active' && <CancelButton />}
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

export default connect(
    mapStateToProps,
)(React.memo(Header));
