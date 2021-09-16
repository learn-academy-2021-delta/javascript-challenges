// Write a function named marco that returns "polo".
function macro(){
  return "polo"
}
console.log(macro());
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
  return `Welcome ${name}`
}
console.log(greeting("Anthony"));
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddEven = (number) => {
  if(number % 2 === 0){
    return "Even"
  } else {
    return "Odd"
  }
}
console.log(oddEven(2));
console.log(oddEven(1));
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => {
  return `${number*3}`
}
console.log(triple(3));
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (number1, number2) =>{
  return `${number1 * number2}`
}
console.log(multiply(2, 4));
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num1, num2) => {
  if(num1 % num2 === 0) {
    return `${num1} is evenly divisible by ${num2}`
  } else {
    return `${num1} is NOT evenly divisible by ${num2}`
  }
}
console.log(divisibleBy(10,5));
console.log(divisibleBy(8,5));
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (numScore) => {
  if (numScore >= 90 && numScore <= 100) {
    return "A"
  } else if (numScore < 90 && numScore >= 80) {
    return "B"
  } else if (numScore < 80 && numScore >= 70) {
    return "C"
  } else if (numScore < 70 && numScore >= 60) {
    return "D"
  } else if (numScore <60 && numScore >= 0){
    return "F"
  } else {
    return "This is not a score. Input a number score"
  }
}
console.log(assignGrade(120));
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (string1, string2) => {
  if (string1.length > string2.length) {
    return `${string1}`
  } else {
    return `${string2}`
  }
}
console.log(isLonger("This is my first string!", "This is my second string!"));
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (numb1, numb2) => {
  if (numb1 > numb2) {
    return `${numb1}`
  } else if (numb1 < numb2) {
    
  }
}
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
