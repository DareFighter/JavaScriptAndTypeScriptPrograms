const ResetArray = (arr:any[]) => {
    arr = []
    
    if(arr.length == 0){
        return `array length is ${arr.length}`
    }
    else {
        return `array is not empty ${arr.length}`
    }
}


const num:any[] = [1,2,3,3];
console.log(ResetArray(num))