const PrimeNumbersInAnInterval = (num1: number, num2: number) => {
    let PrimeNumberList:number[] = [];
    let i:number, j: number, k:number;
    for( i=num1; i<=num2; i++){
        let isPrime = true;
        for( j=2; j<i; j++){
            if(i%j == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            PrimeNumberList.push(i)
          
        }
    }

    return PrimeNumberList

    
}

console.log(PrimeNumbersInAnInterval(2,10))


