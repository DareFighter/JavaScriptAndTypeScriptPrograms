

const LargestAmongThreeNumbers = (number1: number, number2: number, number3: number) => {
    if (number1 > number2 && number1 > number3){
        return `number1:${number1}  is greater`
    }
    else if(number2 > number1 && number2 > number3){
        return `number2:${number2} is greater`
    }
    else {
        return `number3:${number3} is greater`
    }
}


console.log(LargestAmongThreeNumbers(8,9,10))