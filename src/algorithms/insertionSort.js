export default (decreasing, rawArray) => {
    let holder;
    let copyArray = rawArray;
    let frames = [];
    
    for(let counter = 0; counter < copyArray.length; counter++) {
        for(let compare = counter; compare > 0; compare--) {
            copyArray[compare].className = "inComparison";
            copyArray[compare - 1].className = "inComparison";
            frames.push(JSON.parse(JSON.stringify(copyArray)));
            
            if(decreasing){
                if(copyArray[compare].number > copyArray[compare - 1].number) {
                    copyArray[compare].className = "wronglyOrdered";
                    copyArray[compare - 1].className = "wronglyOrdered";
                    frames.push(JSON.parse(JSON.stringify(copyArray)));
    
                    holder = copyArray[compare];
                    copyArray[compare] = copyArray[compare - 1];
                    copyArray[compare - 1] = holder;
                    frames.push(JSON.parse(JSON.stringify(copyArray)));
                }

            }else{
                if(copyArray[compare].number < copyArray[compare - 1].number) {
                    copyArray[compare].className = "wronglyOrdered";
                    copyArray[compare - 1].className = "wronglyOrdered";
                    frames.push(JSON.parse(JSON.stringify(copyArray)));
    
                    holder = copyArray[compare];
                    copyArray[compare] = copyArray[compare - 1];
                    copyArray[compare - 1] = holder;
                    frames.push(JSON.parse(JSON.stringify(copyArray)));
                }
            }

            copyArray[compare].className = "initial";
            copyArray[compare - 1].className = "initial";
            frames.push(JSON.parse(JSON.stringify(copyArray)));
        }
    }
    
    return frames;
    
}