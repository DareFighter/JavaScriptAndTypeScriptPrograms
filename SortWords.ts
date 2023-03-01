const SortWords= (sentence:string) => {
    const result =sentence.split(' ');
    return result.sort()
}


console.log(SortWords("i am learning javascript"))