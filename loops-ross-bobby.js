// iterpolation
   // the process of doin something multiple times until a condition is met.
   // for loop - Tool for iteration.
   ///////////// has three arguments
   ////////////////// - starting point
                      // - end point
                      // - and what to do after each loop

///// Let - is a variable declaration (var)
////  i (index) - the location of a value in a string arrays
//// Value - data at a location
//// scope - is what variables are accessible in different parts of the code base
//// local scope - variables that are accessible within a code block
//// global scope - variables that are accessible outside of a code block
//// ++ is increment
//// -- is decrement
//// == hard equal

  //ex. loop indexing up by one
//       for(let index=0; index < 10; index++) {
//         console.log(index);
// }
//       for(let i=0; i < 10; i++) {
//         console.log(i);
//       }

//   //ex. loop indexing down by one
//         for(let i=10; i>=0; i--) {
//           console.log(i);
// }
//
// var number = 13
// for(let i=12; i<number; i++) {
// //   console.log("bob git yo but on gear");
// }
/////////////////////////////////////////////////////////////////////////////
// //for(first argument; second argujment; third argument){what is to be done i.e.}
// is the outer structure of for loops
//              0         1         2       3     4       5     6       7     8        9
// var myRhyme = ["enie", "meanie", "minie", "mo", "catch", "a", "tiger", "by", "it's", "toe"]
// for(let i = 0; i < myRhyme.length; i++){
//   console.log(myRhyme[i]);
// }
/////////////////////////////////////////////////////////////////////////////////
//                this is an array
// var myArrayOne = [10,20,30,40]
// //      the number below is the index within the array
// for(let i=1; i < myArrayOne.length; i++) {
//   console.log(myArrayOne[2] * 13);
// }
//////////////////////////////////////////////////////////////////////////////
// for(let i=1; i<16; i++) {
//   console.log(i)(i+4))
// }
/////////////////////////////////////////////////////////////////////////////
// var letters = "sheldon is a booger"
//
// for(let i=10; i<letters.length; i++) {
//   console.log(letters[i])
// }
////////////////////////////////////////////////////////////////////////////////
      // var falalalalas = ["fa", "la", "la", "la", "laaaaas"]
      // for (let i = 0; i < falalalalas.length; i++) [
      //   console.log(falalalalas[i])
      // ]
///////////////////////////////////////////////////////////////////////////
// var shots = 88
//
// for (let i = 0; i < shots; i++) {
//   if(i === 0) {
//   console.log("shots")
// }
// else if(i%7 === 0) {
// console.log("everybody");
// }
// else{ console.log("shots")}
//  }
///////////////////////////////////////////////////////////////////////////
//
//  ARRAYS
////
// var colorArray = [blue, yellow, green, black]
// var carArray = [mercedes, cadillac, bmw, infiniti]
// var studentArray = [tom, george, vijay, belinda]
//
// console.log(colorArray.length);
// console.log(carArray.length);
// console.log(studentArray.length);
//
//// Join - is an accessor converst all values in array to a strings
          //
          // var myName = ['r', 'o', 'b', 'e', 'r', 't'] // array to be joined into string//
          // console.log(myName.join("")); // without the quotes returns with commas///
          //                                   //  "", " ", "  ", "      ", allows for additional input//
//////////////////////////////////////////////////////////////////////////////////////////////

// Array accessor .concat - merges two or more arrays to form one arrays

  // var letters1 = ["a", "b", "c", "d" ]
  // var letters2 = ["a", "b", "c", "d" ]
  // console.log(letters1.concat(letters2));

  var learnStudentsArray = "Sahtra Lillian Kevin Ross Napoleon"
console.log(learnStudentsArray.split(""))
  ////////////////////////////////////////////////////////////////////////////////////////////
// 1. Logging values with for loops
//
// // a. Write a for loop that logs each number from 1 - 20.
//
// for(let i=1; i<=20; i++){
//   console.log(i)
// };
//
// // b. Write a for loop that logs the result of each number from 1 - 20 tripled.
//
// for(let i=1; i<=20; i++){
//   console.log([i] * 3)
// };
//
// // c. Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD" Expected output --> ODD, 2, ODD, 4, ODD, 6 ...etc
//
// for(let i=1; i<=20; i++){
//   if(i%2 === 0){
//     console.log(i)
//   } else {
//     console.log("ODD")
//   }
// };
//
// // 2. Looping over an array. Consider this variable:
// var nums = [3, 57, -9, 20, 67]
//
// // a. Create a loop that will log the highest number from the array. Expected output --> 67
//
// var largest = 0
//
// for(let i=0; i<nums.length; i++){
//   if(largest<nums[i]) {
//     largest = nums[i];
//   }
// }
// console.log(largest);
//
// // b. Create a loop that will log the lowest number from the array Expected output --> -9
// var smallest = 0
//
// for(let i=0; i<nums.length; i++){
//   if(smallest>nums[i]) {
//     smallest = nums[i];
//   }
// }
// console.log(smallest);
//
// // c. Create a loop that will log the remainder of each number when divided by 2. Expected output --> 1, 1, -1, 0, 1
//
// for(let n=0; n<nums.length; n++){
//   console.log(nums[n]%2)
// };
//
// // 3. Looping over a string. Consider this variable:
//
//              var myString = "learn student"
//              console.log(myString.length);{
//  //
//  // }
//
// //
// //
// // // Write the code that will log the number of times the letter "e" occurs in the string. Expected output --> 2
// // // STRETCH Challenges
// //
//               for(let i=0; i<myString.length; i++) {
//



//
//
// // Even or Odd: Write a for loop that iterates from 0 to 15. For each iteration, it will check if the current number is odd or even, and display the appropriate outcome. Expected output --> "0 is even" "1 is odd" "2 is even" ...etc
// // Fizz Buzz: Use a for loop to log all numbers from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz. Expected output --> 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc
