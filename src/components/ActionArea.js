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
import { 
   generateNewArray,
   setFrames,
   setStatus,
} from '../redux';

//algorithms
import bubbleSort from '../algorithms/bubbleSort';
import selectionSort from '../algorithms/selectionSort';
import insertionSort from '../algorithms/insertionSort';
import quickSort from '../algorithms/quickSort';
import mergeSort from '../algorithms/mergeSort';

const mapStateToProps = state => ({
   size: state.arrayData.size,
   array: state.arrayData.array,
   order: state.algorithms.order,
   algorithm: state.algorithms.algorithm,
});

const mapDispatchToProps = dispatch => ({
   generateNewArray: size => dispatch(generateNewArray(size)),
   setFrames: frames => dispatch(setFrames(frames)),
   setStatus: status => dispatch(setStatus(status)),
})

const ActionArea = ({size, order, algorithm, array, generateNewArray, setFrames, setStatus, }) => {

   const sort = () => {
      let frames;
      let descending = order === 'ascending' ? false : true;
      if(algorithm === 'insertion') frames = insertionSort(descending, JSON.parse(JSON.stringify(array)));
      if(algorithm === 'selection') frames = selectionSort(descending, JSON.parse(JSON.stringify(array)));
      if(algorithm === 'bubble') frames = bubbleSort(descending, JSON.parse(JSON.stringify(array)));
      if(algorithm === 'quick') frames = quickSort(descending, JSON.parse(JSON.stringify(array)), 0, array.length - 1);
      if(algorithm === 'merge') frames = mergeSort(descending, JSON.parse(JSON.stringify(array)), array.length);
      

      let sortedArray = frames[frames.length - 1];
      for(let counter = 0; counter < sortedArray.length; counter++){
          sortedArray[counter].className = "sorted";
      }
      frames.push(JSON.parse(JSON.stringify(sortedArray)));

      return frames;
  }

  const sortAction = () => {
      const frames = sort();
      setFrames(frames);
      setStatus('active');
  }

    return (
        <div className={styles.container}>
            <LargeButton
             active
             title="Go"
             action={sortAction}
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
