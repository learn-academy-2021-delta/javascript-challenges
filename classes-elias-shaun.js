// // Challenges
// // Coffee Maker
// class Coffee {
// constructor(type, cream, sugar){
//      this.type = type.toLowerCase()
//      this.cream = 0
//      this.sugar = 2
//    }
//    coffeeProfile(){
//      return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
//   }
//
//   creams(){
//     if (this.cream > 1){
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }
//
//   sugars(){
//     if (this.sugar > 1){
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }
// // Write the code that makes a black coffee.
//
// var object1 = new Coffee ("EXTRA BLACK", "no", "no" )
// console.log(object1.creams())
// console.log(object1.sugars());
// console.log(object1.coffeeProfile())
// //
// // Write the code that makes a coffee with 1 cream and 2 sugars.
// //
// var object2 = new Coffee ("EXTRA BLACK", 1, 2)
// console.log(object2.coffeeProfile())
// ;
// // Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
// //
//
// var object3 = new Coffee ("EXTRA BLACK")
// //console.log(object3.);
// // Latte Maker
// // Write a Latte class that receives a flavor, a milk type and a number of shots.

class NewLatte {
  constructor(flavor, milkType, numberOfShots){
    this.flavor = flavor,
    this.milkType = milkType,
    this.numberOfShots = numberOfShots


}

// Write a method for your Latte class that outputs the latte's profile.

latteProfile(){
  return `${this.flavor} ${this.milkType}, ${this.numberOfShots}`
}
}
var object4 = new Coffee ("Sweet", "Almond", 3)
console.log(object4.latteProfile())


// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
//
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
//
// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
//
// Write the code that creates three unique cylinder objects
