// const tahoe = {
//     mountains: ["Hi", "Pillar", "Dillar", "sillar"],
//     print: (delay = 1000) =>{
//         setTimeout(() => {
//             console.log(this.mountains.join(", "))
//         }, delay)
//     }
// }

// tahoe.print()

/* -----------USING REST OPERATOR WITH ARRAYS---------------------- */

// const sandwich = {
//     bread: 'dutch crunch',
//     meat: 'chicken',
//     cheese: 'American cheese',
//     toppings: ['olive', 'onion', 'tomato']
// }

// let {meat, bread} = sandwich;
// console.log(meat = "poyo", bread)

// const peaks = ["Tallac", "Ralston", "Rose"];
// const canyons = ["ward", "Backwood"];
// const tahoe = [...peaks, ...canyons];

// console.log(tahoe.join(", "))
// const [lax] = peaks.reverse();
// console.log(lax)


// const nums = [1,2,3,4,5,6];
// const [last] = nums;
// console.log(last)

// const peaks = ["Tallac", "Ralston", "Rose"];
// const [firstt, ...others] = peaks;
// console.log(others.join(","));


// function directions(...args){
//     let [start, ...remaining] = args;
//     let [stops, ...finish] = args.reverse();

//     console.log(start)
//     console.log(`The stop name is ${stops}`)
//     console.log(`The start name is ${start}`)
// }

// directions("Dallas", "Fort Worth", "Arlington", "Plano")

/* ----------------------USING SPREAD OPERATORS WITH OBJECTS------------------- */

// const morning = {
//     breakfast: "oatmeal",
//     lunch: 'peanut butter and jellyy'
// };
// const dinner = "mac and cheese";

// const backpackMeals  = {
//     ...morning, 
//         dinner
// }

// console.log(backpackMeals)

/* ---------------------USING ASYNCHRONOUS JAVASCRIPT---------------- */
//-------------------------PROMISE---------------------
// fetch('https://api.randomuser.me/?nat=US&results=1')
// .then(res => res.json())
// .then(json => json.results)
// .then(console.log)
// .catch(console.error)


/* --------------------------USING ASYNC AWAIT------------- */

// const getFakePerson = async () => {
//     try{
//     let response = await fetch("https://api.randomuser.me/?nat=US&results=1")
//     let {result} = response.json(); //converting the response to json
//     console.log(result)

// }catch(error){
//     console.error(error)
// }}

// getFakePerson()

// const getPeople = count => new Promise((resolve, reject) => {
//     const URL = ''
//     const request = new XMLHttpRequest();
//     request.open("GET", URL);
//     request.onload = () => 
//     request.status === 200 
//     ? resolve(JSON.parse(request.response).results) 
//     : reject(Error(request.statusText));
//     request.onerror = err = rejects(err)
//     request.send();
// })


//----------------------Asynchronous Javascript---------------------------------------
let log = console.log;
// let a = 5;
// let b = 50;

// let a1 =( function() {return 5})() //executes first
// let b1 = (function() {return 50})() //executes second

// log(a1)
// log(b1)

// let a2 = function(num) {return 5*num} //fourth
// let b2 = function() {return 50} //third

// log(a2(b2()))

// 5
// script.js:113 50
// script.js:118 250



/* ---------------------------------SYNCHRONOUS CODE----------------------------- */
//We can achieve asynchornity in Javascript by using some callbacks, fetch, setTimeOuts, Promises, fetching data from database

/* --------USING SETTIMEOUT to create asynchronousity */
let a3 = 100;
setTimeout(function(){a3--; log(a3)}, 0)
log(a3);
setTimeout(function(){ a3++; log(a3)}, 0)


/* ----------------USING PROMISE TO SHOW ASYNCHRONOUS NATURE---------- */
let p = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve("Hi")
        log(p)
    }, 0)
})
log(p)

setTimeout(function(){
    log(p)
}, 0)
log(p)

//until the promise is resolved, it shows synchronous by pending
//once the promise is resolved