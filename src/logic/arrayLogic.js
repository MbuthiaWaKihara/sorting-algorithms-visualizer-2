export const createNewArray = size => {
    let newArray = [];
    for(let counter = 0; counter < size; counter++){
        newArray[counter] = {
            number: Math.floor(Math.random() * (201 - 5) + 5),
            indexInArray: counter,
            className: 'initial',
        }
    }
    return newArray;
}