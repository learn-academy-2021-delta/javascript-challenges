
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
//create a variable and called blackCoffee
//call on the class coffee
//input coffeType with num inputs for cream and sugar 
 //var blackCoffee = new Coffee ("Black", 0, 0)
 //console.log(blackCoffee)

// Write the code that makes a coffee with 1 cream and 2 sugars.
//var coffeeMix = new Coffee ("cream and sugar", 1, 2)
 //console.log(coffeeMix)

// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
//var sugarOnly = new Coffee ("sugar only", 0, 2)
 //console.log(sugarOnly)
//console.log(sugarOnly.coffeeProfile())

//Latte Maker
// class Coffee {
//     constructor(type, cream, sugar){
//       this.type = type.toLowerCase()
//       this.cream = cream
//       this.sugar = sugar
//     }
  
//     coffeeProfile(){
//       return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
//     }
  
//     creams(){
//       if (this.cream > 1){
//         return `${this.cream} creams`
//       } else {
//         return `${this.cream} cream`
//       }
//     }
  
//     sugars(){
//       if (this.sugar > 1){
//         return `${this.sugar} sugars`
//       } else {
//         return `${this.sugar} sugar`
//       }
//     }
//   }

//Write a Latte class that receives a flavor, a milk type and a number of shots.
class Latte {
    constructor(flavor, type, shots){
      this.flavor = flavor
      this.type = type
      this.shots = shots
    }

latteProfile(){
            return(`${this.flavor()}, ${this.type()}, ${this.shots()}`)
        }
     
        }    
        var regularLatte = new Latte ("no flavor", "Regular", 1)
    
   console.log(regularLatte.latteProfile())
      

//Write a method for your Latte class that outputs the latte's profile.


//Write the code that makes a regular, single shot latte. Then, log the latte's profile.

//Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.