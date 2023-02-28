const CheckNumber = (num:number) => {
    if (typeof num == 'number' && !isNaN(num)){


        //check if it is integer
        if(Number.isInteger(num)){
            return `${num} is integer`
        }
        else {
            return `${num} is a float value`
        }
    }
    else {
        return `${num} is not a number`
    }
}


console.log(CheckNumber(78))