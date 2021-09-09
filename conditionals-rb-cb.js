//1. Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

var item = 200
if (item < 100) {
  console.log("in budget")
} else {
  console.log("you're too broke")
};


//2. Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = true
if (hungry) {
  console.log("eat food")
} else {
  console.log("keep coding")
};

//3. Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "green"
if (trafficLight === "green"){
  console.log("go")
} else if (trafficLight === "yellow"){
    console.log("slow down")
} else if (trafficLight === "red"){
    console.log("stop")
} else {
  console.log("enter green, yellow, or red")
};

//4. Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var x = 30;
var y = 92;
if (x > y) {
  console.log(x)
} else if (y > x) {
  console.log(y)
} else {
  console.log("the numbers are the same")
};


//5. Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var num = -24;
if (num%2 === 0) {
  console.log("even")
} else if(num%2 === 1 || num%2 === -1) {
  console.log("odd")
} else if(num === 0) {
  console.log("zero")
} else {
  console.log("enter a whole number")};

//STRETCH Challenges
//6. Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var grade = 89;
if (grade === 100) {
  console.log("perfect score")
} else if(grade >= 90) {
  console.log("A")
} else if(grade >= 80) {
  console.log("B")
} else if(grade >= 70) {
  console.log("C")
} else if(grade >= 60) {
  console.log("D")
} else if(grade === 0) {
  console.log("no grade available")
} else{
  console.log("your child is a failure")
};


//7. Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
var poptart = 2.5;
console.log(typeof poptart);

//8. Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
var password = "Learn-Academy!"
if (password.length >= 12 && password.includes("!")){
  console.log("That is a mighty strong password!")
} else if(password.length >= 8 || password.includes("!")){
  console.log("That password is strong enough.")
} else {
  console.log("That is not a valid password.")  
};
