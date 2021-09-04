//In Javascript functions are variables
// var log = function(message){
//     console.log(message);
// }

// log("In Javascript functions are variables")

// //the same above function in arrow function style

// var log = (message) => {
//     console.log(message)
// }
// log("okay")

// function xyz(message){
//     console.log(message)
// }
// xyz("This function has name. So it can be hoisted. Meaning, during compilation this function name will be taken at the top. Meaning, we can call the function before it is declared. Hoisting will take care of it.")


// const obj = {
//     message: 'Hi my name is Laxman Bista',
//     xyz(message){
//         console.log(message)
//     }
// }
// obj.xyz(obj.message)


/* -------------------We can add functions to an array in Javascript ---------------*/

// const arr = ["Hi my name is Laxman", console.log("bitch"), message => message.log(message)]

// const insideFn = logger => {
//     logger("THey can be sent to other functions as argumenbts")
// };
// insideFn(message => console.log(message))
// //THEY CAN BE SENT TO OTHER FUNCTIONS AS ARGUMENTS

// const createScream = function(logger){
//     return function(message){
//             logger(message.toUpperCase() + "!!!!")
//     }
// }

// const scream = createScream(message => console.log(message))
// scream("american hero")

/* ----------------------Way of assigning----------------------- */
/* ----FIRST WAY OF ASSIGNING: giving it's value inside a funciton and printing outside */
// const xyz = (message) => {
//     message("Billa")
// }

// xyz(message => console.log(message))

// /* ---SECOND WAY OF ASSIGING: giving it's value from outside and print it inside the function */

// const xyza = (message) => {
//     console.log(message)
// }

// xyza("Yessir omw")


/* ------------------Declarative APPROACH TO FUNCTIONAL PROGRAMMING: What it should do? */
//In Declarative programming, syntax itself describes what should happen
// let string = "Resturants in Hanalei";
// let urlFriendly = "";

// for(let i = 0; i < string.length; i++){
//     if(string[i] === " "){
//         urlFriendly = urlFriendly + ""
        
//     }else{
//         urlFriendly = urlFriendly + string[i];
//     }
// }

// console.log(urlFriendly)


// /* ------------------IMPERATIVE APPROACH TO FUNCTIONAL PROGRAMMING: What it should do? */
// let strings = "Resturants in Hanalei";
// let friendly = strings.replace(" ", "");
// console.log(friendly)

/* ---------compose(cobmineWith(sessionStorage, "members"))-- compose is a HOF that returns another function */

/* ------------------------------------Manipulating DOM----------------------- */


// const target = document.getElementById("target");

// const wrapper = document.createElement('div');
// const headline = document.createElement('h1');

// headline.innerHTML = "This is heading h1";

// wrapper.appendChild(headline);
// target.appendChild(wrapper);
// headline.style.border = "1px solid black";
// wrapper.style.border = "1px solid black";

//Queryselectors for id and class name


//-------------NOW Let's construct DOM declaratively using a React Component-------------------//

// React is declarative. The render function uses the instructions declared in the component to build the DOM. 

// const {render} = REACTDOM;


// const Welcome = () => (
//     <div id = "welcome">
//         <h1>Hello World</h1>
//     </div>
// )

// render(<Welcome />, document.getElementById("target"))
/* ------------------------------------------------------------------------------------------ */

/* ------------FUNCTIONAL CONCEPTS----------------- */
