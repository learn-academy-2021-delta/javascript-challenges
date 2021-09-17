
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

//
// Write the code that makes a black coffee.
//
    // console.log(new Coffee("black", 0, 0));
//
// Write the code that makes a coffee with 1 cream and 2 sugars.
  // console.log(new Coffee("black", 1, 2));

//
// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
  // console.log(new Coffee("black", 1, 2).coffeeProfile());

// Latte Maker

class LatteMaker {
  constructor(flavor, milkType, shots){
    this.flavor = flavor,
    this.milkType = milkType,
    this.shots = shots
  }
  latteProfile(){
    return (`${this.flavor}: ${this.milkType}, ${this.shots}`)
  }

}

// Write a Latte class that receives a flavor, a milk type and a number of shots.

// var bobbyLatte = new LatteMaker("mocha","whole milk", 4)
// var rebeccaLatte = new LatteMaker("pumpkin spice", "oat milk", 7)
// console.log(bobbyLatte)
// console.log(rebeccaLatte)

// Write a method for your Latte class that outputs the latte's profile.

//see lines 50-51

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

//We want to: log the class passing in specific arguments by calling on the latteProfile method within it

// console.log(new LatteMaker("regular", "whole", 1).latteProfile());


// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
//
// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
//
// Write the code that creates three unique cylinder objects
