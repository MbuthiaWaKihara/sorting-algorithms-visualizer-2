import React from 'react';

//redux
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    size: state.arrayData.size,
});

const ArrayMember = ({instance, lastmember, size}) => {

    const height = 70 / size;

    const style = {
        width: `${instance.number / 2.1}%`,
        height: `${height}%`,
        backgroundColor: '#000000',
        margin: '0 0 0 auto',
        borderRadius: 10,
        marginBottom: !lastmember ? 1.5 : 0,
    }
    return (
        <div style={style}/>
    )
}

export default connect(
    mapStateToProps,
)(React.memo(ArrayMember));
