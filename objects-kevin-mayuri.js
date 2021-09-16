// Consider this variable:
var person = {
   firstName: "Arthur",
   lastName: "Dent"
 }
// Write the code that accesses the first name of the person object.
// Write the code that accesses the last name of the person object.
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// Update the person object with a method that logs "Arthur Dent is from planet Earth".

// console.log(person.firstName)
// console.log(person.lastName)

let homePlanet = "Earth"

const personObject = (array) => {
     return `${person.firstName} ${person.lastName} is from planet ${homePlanet}`
    }
console.log(personObject(person))