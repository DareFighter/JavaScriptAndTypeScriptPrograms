
const SumOfNaturalNumbers = (num: number) => {
    let  result: number =0;
    let i:number;
    for(i=1; i<=num; i++){
        result += i;
        
    }
    return result;
}


console.log(SumOfNaturalNumbers(100))