

function sum(num:number){
    if(num > 0) {
        return num + sum(num -1)
    }
    else {
        return num;
    }
}


console.log(sum(3))