import React from 'react';
import { IntervalContext } from '../../App';

//scoped css
import styles from '../../styles/cancelbutton.module.css';

//toast
import { toast } from 'react-toastify';
import ToastMessage from '../ToastMessage';

//redux
import { connect } from 'react-redux';
import { 
     setStatus,
} from '../../redux';

const mapDispatchToProps = dispatch => ({
    changeStatus: status => dispatch(setStatus(status)),
});

const CancelButton = ({changeStatus}) => {
    const animationInterval = React.useContext(IntervalContext);

    const handleClick = () => {
        clearInterval(animationInterval.current);
        changeStatus('domant');
        toast(
            <ToastMessage
            message="You've cleared an active animation. Press Go to resume!"
            />,
            {
                hideProgressBar: true,
                position: toast.POSITION.TOP_LEFT,
            }
        );
    }
    return (
        <div className={styles.container} onClick={handleClick}>
            CANCEL ACTIVE ANIMATION
        </div>
    )
}

export default connect(
    null,
    mapDispatchToProps,
)(React.memo(CancelButton));
