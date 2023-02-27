const FactorOfNumber = (num:number) => {
    
    let i:number;
    for(i = 1; i<=num; i++){
        if(num % i ==0){
            console.log(i)
        }
    }
}

FactorOfNumber(12)


