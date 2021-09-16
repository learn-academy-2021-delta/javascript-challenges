// STRETCH Challenges

// Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome"
// // --> "jvscrpt s wsm"

//goal: to remove vowels from a string (a, e , i , o, u)

//first step create a function with a parameter string
//tools: filter(), split(""), join(""), .indexOf() 
//remove vowels
//return string

const noVowels = (string) => {
    let newArr = string.split("")
    return newArr.filter(value => value !== "a" && value !== "e" && value !== "i"&& value !== "o"&& value !== "u").join("")
}
console.log(noVowels(str));


//other option to explore: comparing two arrays at each index
//newArr[i] != vowels[i]

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]