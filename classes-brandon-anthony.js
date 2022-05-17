// Coffee Maker
class Coffee {
  constructor(type, cream, sugar){
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
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
}
// Write the code that makes a black coffee.
var coffeeType = new Coffee("black", 0, 0)
console.log(coffeeType.coffeeProfile());
// Write the code that makes a coffee with 1 cream and 2 sugars.
var coffeeType2 = new Coffee("regular", 1, 2)
console.log(coffeeType2.coffeeProfile());
// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
var coffeeType3 = new Coffee("regular", 0, 2)
console.log(coffeeType3.coffeeProfile());
// 2)
// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.

// Write a method for your Latte class that outputs the latte's profile.

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.