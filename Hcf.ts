let hcf:number;
const number1:number = 60;
const number2:number = 72;


for(let i=1; i<=number1 && i <= number2; i++){

    //check if is factor of both integers;
    if(number1 % i ==0 && number2 % i == 0){
        hcf = i;
    }
}


//display hcf
console.log(`HCF of ${number1} and ${number2} is ${hcf}`)