export default (decreasing, rawArray) => {
    let selectionLimit = rawArray.length - 1;
    let holder;
    let copyArray = rawArray;
    let frames = [];
    let criteria;
    let indexOfCriteria = null;

    while(selectionLimit > 0) {
        criteria  = decreasing ? Infinity : -Infinity;
        
        //find the largest number;
        for(let counter = 0; counter <= selectionLimit; counter++) {
            copyArray[counter].className = "inComparison";
            frames.push(JSON.parse(JSON.stringify(copyArray)));
            if(decreasing){
                if(copyArray[counter].number <= criteria) {
                    //remove previous smallest
                    if((indexOfCriteria || indexOfCriteria === 0) && indexOfCriteria !== selectionLimit + 1){
                       copyArray[indexOfCriteria].className = "initial";
                       frames.push(JSON.parse(JSON.stringify(copyArray)));
                   }
   
                   indexOfCriteria = counter;
                   criteria = copyArray[counter].number;
                   //target this one as smallest
                   copyArray[counter].className = "wronglyOrdered";
                   frames.push(JSON.parse(JSON.stringify(copyArray)));  
               }
            }else{
                
                if(copyArray[counter].number >= criteria) {
                    //remove previous largest
                    if((indexOfCriteria || indexOfCriteria === 0) && indexOfCriteria !== selectionLimit + 1){
                       copyArray[indexOfCriteria].className = "initial";
                       frames.push(JSON.parse(JSON.stringify(copyArray)));
                   }
   
                   indexOfCriteria = counter;
                   criteria = copyArray[counter].number;
                   //target this one as largest
                   copyArray[counter].className = "wronglyOrdered";
                   frames.push(JSON.parse(JSON.stringify(copyArray)));  
               }
            }

            if(copyArray[counter].className !== "wronglyOrdered"){
                copyArray[counter].className = "initial";
                frames.push(JSON.parse(JSON.stringify(copyArray)));
            }

        }
        
        if(indexOfCriteria !== selectionLimit){
            copyArray[selectionLimit].className = "wronglyOrdered";
            frames.push(JSON.parse(JSON.stringify(copyArray)));
        }

        //swap the criteria to the index of current limit
        holder = copyArray[selectionLimit].number;
        copyArray[selectionLimit].number = copyArray[indexOfCriteria].number;
        copyArray[indexOfCriteria].number = holder;
        frames.push(JSON.parse(JSON.stringify(copyArray)));

        copyArray[selectionLimit].className = "sorted";
        frames.push(JSON.parse(JSON.stringify(copyArray)));
        
        selectionLimit--;
    }

    return frames;
}