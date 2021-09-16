// Consider this variable:
var person = {
  firstName: "Arthur",
  lastName: "Dent",
  homePlanet: "Earth"
}
// Write the code that accesses the first name of the person object.
// Write the code that accesses the last name of the person object.
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// Update the person object with a method that logs "Arthur Dent is from planet Earth".

// const personInfo = (object) => {
//     object.map(value => {
//
//     })
// }
console.log(person.firstName)
console.log(person.lastName)
console.log(`${person.firstName} ${person.lastName} is from planet ${person.homePlanet}`)

// Consider this variable:
// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
var product = {
  name: "chair",
  price: 14.99,
  getData: function() {
    return `The product is a ${this.name}. It cost ${this.price}.`
  }
}
console.log(product.getData());

//
// Consider this variable:
var lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"],
  getData: function() {
    return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`
  }
}
// Write the code that accesses the ingredients property.
console.log(lunch.ingredients);
// Write the code that access the 3rd ingredient of the lunch object.
console.log(lunch.ingredients[2]);
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const getLunch = (object) => {
  return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`
}
console.log(getLunch(lunch));
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
console.log(lunch.getData());
