
// const RemoveItemSpecificArray = (num:number[], keyValue:number) => {
//     let i:number;
//     let newArray:number[] = [];
//     for(i=0; i<num.length; i++){
//         if( num[i] !== keyValue){
//             newArray.push(num[i])
//         }
//     }

//     return newArray;
// }


const RemoveItemSpecificArray = (num:number[], keyValue: number) => {
    let index = num.indexOf(keyValue);

    if (index > -1){
        num.splice(index,1)
    }

    return num;
}


const numArray = [1,2,3,4,5,6,7,8,9];

console.log(RemoveItemSpecificArray(numArray, 2));

