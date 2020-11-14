import React from 'react';

//rsuite
import {
    Button,
} from 'rsuite';

//redux
import { connect } from 'react-redux';
import {
    setAlgorithm
} from '../../redux';

//scoped styles
const styles = {
    button: {
        width: '48%',
        height: '100%',
        position: 'relative',
        borderRadius: 40,
        fontFamily: '"Poppins", sans-serif',
        marginBottom: 10,
    }
}

const mapStateToProps = state => ({
    algorithm: state.algorithms.algorithm,
    status: state.animation.status,
});

const mapDispatchToProps = dispatch => ({
    setAlgorithm: algorithm => dispatch(setAlgorithm(algorithm)),
})

const SmallButton = ({
    alg, algorithm, position, setAlgorithm, status
}) => {

    //click callback
    const handleClick = () => {
        if(alg !== algorithm) setAlgorithm(alg);
    }
    return (
        <>
            <Button 
            style={{
                ...styles.button,
                 left: position === 'left' ? 0 : null,
                 marginLeft: position === 'right' ? '4%' : position === 'center' ? '26%' : 0,
                 border: alg === algorithm ? '0px solid black' : '5px solid black',
                 backgroundColor: alg === algorithm ? '#000000' : '#ffffff',
                 color: alg === algorithm ? '#ffffff' : '#000000',
            }}
            onClick={handleClick}
            disabled={status === 'active'}
            ><div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{marginLeft: 10, fontSize: 30, }}>{alg}</div>
                <div style={{marginLeft: 10, fontSize: 20, paddingTop: 10, }}>sort</div>
            </div></Button>
        </>
    )
}

export default connect(
mapStateToProps,
mapDispatchToProps,
)(React.memo(SmallButton));
