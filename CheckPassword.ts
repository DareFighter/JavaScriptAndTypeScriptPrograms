
const passwords:string[] = ["shreyas", "password", "fighter"];



const checkPassword = (password:string) => {
    let i:number;
    for(i=0; i<passwords.length; i++){
        if(password == passwords[i]){
            return `User is logged in `
        }
    }

    return `Password is invalid`
}


console.log(checkPassword("fighter2"))