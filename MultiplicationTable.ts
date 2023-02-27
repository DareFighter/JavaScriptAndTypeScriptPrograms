
const Table = (num: number) => {
    for(let i=1; i<=10; i++){
        let result:number = num * i;
        console.log(`${num}x${i}=${result}`)
    }
}

Table(3)