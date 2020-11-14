import React from 'react';

//rsuite
import {
    Button,
} from 'rsuite';

//redux
import { connect } from 'react-redux';
import {
    setOrder,
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
    status: state.animation.status,
});

const mapDispatchToProps = dispatch => ({
    setOrder: order => dispatch(setOrder(order)),
})

const OrderButton = ({order, currentOrder, position, setOrder, status}) => {

    const handleClick = () => {
        if(order !== currentOrder) setOrder(order);
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
            disabled={status === 'active'}
            >{order}</Button>
        </>
    )
}

export default connect(
mapStateToProps,
mapDispatchToProps,
)(React.memo(OrderButton));
