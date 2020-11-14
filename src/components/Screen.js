import React from 'react';
import styles from '../styles/screen.module.css';
import { IntervalContext } from '../App';

//components
import ArrayContainer from './ArrayContainer';

//toast
import { toast } from 'react-toastify';
import ToastMessage from './ToastMessage';

//redux
import { connect } from 'react-redux';
import {
    changeCurrentArray,
    setStatus,
} from '../redux';

const mapStateToProps = state => ({
    array: state.arrayData.array,
    status: state.animation.status,
    frames: state.animation.frames,
    milliseconds: state.animation.milliseconds,
    algorithm: state.algorithms.algorithm,
});

const mapDispatchToProps = dispatch => ({
    changeArray: array => dispatch(changeCurrentArray(array)),
    changeStatus: status => dispatch(setStatus(status)),
});

const Screen = ({array, status, frames, milliseconds, changeArray, changeStatus, algorithm}) => {
    //ref to hold animation interval
    let animationInterval = React.useContext(IntervalContext);
    //ref to hold animation position (position of current array in frame)
    let animationPosition = React.useRef(0);

    //run animation
    React.useEffect(() => {
        if(status === 'active') {
            animationInterval.current = setInterval(() => {
                changeArray(frames[animationPosition.current]);
                animationPosition.current++; 
            }, milliseconds);
        }
    },[status]);

    //stop animation
    React.useEffect(() => {
        if(JSON.stringify(array) === JSON.stringify(frames[frames.length - 1]) && status === 'active'){
            clearInterval(animationInterval.current);
            changeStatus('domant');
            animationPosition.current = 0;
            toast(
                <ToastMessage message={`That's ${algorithm} sort for you!`} />,
                {
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar: true
                }
            );
        }
    })

    return (
        <>
            <div className={styles.container}>
                <ArrayContainer />
            </div> 
        </>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(React.memo(Screen));
