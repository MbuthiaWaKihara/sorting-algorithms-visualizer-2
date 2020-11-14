import React from 'react';
import Slider from 'react-slider';

//scoped styles
import '../styles/slider.css';

//components
import Title from './Title';

//redux
import { connect } from 'react-redux';
import {
    generateNewArray,
    setMilliseconds,
} from '../redux';


const mapStateToProps = state => ({
    size: state.arrayData.size,
    milliseconds: state.animation.milliseconds,
    status: state.animation.status,
});

const mapDispatchToProps = dispatch => ({
    generateArray: size => dispatch(generateNewArray(size)),
    setMilliseconds: milliseconds => dispatch(setMilliseconds(milliseconds)),
})

const ArrayControl = ({right, size, milliseconds, generateArray, setMilliseconds, status}) => {

    const styles = {
        container: {
            position: 'relative',
            left: right ? '10%': '5%',
            width: '40%',
            
        },
        title: {
            width: '100%',
            marginTop: 20,
        }
    }

    const handleChange = value => {
        if(right) {
            setMilliseconds(value);
        }else {
            generateArray(value);
        }
    }

    return (
        <div style={styles.container}>
            <Slider
            className="sliderbar"
            thumbClassName="sliderthumb"
            thumbActiveClassName="activethumb"
            max={right ? 400 : 120}
            min={right ? 10 : 5}
            value={right ? milliseconds : size}
            onChange={handleChange}
            invert={right}
            disabled={status === 'active'}
            />
            <div style={styles.title}>
                <Title content={right ? "speed" : "size"} />
            </div>
        </div>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(React.memo(ArrayControl));
