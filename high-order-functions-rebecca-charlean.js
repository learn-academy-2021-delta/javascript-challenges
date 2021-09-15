//Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10]
// // --> [30, 90, 150, 40, 100]
const multTen = (array) => {
  return array.map(value => {
    return value*10
  })
}
console.log(multTen(arr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // --> [7, 3, 5, 13]

const oddNum = (array) => {
  return array.filter(value => {
    return value%2 !== 0
  })
}
console.log(oddNum(arr2))

//Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // --> "nicework"

const createString = (array) => {
  let newArr = array.filter(value => { //created a variable to store the new array to be modified in line 30
    return typeof value === "string"
  })
  return newArr.join("") //modifies the array we saved to return a string
}
console.log(createString(comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]

//create a function: takes an array -> returns array
//filter() -> filter certain data types (we don't want false, null, 0, or "" values)
  //Boolean(value) !== false





//could use Boolean() -> forces a value into a Boolean value
// FALSY VALUES: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
console.log(Boolean(58)) //numbers return true 
console.log(Boolean(false)) //false will return false
console.log(Boolean("")) //empty string will return false
console.log(Boolean(0))  //0 will return false
console.log(Boolean(null)) //null will return false


// Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome"
// // --> "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
