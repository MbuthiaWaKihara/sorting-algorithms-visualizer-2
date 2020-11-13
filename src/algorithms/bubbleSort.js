export default (decreasing, rawArray) => {
    let swapped;
    let holder;
    let copyArray = rawArray;
    let frames = []; // this will hold all frames from the sorting process
    while(true){
        swapped = false;
        for(let counter = 0; counter < rawArray.length - 1; counter++){ 
            copyArray[counter].className = "inComparison";
            copyArray[counter + 1].className = "inComparison";
            frames.push(JSON.parse(JSON.stringify(copyArray)));
            if(decreasing){
                if(rawArray[counter].number < rawArray[counter + 1].number){
                    copyArray[counter].className = "wronglyOrdered";
                    copyArray[counter + 1].className = "wronglyOrdered";
                    frames.push(JSON.parse(JSON.stringify(copyArray)));
    
                    holder = copyArray[counter].number;
                    copyArray[counter].number = copyArray[counter + 1].number;
                    copyArray[counter + 1].number = holder;
                    swapped = true;
                    frames.push(JSON.parse(JSON.stringify(copyArray)));
                }

            }else{
                if(rawArray[counter].number > rawArray[counter + 1].number){
                    copyArray[counter].className = "wronglyOrdered";
                    copyArray[counter + 1].className = "wronglyOrdered";
                    frames.push(JSON.parse(JSON.stringify(copyArray)));
    
                    holder = copyArray[counter].number;
                    copyArray[counter].number = copyArray[counter + 1].number;
                    copyArray[counter + 1].number = holder;
                    swapped = true;
                    frames.push(JSON.parse(JSON.stringify(copyArray)));
                }
            }

            if(copyArray[counter].className !== "initial"){
                copyArray[counter].className = "initial";
                copyArray[counter + 1].className = "initial";
                frames.push(JSON.parse(JSON.stringify(copyArray)));
            }
        }

        if(!swapped) break;
    }

    return frames;
}