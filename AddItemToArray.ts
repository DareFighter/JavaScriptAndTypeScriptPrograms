

const AddItemToArray = (arr:any[], keyValue:any, indexValue:number) => {
    arr.splice(indexValue, 0, keyValue);


    return arr;

    
}

const arrValue:any[] = [1,2,4,5];
const indexValue:number = 2;

console.log(AddItemToArray(arrValue,3,indexValue));