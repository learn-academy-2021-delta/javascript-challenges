// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.
//
// Write a function named marco that returns "polo".
const macro = () => {
  return 'polo'
}
console.log(macro())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
  return `Welcome, ${name}!`
}
console.log(greeting("Lillian"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => {
  if (number % 2 === 0) {
    return `${number} is even`
} else {
    return `${number} is odd`
}
}
console.log(oddOrEven(3))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => {
  return number * 3
}
console.log(triple(1))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

const multiply = (num1, num2) => {
  return num1 * num2
}
console.log(multiply(3, 5))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibleBy = (num1, num2) => {
  if (num1 % num2 === 0) {
    return `${num1} is evenly divisible by ${num2}`    
  } else {
    return `${num1} is not evenly divisible ${num2}`
  }
}
console.log(divisibleBy(10, 5))
//
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
//
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

const isLonger = (str1, str2) => {
  if (str1.length > str2.length) {
    return str1
  } else if (str2.length > str1.length) {
    return str2
}
}
console.log(isLonger("lillian", "kevin"))
//
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
//
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case //////letters.
