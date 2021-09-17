// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

//// Write a function  that takes in an Array
//// output each element of the array multiplied by 10

// let array = [2,3,4,5,6]
//
// let numbersmlt10 = [2,3,4,5,6].map(value => {
//     return value * 10
//
// })
// console.log(numbersmlt10)

// var arr1 = [3, 9, 15, 4, 10]


// // --> [30, 90, 150, 40, 100]

// Write a function that takes in an array of numbers and returns a new array
//with only odd numbers.

// create function with an array
// return new array with odd

  var arr2 = [2,3,4,5,6,7,8,9]
    // const odd = (n) => {
    //   let newArr2= []
    //   for(let i=0; i<n.length; i++) {
    //     if(n[i] % 2 !== 0) {
    //       newArr2.push(n[i])
    //     }
    //   }
    //   return newArr2
    // }
    // console.log(odd(arr2));

    const odd = (array) => {
      return array.filter(value => value % 2 !== 0)
    }

    console.log(odd(arr2))


// // --> [7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a
//string with only the letters. HINT: Use typeof method

// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

// // --> "nicework"

// Create a function that takes in an array and returns an array without any
//false, null, 0, or blank values.

// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]

// // --> [58, "abcd", true]

// STRETCH Challenges


// Create a function that takes in a string and returns a new string with all the vowels removed.

// var str = "javascript is awesome"

// // --> "jvscrpt s wsm"

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.

// var arr1 = [3, 7, 10, 5, 4, 3]

// var arr2 = [7, 8, 2, 1, 5, 4]

// // --> [3, 7, 10, 5, 4, 8, 2, 1]
