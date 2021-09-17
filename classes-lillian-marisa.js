// >>>>>>>>>COFFEE MAKER
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
// // A. Write the code that makes a black coffee.
//
// var blackCoffee = new Coffee("black", 0, 0)
// console.log(blackCoffee);
//
// //
// // B. Write the code that makes a coffee with 1 cream and 2 sugars.
//
// var coffee1C2S = new Coffee("coffee", 1, 2)
// console.log(coffee1C2S);
// //
// // C. Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
//
// var newCoffee = new Coffee("coffee", 0, 2)
// console.log(newCoffee.coffeeProfile());

//
// >>>>>>>>LATTE MAKER
// A. Write a Latte class that receives a flavor, a milk type and a number of shots.

// class Latte {
//   constructor(flavor, milk, shots){
//     this.flavor = flavor
//     this.milk = milk
//     this.shots = shots
//   }
// }

//
// B. Write a method for your Latte class that outputs the latte's profile.

class Latte {
  constructor(flavor, milk, shots){
    this.flavor = flavor.toLowerCase()
    this.milk = milk.toLowerCase()
    this.shots = shots
  }

  latteProfile(){
    return(`${this.flavor} latte: ${this.milk}, ${this.numshots()}`)
  }

  numshots(){
    if(this.shots > 1){
      return `${this.shots} shots`
    } else {
      return `${this.shots} shot`
    }
  }

}

//
// C. Write the code that makes a regular, single shot latte. Then, log the latte's profile.
//
var regLatte = new Latte("", "regular", 1)
console.log(regLatte.latteProfile())
console.log(regLatte);


// D. Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
var hazelnutLatte = new Latte("hazelnut", "almond milk", 2)
console.log(hazelnutLatte.latteProfile());
console.log(hazelnutLatte);

//
// >>>>>>>>VOLUME OF A CYLINDER
// A. Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
class Volume {
  constructor (pi, radius, height) {
    this.pi = 3.14,
    this.radius = radius,
    this.height = height

cylinderProfile({
  return(`${this.pi} * (${this.radius}**2) * ${this.height}`)
})

volumeFormula(){
  if(this.radius <= 0){
    return("error")
  } else {
    return ${this.radius}
  }
}
var rH = new Volume(1, 2)
console.log(rH.cylinderProfile());

// B. Write the code that creates three unique cylinder objects
