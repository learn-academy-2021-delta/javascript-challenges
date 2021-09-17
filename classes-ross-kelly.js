// Coffee Maker

// class Coffee {
//   constructor(type, cream, sugar){
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }

//   coffeeProfile(){
//     return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
//   }

//   creams(){
//     if (this.cream > 1){
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }

//   sugars(){
//     if (this.sugar > 1){
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }

// Write the code that makes a black coffee.

// var blackCoffee = new Coffee("black",null,null)
// console.log(blackCoffee.coffeeProfile())

// // Write the code that makes a coffee with 1 cream and 2 sugars.

// var cream2shug = new Coffee("latte", 1, 2)
// console.log(cream2shug.coffeeProfile())

// // Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.

// var twoSugar = new Coffee("latte",0,2)
// console.log(twoSugar.coffeeProfile())

// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.

class Latte {
  constructor(flavor, milkType, shot){
    this.flavor = flavor.toLowerCase()
    this.milkType = milkType
    this.shot = shot
  }

  latteProfile(){
    return(`${this.flavor}: ${this.milkTypes()}, ${this.shots()}`)
  }

  milkTypes(){
    if (this.milkType > 1){
      return `${this.milkType} milk type`
    } else {
      return `${this.milkType} milk type`
    }
  }

  shots(){
    if (this.shot > 1){
      return `${this.shot} shots`
    } else {
      return `${this.shot} shot`
    }
  }
}
// Write a method for your Latte class that outputs the latte's profile.
var newLatte = new Latte("regular single shot","regular", 1)
// console.log(newLatte.latteProfile())
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
var hotLatte = new Latte("hot latte", "almond", 2)
// console.log(hotLatte.latteProfile())
// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

class Cylinder {
  constructor (radius, height) {
    this.pi = 3.1416
    this.radius = radius
    this.height = height
  }
  volume(){
    return (this.pi * this.radius ** 2 * this.height).toFixed(4)
  }
  // volDecimal(){
  //   return this.volume.toFixed(4)
  // }
}

// Write the code that creates three unique cylinder objects
var cyl1 = new Cylinder(3,5)
console.log(cyl1.volume())