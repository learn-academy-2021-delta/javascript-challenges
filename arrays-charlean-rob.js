// Write the code that will add "soda" to the end of the original array.
var groceryList = ["eggs", "milk", "grits", "cheese"]
groceryList.push("soda")
console.log(groceryList)

// Write the code that will add "granola" to the end of array without altering the original array.
groceryList.pop()
groceryList.push("granola")
console.log(groceryList)

// Write the code that will return a subset of the array containing only "chips" and "dip".
console.log(groceryList.slice(0, 2))

// Write the code that will add "beans" to the "chips" and "dip" array.
var extra = ["beans"]
console.log(groceryList[0], groceryList[1], extra[0])

// Consider the variable:
//
// var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
//
// Write the code that will add the number 12 to the end of the array.
//
// Write the code that will remove the first number from the array.
//
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
//
// Consider the variable:
//
// var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
//
// Write the code that finds the index of the last appearance of the number 2
