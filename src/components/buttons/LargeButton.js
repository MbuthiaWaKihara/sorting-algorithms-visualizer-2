import React from 'react';

//rsuite
import {
    Button,
} from 'rsuite';

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

const LargeButton = ({active, title, action}) => {
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
            >{title}</Button>
        </>
    )
}

export default React.memo(LargeButton);
