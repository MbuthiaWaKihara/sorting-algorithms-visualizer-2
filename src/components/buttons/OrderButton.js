import React from 'react';

//rsuite
import {
    Button,
} from 'rsuite';

//redux
import { connect } from 'react-redux';
import {
    setOrderAscending,
    setOrderDescending,
} from '../../redux';

//scoped styles
const styles = {
    button: {
        width: '48%',
        height: '100%',
        position: 'relative',
        borderRadius: 40,
        fontFamily: '"Poppins", sans-serif',
        fontSize: 30,
        marginBottom: 10,
    }
}

const mapStateToProps = state => ({
    currentOrder: state.algorithms.order,
});

const mapDispatchToProps = dispatch => ({
    setOrderAscending: () => dispatch(setOrderAscending()),
    setOrderDescending: () => dispatch(setOrderDescending()),
})

const OrderButton = ({order, currentOrder, position, setOrderAscending, setOrderDescending}) => {
    let relevantFunction;

    if(order === 'ascending') relevantFunction = setOrderAscending;
    if(order === 'descending') relevantFunction = setOrderDescending;

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
                 border: order === currentOrder ? '0px solid black' : '5px solid black',
                 backgroundColor: order === currentOrder ? '#000000' : '#ffffff',
                 color: order === currentOrder ? '#ffffff' : '#000000',
            }}
            onClick={handleClick}
            >{order}</Button>
        </>
    )
}

export default connect(
mapStateToProps,
mapDispatchToProps,
)(React.memo(OrderButton));
