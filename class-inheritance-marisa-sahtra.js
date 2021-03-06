// Story: As a programmer, I can make a car.
class Horse {
    constructor(snack, horsepower, purebred, age){
        this.snack = snack
        this.legs = 4
        this.horsepower = horsepower
        this.purebred = true
        this.age = age
    }


}
// Write a variable called myCar which is an instance of the class Car

class Thoroughbred extends Horse {
    constructor(snack, horsepower, purebred, age, coatColor, weight, raceHorse, origin, gender){
        super(snack, horsepower, purebred, age);
            this.coatColor = "Chestnut"
            this.weight = 1000
            this.raceHorse = true
            this.origin = "USA"
            this.gender = "male"
    }
}

// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"

let seabiscuit = new Thoroughbred("hay", 45, true, 14)
console.log(seabiscuit);

// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"

// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4

// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car

class Arabian extends Horse {
  constructor(snack, horsepower, purebred, age, coatColor, weight, battleHorse, origin, gender){
    super(snack, horsepower, purebred, age);
      this.coatColor = "Gray"
      this.weight = 800
      this.battleHorse = true
      this.origin = "Egypt"
      this.gender = "male"
  }
}

let marengo = new Arabian("apples", 25, false, 38)
console.log(marengo);


// Create an object called myTesla which is a instance of class Tesla
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota

class Clydesdale extends Horse {
  constructor(snack, horsepower, purebred, age, coatColor, weight, agricultureHorse, orgin, gender) {
    super(snack, horsepower, purebred, age);
    this.coatColor = "Brown and White"
    this.weight = 2,200
    this.agricultureHorse = true
    this.origin = "Scottland"
    this.gender = "female"

  }
}


let bud = new Clydesdale("beer", 5,  true, 4)
console.log(bud);



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
