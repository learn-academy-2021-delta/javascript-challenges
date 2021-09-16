// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// var testArr1 = [3, 9, 15, 4, 10]
// // --> [9, 27, 45, 12, 30]
//input-array of numbers
//output- array of numbers that have been multipied by 3
//multiply each number by 3
// const mult3 = (array) => {
//     let numbersMult3 = []
//     for(let i=0; i<array.length; i++)
//     {
//         numbersMult3.push(array[i] * 3)
//         console.log(numbersMult3)
//     }
//     return numbersMult3
// }
// console.log(mult3([3, 9, 15, 4, 10]))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
//var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // --> [-7, 3, 5, 13]
//input-array of numbers
//output-odd numbers in array
//conditionals
// const oddnum = (array) => {
//     let outOddnum = []
//     for(let i=0; i<array.length; i++){
//         if(array[i] % 2 !== 0)
// outOddnum.push(array[i])
//     }
//     return outOddnum
// }
// console.log(oddnum(testArr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // --> "nicework"

//input-array of numbers and letters
//output-string with only letters "nicework"
//typeof method

const comboArray = (array) => {
  let newArr = []
  if (typeof comboArr){
  for(let i=0; i<array.length; i++){
    newArr.push(array[i])
  }
}
return newArr
}
console.log(comboArray(comboArr));

// Create a function that takes in an array of numbers and returns the sum.
// var addThese1 = [1, 2, 3, 4]
// // --> 10

// var addThese2 = []
// // --> 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// var indexHighestNumber = [1, 4, 2, 3]
// // --> 1
