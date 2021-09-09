// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 103;
if (item <= 100){
  console.log("in budget");
} else {
  console.log("Outta budget dude");
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = true;
if (hungry){
  console.log("eat food");
} else{
  console.log("keep coding");
}
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "yellow";
if (trafficLight === "green"){
  console.log("go!");
} else if (trafficLight === "yellow"){
  console.log("slow down!");
} else if (trafficLight === "red"){
  console.log("stop!!");
} else {
  console.log("You might be colorblind...");
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var bigGuy = 9001;
var littleGuy = 4;

if (bigGuy === littleGuy){
  console.log("The numbers are the same! O.O");
} else if (bigGuy > littleGuy){
  console.log(bigGuy);
} else {
  console.log(littleGuy);
}
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
console.log("Question 5");

var num = 39;

if(num === 0){
  console.log("This number is zero.");
} else if (num%2 === 0){
  console.log("This number is even!");
} else{
  console.log("This number is odd!");
}

// STRETCH Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
console.log("Question 6");

var gradePercent = 100;

if(gradePercent === 100){
  console.log("A+, Perfect Score! Genius!");
} else if(gradePercent === 0){
  console.log("No Grade Available");
} else if(gradePercent < 100 && gradePercent >= 90){
  console.log("You got an A. But not an A+, terrible.");
} else if(gradePercent < 90 && gradePercent >= 80){
  console.log("You got an B.");
} else if(gradePercent < 80 && gradePercent >= 70){
  console.log("You got an C.");
} else if(gradePercent < 70 && gradePercent >= 65){
  console.log("You got an D.");
} else if(gradePercent < 65){
  console.log("YOU FAILED")
} else {
  console.log("Outside of the grading scale!");
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
console.log("Question 7");

var random = true;

 if(typeof random === "boolean"){
  console.log(typeof temp);
 }

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
