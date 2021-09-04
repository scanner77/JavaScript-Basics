export default class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }}

    export function printName(user){
        console.log(`User's name is ${User.name}`)
    }

    export function printAge(age){
        console.log(`User's age is ${User.age}`)
    }
    const log = console.log;
    export const print = (message) =>
    { 
        setTimeout(() => {
            log(message, new Date())
    },1000)};

