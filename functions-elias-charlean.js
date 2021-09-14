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
// Write a function named greaterNum that takes two numbers as 
//arguments and returns whichever number is the greater (higher) 
//number.
const greaterNum=(num5,num6)=>{
 return Math.max(num5,num6)
}
console.log(greaterNum(10,20))

// Write a function named yelling that takes a string as an argument 
//and return the string in all uppercase case letters.
const yelling=(string)=>{
  return string.toUpperCase()
}
console.log(yelling("Charlean"))
//The World Translator
//(a) Write a function named helloWorld that takes a language code 
//(e.g. "es", "de", "en") as an argument and returns "Hello World!" 
//in the given language. Ensure you function works for at least 5 languages.
//(b) Have your function default to returning English.
const helloworld=(language)=>{
    if(language==="spanish"){
      return "Hola Mundo"
    }
    else if(language==="arabic"){
      return "Selam weealekum"
    }else if(language==="french"){
      return "Bonjour le monde"
    }else if(language==="dutch"){
      return "Hallo wereld"
    }else{
      return "Hello world"
    }
  
    }

console.log(helloworld())
//The Pluralizer
//(a) Write a function named pluralizer that takes a number and a singular noun 
//as arguments and returns the number and pluralized form of the noun, if necessary.
const pluralizer=(num8,noun)=>{
  if(num8>=2){
    return `${num8} ${noun}s`
  }else if(num8=1){
    return `${num8} ${noun}`
  }
}
console.log(pluralizer(3,"cow"))
//pluralizer(5, "cat")
// expected output: "5 cats"

//pluralizer(1, "dog")
// expected output: "1 dog"
//(b) Enhance your function so it can handle a few collective nouns like "sheep", "goose",
// "child", "person" and "species".

const pluralizer1=(num9,noun1)=>{
  if(num9>=2 && noun1==="sheep"||"species"){
    return `${num9} ${noun1}`
  }else if(num9>=2 && noun1==="child"){
    return `${num9} ${noun1}ren`
  }else if(num9>=2&&noun1==="goose"){
    return `${num9}`+ " "+"geese"
  }else if(num9>=2){
      return `${num9} ${noun1}s`
    }else {
      return `${num9} ${noun1}`
    }
  }

console.log(pluralizer1(2,"goose"))
  
  
//   else if(num9=1){
//     return `${num8} ${noun1}`
//   }
// }