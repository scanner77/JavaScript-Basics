//String is anything that is inside a single or double quote

//1. startsWith() :-> check if String starts with the specific character. "Position" is optional, if not specified, the default value if 0
//2. endsWith() :-> check if String ends with the specific character. 
//3. includes() :-> check if a String contains the specific character. It is case sensitive
//4. slice() :-> copy some part of the String without modifying it
//5. toUpperCase() :-> convert String to uppercase
//6. toLowerCase() :-> convert String to lowercase
//7. charAt() :-> returns character at specified position
//8. split() :-> Split String array of substrings
//9. replace() :-> replaces specified value with another value in a String
//10. repeat() :-> return new String with specified number of copies of existing string


/* .startsWith() */
// const str = "JavaScript is amazing";
// console.log(str.startsWith('JavaScript '));

// //include position 
// console.log(str.startsWith('Script',5));


/* .endsWith() */
// const str1 = "JavaScript is amazing";
// console.log(str1.endsWith('ing'));

// console.log(str1.endsWith('is', 13));
// console.log(str1.endsWith("s", 13));
// console.log(str1.endsWith("i", 13)); //false


/*  .includes() */ 
// const str = "JavaScript is amazing";
// console.log(str.includes('Script'));
// console.log(str.includes('script'))


/* .slice() */ 
// const str = "JavaScript is amazing"

// //Default start index is 0
// console.log(str.slice());

// //starts the copy at index 4
// console.log(str.slice(4))

// //from index 0 to index 10 copy
// console.log(str.slice(0,10))



 /* .toUpperCase() */
// const str = "JavaScript is amazing";
// console.log(str.toUpperCase());

/* .toLowerCase() */
// const str = "JavaScript is amazing";
// console.log(str.toLowerCase());

/* .charAt() */
// const str = "JavaScript is Amazing";
// console.log(str.charAt());
// console.log(str.charAt(11))
// console.log(str.charAt(100))


/* .split() */
// const orStr = "JavaScriptisAmazing"
// const str = "JavaScript is amazing";
// const strNew = "JavaScript-is-amazing";
// console.log(str.split());
// console.log(str.split(' '))
// console.log(strNew.split("-"))
// console.log(orStr.split("i"))

/* .replace() */
// const str = 'JavaScript is amazing';
// console.log(str.replace('JavaScript', "ReactJs"))

/* .repeat() */
const str = "JavaScript";
console.log(str.repeat(3));
console.log(str.repeat(0)); //prints empty
console.log(str.repeat(1))
