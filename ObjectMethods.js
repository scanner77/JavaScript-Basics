//JavaScript is a quite special language as it does not take Object Oriented Approach like Java does.
//JavaScript takes prototypical approach for inheritance
//Link: https://medium.com/youstart-labs/javascript-object-methods-every-developer-should-know-c68c132a658
/* 
List of Topics 
. shallow copy - Object.assign()
. Deep copy - JSON.parse() & JSON.stringify()
. Object.create()
. Object.entries()
. Object.keys()
. Object.values()
. Object.freeze()
*/

/* Most common way to initialize a JS Object */
// let obj = {};
// obj.name = "Laxman";
// obj.age = 23;
// obj.speak = function (){
//     return "My name is " + this.name + " and I am " + this.age + " yrs old"
// }
// console.log(obj.speak())


/* Copying an Object */
/* Here newObj is just a reference to obj. Whenever any property chanages in either of them - both objects are affected */
// let newObj = obj; //This is how you can copy an object
// obj.year = 1996;
// console.log(newObj.year)


/* Shallow Copy
: You can create a shallow copy i.e. a top level properties copy, using Objects.assign() method
*/
// let copyObject = Object.assign({}, newObj);
// copyObject.name = "ronaldo";
// console.log(copyObject.speak())
// console.log(newObj.speak())

/* This example is copying newObj and all its properties to copyObject. You can check out that speak method will only print the new name on copyObject
However, this methods fails when we have nested objects in property values. Those objects are still not copied and work as shared reference in both objects.
Look at this example */

// let sourceObject = {name:"neymar", country: {name: "Brazil"}};
// let shallowCopyObj = Object.assign({}, sourceObject);
// shallowCopyObj.country.name = "India";
// console.log(sourceObject)




/* Deep Copy */
const circle = {
    radius: 1,
    draw(){
        console.log('draw')
    }
}
/* First Way to clone an object */
// const another = {}
// for(let key in circle)
// circle[key] = another[key];
// console.log(another)


/* Second way to clone an Object */
const obj  = Object.assign({color: 'white'}, circle)
console.log(obj)
/* Third way to clone or copy an Object  using Spread Operator*/

const newObj = {...obj}
console.log(newObj)