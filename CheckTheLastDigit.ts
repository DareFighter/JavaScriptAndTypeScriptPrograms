const CheckTheLastDigit = (num1:number, num2:number, num3:number) => {
    let result1:number = num1%10;
    let result2:number = num2%10;
    let result3:number = num3%10;


    if(result1 == result2 && num1 == result3){
        console.log(`${num1}, ${num2} and ${num3} have the same last digit `)
    }
    else {
        console.log(`${num1}, ${num2} and ${num3} have different last digit`)
    }
}


CheckTheLastDigit(8,38, 88)