

const Calculator = (num1: number, num2: number, operand: string) => {
    const operator = ['*', '+', '/', '-'];
    let result: number;
    if (operand == operator[0]) {
        result = num1 * num2;
        return result;
    }
    if( operand == operator[1]){
        result = num1 + num2;
        return result;
    }
    if(operand == operator[2]){
        result = num1 / num2;
        return result;
    }
    if(operand == operator[3]){
        result = num1 - num2;
        return result
    }
}


console.log(Calculator(2, 3, "+"))