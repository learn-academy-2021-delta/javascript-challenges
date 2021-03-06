// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
var testArr1 = [3, 9, 15, 4, 10]
// // --> [9, 27, 45, 12, 30]

//define a new func, define a new variable within the func, create for loop to iterate through array, using push operator multiply each element of the array and store in newArray, return newArray

const mult3 =(array)=>{
    let newArray = [];
    for(let i=0; i<array.length; i++){
        newArray.push(array[i]*3);
    } return newArray
}
console.log(mult3(testArr1));


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // --> [-7, 3, 5, 13]

//define a new func, define a new variable within the func, create for loop to iterate through array, check if each element is odd or even using modulus, using push operator add odd elements to newArr, return newArr

const oddOnly =(array)=>{
    let newArr = []
    for(let i = 0; i < array.length; i++){
        if(array[i]%2 !== 0){
            newArr.push(array[i])
        }
    }
    return newArr
}
console.log(oddOnly(testArr2));

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // --> "nicework"

//define a new func, define a new variable within the func, create for loop to iterate through array, check if each element is typeof "string", using push operator add string elements to newArr, use join operator on newArr to make it a string, return newArr

const myString =(array)=>{
    let newArr = []
    for(let i = 0; i < array.length; i++){
        if(typeof array[i] === "string"){
            newArr.push(array[i])
        }
    }
    return newArr.join("");
}

console.log(myString(comboArr));

// Create a function that takes in an array of numbers and returns the sum.
var addThese1 = [1, 2, 3, 4]
// // --> 10
var addThese2 = []
// // --> 0

//define a new func, define a new variable within the func, create for loop to iterate through array, at each iteration add array element i to the new variable num and return num

const sumOf =(array)=>{
    let num = 0
    for(let i = 0; i < array.length; i++){
        num += array[i]
    }
    return num
}
console.log(sumOf(addThese2))



// Create a function that takes in an array of numbers and returns the index of the largest number.
var indexHighestNumber = [1, 4, 2, 3]
// // --> 1

//define a new func, define a variable to store largest number in, create a for loop to iterate through the array, at each iteration apply the condition if the variable is larger than the array element at array i to store the larger value in the new variable, 

const largestNum = (array) => {
    let bigNum = 0
    let indexBigNum = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] > bigNum){
            bigNum = array[i]
            indexBigNum = i
        }
    }
    return indexBigNum
}
console.log(largestNum(indexHighestNumber));

// STRETCH Challenges

// Create a function that takes in two arrays and returns one array with no duplicate values.
var array1 = [3, 7, 10, 5, 4, 3, 3]
var array2 = [7, 8, 2, 3, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]

const bestArr = (arr1, arr2) => {
    let catArr = arr1.concat(arr2);
    console.log(catArr);
    let newArr = [];
    // let uniqueArr = [...newSet catArr]
    for(let i = 0; i < catArr.length; i++){
        if(newArr.length === 0){
            newArr.push(arr1[0]);
        } else if (newArr.length > 0){
            for(let j= 0; j<newArr.length; j++){
                if (newArr[i] === catArr[j]) {

                } 
            }
        }
    }
        return newArr
}
console.log(bestArr(array1,array2))

// in for loop check if @ array [i] !== anything in newarray[i], in that case 

// for(let x = 0; x < arr1.length; x++){
//     for(let y = 0; y < arr2.length; y++){
//         if(arr1[x] !== arr2[y]){
//             emptyArr.push(arr1[x])
//         }
//     }
// }

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
// EPIC Challenges

// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here .
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.