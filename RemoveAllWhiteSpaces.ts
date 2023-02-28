
const RemoveAllWhiteSpaces = (val:string) => {
    // const result = val.split(' ').join('');
    const result = val.trim()
    return result;
}


console.log(RemoveAllWhiteSpaces(' shreyas '))