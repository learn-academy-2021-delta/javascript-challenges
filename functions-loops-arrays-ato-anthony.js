// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
var testArr1 = [3, 9, 15, 4, 10]

const mult3 = (array) => {
  let numbersMult3 = [];
  for(let i = 0; i<array.length; i++) {
    numbersMult3.push(array[i] * 3)
  }
  return numbersMult3
}
console.log(mult3(testArr1));

// --> [9, 27, 45, 12, 30]
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

const newNums = (array) => {
  let odd = []
  for(let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      let neg = Math.abs(array[i])
      odd.push(array[i])
    }
    else if(array[i] % 2 === 1) {
      odd.push(array[i]);
    }
  }
  return odd
}
console.log(newNums(testArr2))
// --> [-7, 3, 5, 13]
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

const num = (array) => {
  let string = [];
  for(let i = 0; i < array.length; i++) {
    if(typeof array[i] === "string") {
      string.push(array[i])
    }
  }
  return string.join("");
}
console.log(num(comboArr));
// --> "nicework"
// Create a function that takes in an array of numbers and returns the sum.
var addThese1 = [1, 2, 3, 4]
var addThese2 = []

const add = (array) => {
  let sum = 0;
  for ( i = 0; i < array.length; i++) {
  sum = sum + array[i]
  }
  return sum
}
console.log(add(addThese1));
console.log(add(addThese2));
// --> 10

// --> 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
//find largest number
//if number is in array. give index!

var indexHighestNumber = [1, 4, 2, 3]

const index = (array) => {
  let max = array[0];
  let maxIndex = 0;

  for (i = 0; i < array.length; i++) {
    if(indexHighestNumber[i] > max) {
      maxIndex = i;
      max = indexHighestNumber[i]
    }
  }
  return maxIndex
}
console.log(index(indexHighestNumber));
// --> 1
// STRETCH Challenges

// Create a function that takes in two arrays and returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3, 3]
// var arr2 = [7, 8, 2, 3, 1, 5, 4]
// --> [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// var arrayLength = 6
// var arrayValue = 0
// --> [0, 0, 0, 0, 0, 0]

// var arrayLength = 4
// var arrayValue = 11
// --> [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// var addUp1 = 4
// 1 + 2 + 3 + 4 = 10
// --> 10

// var addUp2 = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// --> 55

// var addUp3 = 600
// --> 180300
