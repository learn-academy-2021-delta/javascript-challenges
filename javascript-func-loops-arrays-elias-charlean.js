//Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
var testArr1 = [3, 9, 15, 4, 10]
// --> [9, 27, 45, 12, 30]
//Input an array
//Output each element in array * 3
//Create empty array
//Use for loop
//Push each element in the array *3 into the empty array
const multiply = (array) => {
  let numbersMultiplyBy3 = []
  for (let i=0; i<array.length; i++) {
    numbersMultiplyBy3.push(array[i]*3)
  } return numbersMultiplyBy3
}
console.log(multiply(testArr1))

//Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // --> [-7, 3, 5, 13]
//Input an array.
//Output sorting odd numbers from array.
//Create an empty array.
// Use for loop on the array
// Push each element not evenly divisible by 2.
const sortOutOddNumber = (array) => {
  let oddNumbers = []
  for (let i=0; i<array.length; i++) {
  if (array[i]%2 !== 0) {
      oddNumbers.push(array[i])
    }
  } return oddNumbers
}
console.log(sortOutOddNumber(testArr2))
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // --> "nicework"
//Input an array of different datatypes.
//Output a collection of string datatype.
//Create an empty string.
// Use for loop on the array
//Make a conditional statement that determine if datatype is a string
const dataExtract = (array) => {
  let string = " "
  for (let i=0; i<array.length; i++) {
    if (typeof array[i] === "string") {
      string += array[i]
    }
  } return string
}
console.log(dataExtract(comboArr))

//Create a function that takes in an array of numbers and returns the sum.
 var addThese1 = [1, 2, 3, 4]
// // --> 10
var addThese2 = []
const sum = (array) => {
  let sum1 = 0
  if (array.length === 0) {
    return 0
  }
  for (let i=0; i<array.length; i++) {

    sum1 += array[i]
  } return sum1
}
console.log(sum(addThese2))


// --> 0
//Create a function that takes in an array of numbers and returns the index of the largest number.
// var indexHighestNumber = [1, 4, 2, 3]
// // --> 1
//
// STRETCH Challenges
//
// Create a function that takes in two arrays and returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3, 3]
// var arr2 = [7, 8, 2, 3, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// var arrayLength = 6
// var arrayValue = 0
// // --> [0, 0, 0, 0, 0, 0]

// var arrayLength = 4
// var arrayValue = 11
// // --> [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// var addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // --> 10
//
// var addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // --> 55
//
// var addUp3 = 600
// // --> 180300
