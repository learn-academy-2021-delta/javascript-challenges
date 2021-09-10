//Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
let price=100
if(price<=100)
{console.log("in budget")}

//Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
let hungry=true
if(hungry){
    console.log("eat food")}
else {console.log("keep coding")}
//Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
let trafficLight="green"
if(trafficLight==="green"){
    console.log("go")
}
else if(trafficLight==="yellow"){
    console.log("slow down")}
    else{console.log("stop")}

//Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
let num1=10
let num2=15
if(num1>num2){
    console.log(`${num1} is larger`)
}
else if(num2>num1){
    console.log(`${num2} is larger`)
}
else{console.log("numders are the same")}

//Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
let num3=30
if(num3%2===0){
    console.log("even")
}
else if(num3%2===1){
    console.log("odd")
}
else {console.log("zero")}

//STRETCH Challenges

//Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
let mark="100%"
console.log(mark==="100%"? "Perfect score":"No grade available")

//Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
let hungry1=true
let num4=5
let country="india"
console.log(typeof(hungry1))
console.log(typeof(num4))
console.log(typeof(country))

//Create a password checker using a single conditional statement. If a user inputs a password with 12 or 
//more characters AND the password includes !
//, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, 
//then log "That password is strong enough." Log "That is not a valid password." for every other input.

let password="mayuri!elias"
if(password.length>=12 && password.includes("!"))
{
    console.log("that is mighty strong password")}
else if(password.length>=8 || password.includes("!"))
{console.log("that password is strong enough")}
else{console.log("that is not a valid password")}