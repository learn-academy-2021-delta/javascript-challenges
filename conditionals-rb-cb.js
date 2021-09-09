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

/*
5. Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

STRETCH Challenges
6. Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

7. Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

8. Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
*/