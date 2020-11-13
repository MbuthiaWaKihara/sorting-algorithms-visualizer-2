import React from 'react';

//rsuite
import {
    Button,
} from 'rsuite';

//redux
import { connect } from 'react-redux';
import {
    setAlgorithmBubble,
    setAlgorithmInsertion,
    setAlgorithmMerge,
    setAlgorithmQuick,
    setAlgorithmSelection,
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
});

const mapDispatchToProps = dispatch => ({
    setAlgorithmBubble: () => dispatch(setAlgorithmBubble()),
    setAlgorithmInsertion: () => dispatch(setAlgorithmInsertion()),
    setAlgorithmSelection: () => dispatch(setAlgorithmSelection()),
    setAlgorithmMerge: () => dispatch(setAlgorithmMerge()),
    setAlgorithmQuick: () => dispatch(setAlgorithmQuick()),
})

const SmallButton = ({
    alg, algorithm, position, setAlgorithmBubble,
    setAlgorithmSelection, setAlgorithmMerge, setAlgorithmQuick, setAlgorithmInsertion 
}) => {

    let relevantFunction;
    if(alg === 'insertion') relevantFunction = setAlgorithmInsertion;
    if(alg === 'selection') relevantFunction = setAlgorithmSelection;
    if(alg === 'merge') relevantFunction = setAlgorithmMerge;
    if(alg === 'quick') relevantFunction = setAlgorithmQuick;
    if(alg === 'bubble') relevantFunction = setAlgorithmBubble;

    //click callback
    const handleClick = () => {
        relevantFunction();
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
