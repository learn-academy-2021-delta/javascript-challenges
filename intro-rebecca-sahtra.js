// Write the code that will log the outcome of 34 added to 71.
console.log("1)");
console.log(34+71);
// Write the code that will log the outcome of 67 subtracted from 123.
console.log("2)");
console.log(67-123);
// Write the code that will log the outcome of 56 multiplied by 23.
console.log("3)");
console.log(56*23);
// Write the code that will log the outcome of 45 divided by 5.
console.log("4)");
console.log(45/5);
// Write the code that will log the outcome of 5 to the power of 7.
console.log("5)");
console.log(5**7);
// Write the code that will log the whole number remainder of 33 divided by 6.
console.log("6)");
console.log(33%6);
// Write the code that will log the length of a string containing your name.
console.log("7)");
console.log("sahtra".length);
// Write the code that will log whether your string includes the letter "e"?
console.log("8)");
console.log("sahtra".includes("e"));
// Write the code that will log the character at the first index of the string.
console.log("9)");
console.log("sahtra"[0]);
// Write the code that will log the string in all uppercase letters.
console.log("10)");
console.log("sahtra".toUpperCase());
// Write the code that will log true or false for the following:
// Is 34 divided by 3 greater than 67 divided by 2?
console.log("11)");
console.log(34/3 > 67/2);
// Does 5 evaluate to the same as "5"?
console.log("12)");
console.log(5 == "5");
// Does 5 strictly equal "5"?
console.log("13)");
console.log(5 === "5");
// Does !3 strictly equal 3?
console.log("14)");
console.log(!3 === 3);
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("15)");
console.log("LEARN".length === 5 && "student".length === 7);
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("16)");
console.log("LEARN".length === 5 || "student".length === 7);
// Does "LEARN" contain the subset "RN"?
console.log("17)");
console.log("LEARN".includes("RN"));
// Does "LEARN" contain the subset "rn"?
console.log("18)");
console.log("LEARN".includes("rn"));
// Does "LEARN"[0] strictly equal "l"?
console.log("19)");
console.log("LEARN"[0] === "l");
// Modify the code from the previous question to return true.
console.log("20)");
console.log("LEARN"[0] === "L");

var theQuestion = "life, the universe, and everything"
var theAnswer = 42
// Write the code that will log theAnswer divided by 2.
console.log("21)");
console.log(theAnswer/2);
// Write the code that will log the length of theQuestion.
console.log("22)");
console.log(theQuestion.length);
// Write the code that will log the index of the character "f" in the theQuestion.
console.log("23)");
console.log(theQuestion.indexOf("f"));
// Write the code that will log the concatenation of the two variables.
console.log("24)");
console.log(theQuestion + " " + theAnswer);
console.log(theQuestion.concat(theAnswer));
// Write the code that will log "the universe".
console.log("25)");
console.log(theQuestion.slice(6, 18));
// Write the code that will log the character "l" from theQuestion.
console.log("26)");
console.log(theQuestion.charAt(0));
// Write the code that will log whether theQuestion.length is greater than theAnswer.
console.log("27)");
console.log(theQuestion.length > theAnswer);

console.log("Built-in Methods");
//messing arround with built-in methods

var boolean = true;
console.log(boolean.valueOf());

var myName = "Rebecca";
console.log(myName.charCodeAt(0));

console.log(Date());