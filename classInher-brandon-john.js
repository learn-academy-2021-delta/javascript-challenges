// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
class Car {
    constructor(modelOfCar, yearOfCar) {
        this.model = modelOfCar
        this.year = yearOfCar
        this.wheels = 4
    }
    carOn(){
        this.lights = "on"
        this.signal = true
        this.acceleration = 0
    }
    carOff(){
        this.lights = "off"
        this.signal = false
        this.speed = 0
        this.acceleration = 0
    }
}

let myCar = new Car("generic car", 2000)
// console.log(myCar)

// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"

// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"

// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4

// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
class Tesla extends Car{
    constructor(modelOfCar, yearOfCar){
        super(modelOfCar, yearOfCar)
    }
    carAcceleration() {
        this.carOff ? this.acceleration : this.signal
        this.carOn ? this.acceleration + 10 : this.signal
    }
}

let myTesla = new Tesla("Tesla", 2020)
myTesla.carOn()
console.log(myTesla)
// Create an object called myTesla which is a instance of class Tesla
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

class Toyota extends Car{
    constructor(modelOfCar, yearOfCar) {
        super(modelOfCar, yearOfCar)
    }
}

// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
 let myToyota = new Toyota("Toyota", 2010)

// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

class Volkswagen extends Car{
    constructor(modelOfCar, yearOfCar) {
        super(modelOfCar, yearOfCar)
    }
}

let myVolkswagen = new Volkswagen("Volkswagen", 1980)

// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.

// Story: As a programmer, I can turn the lights in all my cars on and off.

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



// -------------Baked Goods Class example from Slack------------
// class BakedGood {
//     constructor(ingredients, time, ovenTemp=350){
//       this.ingredients = ingredients
//       this.time = time
//       this.ovenTemp = ovenTemp
//     }
//     startBaking(){
//       console.log("Follow the recipe and put the ingredientstogether in the right order before baking them");
//     }
//   }
  
//   class Cookie extends BakedGood {
//     constructor(ingredients, time, ovenTemp){
//       super(ingredients, time, ovenTemp)
//       this.isTastyRaw = true
//     }
//   }
  
//   var choclatechipCookies = new Cookie(["brown sugar", "eggs", "flour", "chocolate chips", "salt", "butter","vanilla", "baking soda"], "1.5 hours", 375)