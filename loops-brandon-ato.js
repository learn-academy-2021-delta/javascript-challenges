// Write a for loop that logs each number from 1 - 20.
for(i=1; i<=20; i++){
console.log(i)
}
// Write a for loop that logs the result of each number from 1 - 20 tripled.
for(i=1; i<=20; i++){
console.log(i*3)
}
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD" Expected output --> ODD, 2, ODD, 4, ODD, 6 ...etc
for(i=1; i<=20; i++){
if(i % 2 === 1){
  console.log("odd")
} else{
  console.log(i)
}
}

var nums = [3, 57, -9, 20, 67]
var largestNum = 0;
// Create a loop that will log the highest number from the array. Expected output --> 67
function largest(numbers) {
 for(i=0; i<nums.length; i++){
  if(nums[i] > largestNum) {
    largestNum = nums[i]
  }
  return largestNum
  }
}
largest();
// Create a loop that will log the lowest number from the array Expected output --> -9

function smallest(numbers) {
    var smallestNum = 100;
for(i=0; i<nums.length; i++){
    if(nums[i] < smallestNum) {
        smallestNum = nums[i]
    }
    if(smallestNum[i] < 0){
        var absolute = Math.abs(nums[i]);
        return -absolute
    }
 }
 return smallestNum;
}

smallest();
// Create a loop that will log the remainder of each number when divided by 2. Expected output --> 1, 1, -1, 0, 1
for(i=0; i<nums.length; i++){
console.log(nums[i] % 2)
}

// Write the code that will log the number of times the letter "e" occurs in the string. Expected output --> 2
function string(strLength){
var myString = 'learn student'
var split = myString.split("")
var total = 0;
for(i=0; i< myString.length;i++){
    if(split[i] === 'e'){
        total++
    }
  }
  return total
}

string();
