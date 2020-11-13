import React from 'react';

//redux
import { connect } from 'react-redux';

//components
import ArrayMember from './ArrayMember';

const mapStateToProps = state => ({
    array: state.arrayData.array,
    size: state.arrayData.size,
});

const ArrayContainer = ({array, size}) => {

    const styles = {
        container : {
            width: '100%',
            //three breakpoints system
            height: size <= 40 ? '50%' : size <= 80 ? '66.66%' : '100%',
            position: 'relative',
            top: size < 40 ? '25%' : size <= 80 ? '14%' : 0,
        }
    }

    return (
        <>
            <div style={styles.container}>
                {
                    array.map((instance, index) => <ArrayMember instance={instance} lastmember={index === size - 1} />)
                }
            </div>
        </>
    )
}

export default connect(
    mapStateToProps,
)(React.memo(ArrayContainer));
