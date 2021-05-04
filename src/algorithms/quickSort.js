const quickSort = (decreasing, rawArray, start, end) => {
    const partition = (rawArray, start, end) => {
        
        let subframes = [];
        let pivot = rawArray[end].number;
    
        rawArray[end].className = "wronglyOrdered";
        subframes.push(JSON.parse(JSON.stringify(rawArray)));

        let pivotIndex = start - 1; // this value will be used to determine the sorted position of the pivot
        let holder;
        
        for(let counter = start; counter <= end - 1; counter++){
            rawArray[counter].className = "inComparison";
            subframes.push(JSON.parse(JSON.stringify(rawArray)));
            //if the current element is smaller than or equal to the pivot, 
            if(decreasing){
                if(rawArray[counter].number >= pivot){
                    pivotIndex++;
    
                    //swap the position of the pivot index with that of the counter
                    holder = rawArray[pivotIndex];
                    rawArray[pivotIndex] = rawArray[counter];
                    rawArray[counter] = holder;
                    subframes.push(JSON.parse(JSON.stringify(rawArray)));
    
                    rawArray[pivotIndex].className = "initial";
                    rawArray[counter].className = "initial";
                    subframes.push(JSON.parse(JSON.stringify(rawArray)));
    
                }

            }else{
                if(rawArray[counter].number <= pivot){
                    pivotIndex++;
    
                    //swap the position of the pivot index with that of the counter
                    holder = rawArray[pivotIndex];
                    rawArray[pivotIndex] = rawArray[counter];
                    rawArray[counter] = holder;
                    subframes.push(JSON.parse(JSON.stringify(rawArray)));
    
                    rawArray[pivotIndex].className = "initial";
                    rawArray[counter].className = "initial";
                    subframes.push(JSON.parse(JSON.stringify(rawArray)));
    
                }
            }

            rawArray[counter].className = "initial";
            subframes.push(JSON.parse(JSON.stringify(rawArray)));

        }

        rawArray[pivotIndex + 1].className = "wronglyOrdered";
        subframes.push(JSON.parse(JSON.stringify(rawArray)));
        
        //swap the end of the array with whatever is on the pivot index
        holder = rawArray[pivotIndex + 1];
        rawArray[pivotIndex + 1] = rawArray[end];
        rawArray[end] = holder;
        subframes.push(JSON.parse(JSON.stringify(rawArray)));


        rawArray[end].className = "initial";
        rawArray[pivotIndex + 1].className = "sorted";
        subframes.push(JSON.parse(JSON.stringify(rawArray)));


        return [pivotIndex + 1, subframes];
    }
    
    let frames = [];
    let stack = [];
    let top = - 1;
    stack[++top] = start;
    stack[++top] = end;

    while(top >= 0){
        end = stack[top--];
        start = stack[top--];

        let [positionOfNextPivot, subframes] = partition(rawArray, start, end);
        frames = frames.concat(subframes);

        if(positionOfNextPivot - 1 > start){
            stack[++top] = start;
            stack[++top] = positionOfNextPivot - 1;
        }

        if(positionOfNextPivot + 1 < end){
            stack[++top] = positionOfNextPivot + 1;
            stack[++top] = end;
        }
    }
    
    return frames;
}

export default quickSort;