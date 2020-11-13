import React from 'react';

//scoped styles
import styles from '../styles/actionarea.module.css';

//components
import LargeButton from './buttons/LargeButton';
import SmallButton from './buttons/SmallButton';
import OrderButton from './buttons/OrderButton';
import Title from './Title';
import ActionContainer from './ActionContainer';

//redux
import { connect } from 'react-redux';
import { generateNewArray } from '../redux';

const mapStateToProps = state => ({
   size: state.arrayData.size
});

const mapDispatchToProps = dispatch => ({
   generateNewArray: size => dispatch(generateNewArray(size)),
})

const ActionArea = ({size, generateNewArray}) => {

    return (
        <div className={styles.container}>
            <LargeButton
             active
             title="Go"
             />
             <LargeButton
             title="Generate New Array"
             action={() => generateNewArray(size)}
             />
             <Title
             content="algorithms"
             />
             <ActionContainer>
             <SmallButton
                alg="insertion"
                position="left"
                />
                <SmallButton
                alg="selection"
                position="right"
                />
             </ActionContainer>
             <ActionContainer>
             <SmallButton
                alg="bubble"
                position="left"
                />
                <SmallButton
                alg="quick"
                position="right"
                />
             </ActionContainer>
             <ActionContainer>
             <SmallButton
                alg="merge"
                position="center"
                />
             </ActionContainer>
             <Title
             content="order"
             />
             <ActionContainer>
               <OrderButton
                order="ascending"
                position="left"
                />
                <OrderButton 
                order="descending"
                position="right"
                />
             </ActionContainer>
        </div>  
    )
}

export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(React.memo(ActionArea));
