

const RandomNumberBetweenNumbers = (min:number, max: number) => {
    const a = Math.floor(Math.random() * (max - min  +1)) + min;
    return `Random value between ${min} and ${max } is ${a}`
}


console.log(RandomNumberBetweenNumbers(5,25))