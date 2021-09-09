
// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

var myItem = 50

if(myItem < 100) {
    console.log('in budget')
} 

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

var hungry = true

if(hungry == true){
    console.log('eat food')
} else {
    console.log('keep coding')
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

var trafficLight = green

if(trafficLight === green){
    console.log('go')
} else if (trafficLight === yellow){
    console.log('slow down')
} else {
console.log('stop')
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

var num1 = 5;
var num2 = 10;

if(num1 > num2) {
    console.log(num1)
} else if (num2 > num1) {
    console.log(num2)
} else {
    console.log('the numbers are the same')
};

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var num = 3;

if(num == 0) {
    console.log('The number is zero')
}
else if(num % 2 == 0){
    console.log('The number is even')
} 
else {
    console.log('The number is odd')
}

// STRETCH Challenges

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

var myGrade = 75;

if (myGrade >= 90 && myGrade< 100){
console.log("A")
} 
else if(myGrade >= 80 && myGrade< 90){
    console.log("B")
} 
else if(myGrade >= 70 && myGrade< 80){
    console.log("C")
}
else if(myGrade > 60 && myGrade<70) {
    console.log("D")
}
else if(myGrade > 0 && myGrade< 60) {
    console.log("F")
}
else if(myGrade === 0){
    console.log("no grade available")
} else if(myGrade=== 100){
    console.log("perfect score")
}


// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

var dataType = false;

console.log(typeof(dataType))

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

var passwordChecker = 

