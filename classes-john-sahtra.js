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
//   Write the code that makes a black coffee.
  
// Create an instance of the class that returns only black coffee
// Create a variable that saves an instance of the class
// var blackCoffee = new Coffee("Black", 0, 0)
// console.log(blackCoffee);
//   Write the code that makes a coffee with 1 cream and 2 sugars.

// var sweetCoffee = new Coffee("Black", 1, 2)
// console.log(sweetCoffee);
  
//   Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
  
// var verySweetCoffee = new Coffee("Pumpkin Spice Latte", 0, 2)
// console.log(verySweetCoffee.coffeeProfile());


//   Latte Maker
//   Write a Latte class that receives a flavor, a milk type and a number of shots.

class LatteMaker {
  constructor(flavor, milk, shot) {
    this.flavor = flavor,
    this.milk = milk,
    this.shot = shot
  }

  latteProfile(){
    return(`${this.flavor}: ${this.milk}, ${this.shots()}`)
  }

  shots(){
    if (this.shot > 1) {
      return `${this.shot} shots`
    } else {
      return `${this.shot} shot`
    }
  }
}

// var mochaLatte = new LatteMaker("mocha","oat milk", 15)
// console.log(mochaLatte.latteProfile())
// var regularLatte = new LatteMaker("regular", "no milk", 1)
// console.log(regularLatte.latteProfile())
var hazelnutLatte = new LatteMaker("Hazelnut", "Almond Milk", 2)
console.log(hazelnutLatte.latteProfile())
  
//   Write a method for your Latte class that outputs the latte's profile.
//   Write the code that makes a regular, single shot latte. Then, log the latte's profile.
//   Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
  
//   Volume of a Cylinder
//   Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
class cylinderVolume {
  constructor(radius, height) {
    this.radius = radius ** 2,
    this.height = height
  }

  latteProfile(){
    return(`${this.flavor}: ${this.milk}, ${this.shots()}`)
  }

  shots(){
    if (this.shot > 1) {
      return `${this.shot} shots`
    } else {
      return `${this.shot} shot`
    }
  }
}
  
//   Write the code that creates three unique cylinder objects
  
//   Back