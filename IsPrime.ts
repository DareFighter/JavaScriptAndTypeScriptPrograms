

const IsPrime = (num: number) => {
    let counter = 0;
    if(num == 1){
        return `1 is neither prime nor composite`
    }
    else if(num > 1){
    for( let i=1; i<=num; i++){
        if(num%i == 0){
            counter++;
        }
    }
    if(counter == 2){
        return `${num} is a prime number`
    }
    else{
        
        return `${num} is not a prime number`
    }
    }
}



console.log(IsPrime(4))