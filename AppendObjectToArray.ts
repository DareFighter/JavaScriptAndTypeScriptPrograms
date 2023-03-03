interface appendObjectInterface {
    name:string,
    email:string
}

const AppendObjectToArray  = (arrValue:any[], appendObject:appendObjectInterface, indexValue:number) => {
    arrValue.splice(indexValue,0,appendObject)
    return arrValue;
}



const arrValue2:any[] = [1,2,3,4];
const appendObject:appendObjectInterface = {
    name:'someone',
    email:'someone@gmail.com'
}

console.log(AppendObjectToArray(arrValue2, appendObject, 4))

