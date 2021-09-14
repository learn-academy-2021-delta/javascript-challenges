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
