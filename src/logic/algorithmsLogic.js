export const randomizeAlgsInfo = () => {
    //prepare random alg
    let algNumber = Math.floor(Math.random() * (6 - 1) + 1);
    let algName;
    if(algNumber === 1) algName = 'insertion';
    if(algNumber === 2) algName = 'selection';
    if(algNumber === 3) algName = 'bubble';
    if(algNumber === 4) algName = 'merge';
    if(algNumber === 5) algName = 'quick';

    //prepare random order
    let orderNumber = Math.floor(Math.random() * (3 - 1) + 1);
    let orderName;
    if(orderNumber === 1) orderName = 'ascending';
    if(orderNumber === 2) orderName ='descending';

    return ({
        algorithm: algName,
        order: orderName,
    });
}