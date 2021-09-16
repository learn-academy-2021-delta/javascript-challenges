// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

// var testArr1 = [3, 9, 15, 4, 10]
// // // --> [9, 27, 45, 12, 30]

// const mult3 = (array) => {
//     let newArray = []
//     for(let i=0; i < array.length; i++){
//         newArray.push(array[i] * 3)
//     }
//     return newArray
// }
// console.log(mult3(testArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // // --> [-7, 3, 5, 13]

// const onlyOdd = (array) => {
//     let newArray = []
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 !== 0) {
//             newArray.push(array[i])
//         }
//     } return newArray
// }
// console.log(onlyOdd(testArr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // // --> "nicework"

// const letters = (array) => {
//     let newString = []
//     for(let i =0; i < array.length; i++) {
//         if(typeof array[i] === "string"){
//             newString.push(array[i])
//         }
//     }
//     return newString
// }
// console.log(letters(comboArr).join(""))


// Create a function that takes in an array of numbers and returns the sum.

// var addThese1 = [1, 2, 3, 4]
// // // --> 10

// var addThese2 = []
// // // --> 0

// const sum = (array) => {
//     let addSum = 0
//     for(let i=0; i < array.length; i++){
//         addSum = addSum + array[i]
//     }
//     return addSum
// }
// console.log(sum(addThese1))

// Create a function that takes in an array of numbers and returns the index of the largest number.
// var indexHighestNumber = [1, 4, 2, 3]
// // // --> 1

// // input an array of numbers 
// // output is the index of the largest number 
// // put the array into numeric order and output the last index of the array 

// const indexLargestNumber = (array) => {
//     let index = 0
//     let large = 0
//     for(let i=0; i < array.length; i++){
//        if(array[i] > large) {
//            large = array[i]
//            index = i
//        // return indexHighestNumber[i]
//        }
//        }
//         // index = index{i} - number at index 1 if positive then the first is bigger
//         // index 0 - index 2, index 0 - index 3, 
       
//     return index
// }
// console.log(indexLargestNumber(indexHighestNumber))


    

//STRETCH Challenges

//Create a function that takes in two arrays and returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// --> [3, 7, 10, 5, 4, 8, 2, 1]


const newSet = (arr1, arr2) => {
    let catArr = arr1.concat(arr2);
    console.log(catArr);
    let newArr = []
    for (let i = 0; i < catArr.length; i++){
        if(newArr.length === 0){
            newArr.push(arr1[0]);
        } else if (newArr.length > 0) {
            for (let j = 0; j <catArr.length; j++){
                if (newArr[i] === catArr[j]) {

                }
            }
        }
    }
    return newArr
}
console.log(newSet (arr1, arr2))
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

// var addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // --> 55

// var addUp3 = 600
// // --> 180300
