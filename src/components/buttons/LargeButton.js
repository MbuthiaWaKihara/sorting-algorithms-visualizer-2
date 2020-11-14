import React from 'react';

//rsuite
import {
    Button,
} from 'rsuite';

//redux
import { connect } from 'react-redux';

//scoped styles
const styles = {
    button: {
        width: '80%',
        height: '12%',
        position: 'relative',
        left: '10%',
        borderRadius: 40,
        fontFamily: '"Poppins", sans-serif',
        marginBottom: 15,
    }
}

const mapStateToProps = state => ({
    status: state.animation.status,
})

const LargeButton = ({active, title, action, status}) => {
    return (
        <>
            <Button 
            style={{
                ...styles.button,
                fontSize: active ? 50 : 30,
                 border: active ? '0px solid black' : '5px solid black',
                 backgroundColor: active ? '#000000' : '#ffffff',
                 color: active ? '#ffffff' : '#000000',
            }}
            onClick={action}
            disabled={status === 'active'}
            >{title}</Button>
        </>
    )
}

export default connect(
    mapStateToProps,
)(React.memo(LargeButton));
