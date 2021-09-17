// Challenges
// Coffee Maker
class Coffee {
  constructor(type, cream, sugar){
    this.type = type
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return(`${this.type} with, ${this.creams()}, with ${this.sugars()}`)
  }

  creams(){
    if (this.cream > 1){
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars(){
    if (this.sugar > 1){
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
  type(){
  if (this.cream === 0 && this.sugar === 0){
    return `black coffee: ${this.creams()}, ${this.sugars()`
  }
  }
  // black(){
  //   if (this.cream == 0 && this.sugar == 0){
  //     return "black coffee"
  //   }
  // }
}
// Write the code that makes a black coffee.
var howYouLikeIt = new Coffee (type, 0, 0)
console.log(howYouLikeIt.coffeeProfile())

// Write the code that makes a coffee with 1 cream and 2 sugars.
//
// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
//
// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.
//
// Write a method for your Latte class that outputs the latte's profile.
//
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
//
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
//
// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
//
// Write the code that creates three unique cylinder objects
