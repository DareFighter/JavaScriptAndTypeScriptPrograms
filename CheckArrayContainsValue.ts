const CheckArrayContainsValue  =(arr:any[], keyValue:any) => {
    let isContain:Boolean  = false;
    let i:number;

    for(i=0; i<arr.length; i++){
        if(arr[i] === keyValue){
            isContain = true;
        }
    }


    if(isContain){
        return `The KeyValue is present in the array`
    }
    else{
        return `The KeyValue is not present in the array`
    }
    
}


const arr:any[] = [1,2,3,4,5,6,'a','b'];
const keyValue:any = 'a';

console.log(CheckArrayContainsValue(arr, keyValue))