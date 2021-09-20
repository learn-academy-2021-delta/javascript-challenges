//declare class car
//construct variable myCar
//list model, year, wheels as key values

//Create child of car called Tesla car
//Create an object called myTesla
//pass parent class of car (model, year) through constructor and super to Tesla car

//Create child of car called Toyota car
//Create an object called myToyota
//pass parent class of car (model, year) through constructor and super to Toyota car

//Create child of car called Volkswagen car
//Create an object called myVolkswagen
//pass parent class of car (model, year) through constructor and super to Volkswagen car

//Lights = on or off(starting position)
//Turn = signal on or off(starting position)
//Speed = starts at 0

//Tesla = + 10 per acceleration instance
//Tesla = - 7 per braking instance

//Toyota = + 5 per acceleration instance
//Toyota = - 2 per braking instance

//Volkswagen = + 7 per acceleration instance
//Volkswagen = - 5 per braking instance

//carInfo = method to show all car information

class Car {
  constructor(model, year){
    this.model = model
    this.year = year
    this.wheels = 4
    this.lights = 0
    this.on = false
    this.signal = 0
    this.speed = 0
  }
  lightsOn(){
    this.lights = 1
    this.on = true
  }
  lightsOff(){
    this.lights = 0
    this.on = false
  }
  signalOn(){
    this.signal = 1
    this.on = true
  }
  signalOff(){
    this.signal = 0
    this.on = false
 }
  carInfo(){
    `The info of your car is ${this.model}, this ${this.year, }`
  }
}
let myCar = new Car(S, 2021)

class Tesla extends Car{
  constructor(model, year, speed=0){
    super(model, year)
    this.speed = speed
  }
  gas(){
    this.on? this.speed = this.speed + 10: "Turn your car on"
}
  braking(){
    if(this.speed <= 7){
      this.speed = 0
    } else {this.speed = this.speed - 7
    }
  }
}

let myTesla = new Tesla("modelX", 2020)

class Toyota extends Car{
    constructor(model, year, speed=0){
      super(model, year)
      this.speed = speed
    }
    gas(){
      this.on? this.speed = this.speed + 5: "Turn your car on"
  }
    braking(){
      if(this.speed <= 2){
        this.speed = 0
      } else {this.speed = this.speed - 2
      }
    }
  }
  let myToyota = new Toyota("Tacoma", 2007)

  class Volkswagen extends Car{
    constructor(model, year, speed=0){
      super(model, year)
      this.speed = speed
    }
    gas(){
      this.on? this.speed = this.speed + 7: "Turn your car on"
  }
    braking(){
      if(this.speed <= 5){
        this.speed = 0
      } else {this.speed = this.speed - 5
      }
    }
  }

  }

}





// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"
// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4
// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.
//
// Story: As a programmer, I can turn the lights in all my cars on and off.
//
// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.
//
// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.
//
// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.
//
// Story: As a programmer, I can slow my Tesla down by 7 per braking.
//
// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.
//
// Story: As a programmer, I can slow my Toyota down by 2 per braking.
//
// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.
//
// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.
//
// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.
//
// The method can be created in the parent class and accessed by all child classes
