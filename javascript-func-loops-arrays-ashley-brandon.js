// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

// creat a function we can use multiple times in an equation
//we are going to use testArray1 and we need to multiply every thing in testArray 1 by 3
//the outcome will be (9, 27, 45, 12, 30)
// var testArray1 = [3, 9, 15, 4, 10]
// --> [9, 27, 45, 12, 30]

// const mult3 = (array) => {
// let testArray1 = []
// for (let i = 0; i < array.length; i++) {
//     testArray1.push(array[i]* 3)
//     console.log(testArray1)
// }
// return testArray1
// }
// console.log(mult3(testArray1))


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

//create a function that can be used multiple times throughout our equation
// using a if statement, we are going to determine if our array has even or odd numbers
// we need an output that will give us only odd numbers from our array

// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // --> [-7, 3, 5, 13]

// const oddOnly = (array) => {
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {
//     if(array[i]% 2 === 1){
//         newArray.push(array[i])
//     }
//     }
//     return newArray
// }
//  console.log(oddOnly(testArr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// --> "nicework"


const string = (array) => {
let newString = []
for (let i = 0; i < array.length; i++) {
   newString.push(typeof String (comboArr))     
}
return comboArr
}
console.log(string(comboArr));