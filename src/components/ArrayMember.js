import React from 'react';

//redux
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    size: state.arrayData.size,
});

const ArrayMember = ({instance, lastmember, size}) => {

    const height = 70 / size;
    const className = instance.className;

    const style = {
        width: `${instance.number / 2.1}%`,
        height: `${height}%`,
        margin: '0 0 0 auto',
        borderRadius: 10,
        marginBottom: !lastmember ? 1.5 : 0,
        backgroundColor: className === 'sorted' ? '#00ff26' : className === 'wronglyOrdered' ? '#ff0000' :
        className === 'inComparison' ? '#eeff00' : '#000000',
    }
    return (
        <div style={style} />
    )
}

export default connect(
    mapStateToProps,
)(React.memo(ArrayMember));
