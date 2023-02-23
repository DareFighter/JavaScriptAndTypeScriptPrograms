

const Factorial = (num: number) => {
    let result:number =1;
    let i:number;
    for(i=num; i>=1; i--){
            result  *= i;
    }

    return result
}


console.log(Factorial(3))