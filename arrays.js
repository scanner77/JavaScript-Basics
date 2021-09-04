/* 
.some() => checks if one element in an array meets a certain criteria

.every() => checks if all the elements in an array meets a certain criteria

.reduce() => this method takes a callback function with 2 parameters ie acculumator and current value. We simply get the current value and add it to the acculumator

.map() => 

.flat() => creates a new array with all the sub array elements concatenated 

.filter() => The filter method creates a new Array with all the elements that pass the test implemented by the callback function

.forEach() => The forEach() method executes a provided function once for each array element
           => 2 important considerations when using `.forEach()`
           - There is no way to stop or break a forEach() loop other than throwing an exceptiton
           - forEach() expects a synchronous `callback`, it won't wait for promise to be resolved

*/

//.some()
// const a = [1,2,3,4,5,8].some(a => a > 8);
// console.log(a)


//.every()
// const  b = [6,7,8,9,11,21].every(a => a > 5);
// console.log(b)


//.reduce() -> great in doing sums of specific type of element 
// const numbers = [1,-1,2,3];
// const sum = numbers.reduce((acculumator, currentValue) => {
//     return acculumator + currentValue;
// });
// console.log(sum)


//.flat()
// const flatNums = [1,2,[3,4]];
// console.log(flatNums.flat())
// const arr1 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(arr1.flat(3))
// console.log(arr1.flat(Infinity))


//filter()
// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// function isPrime(n){
//     for(let i = 2; n > i; i++){
//         if(n % i == 0){
//             return false;
//         }
//     }
//     return n > 1
// }
// console.log(array.filter(isPrime))


//.forEach()
// let ratings = [5,4,5];
// let sum = 0;

// let sumFunction = async function(a,b){
//     sum = await sumFunction(sum, ratings)
// }
// console.log(sum)
//Expected Output: 14
//Output: 0 
/* Reason: Even though we would have expected the variable
sum to have accumulated all the values in the array and
have a value of 14, the output was 0 as the forEach() 
statement ended without awaiting for the promises, and
thus the console.log statement was executed before the
variable sum was updated. So be very aware of this 
situation as it can lead to your code producing 
unexpected results. */


//.findIndex()
//Find the index of a prime number in an Array
// function isPrime(num){
//     for(let i = 2; num > i; i++){
//         if(num % i == 0){
//             return false;
//         }
//     }
//     return num > 2
//}
// console.log([4, 6, 8, 9, 12].findIndex(isPrime))

//The following example finds the index of a fruit using an arrow function:
// const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
// const indexOfBlueberry = fruits.findIndex(fruit => fruit === "blueberries");
// console.log(indexOfBlueberry);
// console.log(fruits[indexOfBlueberry])


//.find()
//finds the next elelment value that matches the specified condition
// const array1 = [5, 12, 8, 44, 130];
// const found = (element) => element > 12;
// console.log(array1.find(found));


//.sort()
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months)

//.concat()
//It is used to merger two or more arrays into a new array.
// const letters = ['a', 'b', 'c'];
// const numbers = [1,2,3];
// const concatedItem = letters.concat(numbers);
// console.log(concatedItem);


//.fill()
// const arr1 = [1,2,3,4];
// console.log(arr1.fill(0,1,3))

//.includes()
// const nums = [1,2,3,4,5];
// console.log(nums.includes(3))

// const pets = ['cats', 'dogs', 'bat'];;
// console.log(pets.includes('dogs'))
// console.log(pets.includes('dog'))

//.reverse()
// const array1 = ['one', 'two', 'three'];
// console.log(array1.reverse())


//.flatMap()
// let arr1 = [1,2,3,4];
// console.log(arr1.map(x => [x*2]))
// console.log(arr1.flatMap(x => [x*2]))