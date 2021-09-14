// Write a function named marco that returns "polo".
// Input will be a string
const marco = () => {
  return "polo"
}
console.log(marco())

//Output will be polo.

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
  return `Welcome, ${name}!`
}
console.log(greeting("Elias"))
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => {
  if(number%2 === 0){
    return "even"
  } else if (number%2 !== 0) {
    return "odd"
  }
}
console.log(oddOrEven(305))
// //Write a function named triple that takes a number
//  as an argument and returns the result of that number 
//  multiplied by 3.
const triple=(number)=>{
  return `${number*3}`
}
console.log(triple(10))

// Write a function named multiply that takes two numbers as arguments and 
//returns the result of the numbers multiplied together.
const multiply=(num1,num2)=>{
  return `${num1*num2}`
}
console.log(multiply(10,3))
// Write a function named divisibleBy that takes two numbers as 
//arguments and returns whether the first number is evenly divisible 
//by the second so that divisibleBy(10, 5) logs "10 is evenly 
//divisible by 5".
const divisibleBy=(num3,num4)=>{
  if(num3%num4===0){
    return `${num3}is evenly divisible by ${num4} `
  }else{
    return `${num3} is not evenly divisible by ${num4}`
  }
}
console.log(divisibleBy(8,3))
// Write a function named assignGrade that takes a number score as an 
//argument and returns the letter grade for the score.
const assignGrade=(score)=>{
  if(score>=93){
    return "A"
  }else if(score>=85){
    return "B"
  }else if(score>=77){
    return "C"
  }else if(score>=70){
    return "D"
  }else{
    return "I need to contact your parents"
  }
}
console.log(assignGrade(47))

// Write a function named isLonger that takes two strings as arguments 
//and returns the string that contains the most characters.
const isLonger=(str1,str2)=>{
  if(str1.length>str2.length){
    return `${str1} is longer than ${str2}`
  }else if(str2.length>str1.length){
    return `${str2} is longer than ${str1}`
}
}
console.log(isLonger("Elias","Charlean"))
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.