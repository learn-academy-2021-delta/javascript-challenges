// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
//make a class named car
//variable called mycar
// class Car{
//     constructor(model, year, wheels=4){
//         this.model = "generic car"
//         this.year = "mycar year"
//         this.wheels = wheels
//         this.lights = false

//     }
//     lightsOn(){
//         this.lights = true
//     }
//  }
 //let mycar = new Car()
//console.log(mycar);

// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"
// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4

// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla
//make a class named Tesla that extends class car 
//create an object called mytesla 
//let statement to create instance of class tesla
// class Tesla extends Car{
//     constructor(model, year, wheels=4){
//         super(model, year)
//         this.wheels = wheels
//     }
// }
// let myTesla = new Tesla()
//console.log(myTesla);

// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
///console.log(myToyota)

// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
// class Volkswagen extends Car{
//     constructor(model, year, wheels=4){
//         super(model, year)
//         this.wheels = wheels
//     }
// }
// let myVolkswagen = new Volkswagen()
//console.log(myVolkswagen);

// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.
class Car{
    constructor(model, year, wheels=4, lights, signal, speed, slow){
        this.model = "generic car"
        this.year = "mycar year"
        this.wheels = wheels
        this.lights = false
        this.signal = false
        this.speed = 0
        this.slow = slow

    }
    lightsOn(){
        this.lights = true

    } 
    lightsOff(){
        this.lights = false
    }
    signalOn(){
        this.signal = true
    }
    signalOff(){
        this.signal = false
    }
    carInfo(){ 
        this.acceleration? this.speed = this.speed + 10 :" Tesla"
        this.acceleration? this.speed = this.speed + 5 :" Toyota"
        this.acceleration? this.speed = this.speed + 7 :" Volkswagen"
        this.breaking? this.slow = this.slow - 7: "Tesla"
        this.breaking? this.slow = this.slow - 2: "Toyota"
        this.breaking? this.slow = this.slow - 5: "Volkswagen"
    }
    
}
let mycar = new Car()
console.log(mycar);
mycar.signalOn()
console.log(mycar);
mycar.carInfo()
console.log(mycar);
// Story: As a programmer, I can turn the lights in all my cars on and off.

class Toyota extends Car{
    constructor(model, year, wheels=4){
        super(model, year)
        this.wheels = wheels
    }
    acceleration(){
        this.speed=this.speed + 5
    }
}
let myToyota = new Toyota()
console.log(myToyota);
myToyota.signalOn()
console.log(myToyota)
// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.

// Story: As a programmer, I can slow my Tesla down by 7 per braking.

// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.

// Story: As a programmer, I can slow my Toyota down by 2 per braking.

// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.

// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.

// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.

// The method can be created in the parent class and accessed by all child classes
