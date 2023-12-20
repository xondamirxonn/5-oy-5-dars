// let person = {
//   fName: "Eshmat",
//   walk: () => {
//     console.log(this);
//     setTimeout(() => {
//       console.log(this);

//       setTimeout(() => {
//         console.log(this);
//       }, 1_000);
//     }, 1_000);
//   },
// };

// person.walk()

// function Person(fName) {
//   this.fName = fName;
// }

// Person.prototype.talk = function () {
//   console.log(this);
// };

// Person.prototype.walk = () => {
//   console.log(this);
// };

// let eshmat = new Person("Eshmat");
// eshmat.talk();
// eshmat.walk();

// }

// function Person(fName) {
//   this.fName = fName;
// }

// Person.prototype.talk = function () {
//   console.log(this);
// };

// Person.prototype.walk = () => {
//   console.log(this);
// };

// let eshmat = new Person("Eshmat");
// eshmat.talk();
// eshmat.walk();

// class Animal {
//   name;
//   age;
//   constructor(name , age) {
//     this.name = name
//     this.age = age
//   }

//   walk() {
//     console.log(`${this.name} is walking`);
//   }

//   sleep() {
//     console.log(`${this.name} is sleeping`);
//   }

// }
// class Cat extends Animal {
//   chasMouse() {
//     console.log(`${this.name} is chasing a mouse`);
//   }
//   speak() {
//     console.log(`Meow , Meow , Meow`);
//   }
// }

// class Dog extends Animal {
//   chain;

//   constructor(age, chain = false) {
//     super(undefined , age)
//     this.chain = chain
//   }
//   gnaw() {
//     console.log(`${this.name} is gnawing a bone`);
//   }

//   speak() {
//     console.log(`Wow , wow , wow`);
//   }
// }

// let cat = new Cat("mosh")
// cat.walk();
// cat.sleep();
// cat.speak()
// let dog = new Dog(2, true)
// dog.speak()

// let animals =  [dog , cat]

// animals.forEach(animal => {
//   animal.speak()
// })

class Car {
  model;
  color;
  max_speed;
  name;
  company;
  isStarted = false;
  isMoving = false;
  currentSpeed = 0;
  gasSize;
  currentGas;
  gasUsage = 0;
  constructor(name, model, color, max_speed, company, gasSize = 40) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.max_speed = max_speed;
    this.company = company;
    this.currentGas = gasSize;
  }

  start() {
    if (this.isStarted) {
      console.log(this.name + " is already started");
      return;
    } 

    this.isStarted = true;
    console.log(this.name + " is started");
    this.gasUsage++;
    setInterval(() => {
      if (this.currentGas <= 0) {
        console.log(`Gaz qolmadi`);
        return;
       }
      
      this.currentGas -= this.gasUsage;
      console.log(`${this.name} has ${this.currentGas}l gas left`);
      
      
    }, 3_00);
    
  }
  
  move() {
    
    if (!this.isStarted) {
      console.log(
        `${this.name} is not started yet, please start the car first`
      );

      return;
    }
    this.currentSpeed = this.currentSpeed + 10;
    this.gasUsage++;
    if (this.isMoving) {
      console.log(
        `${this.name}'s speed is increased by 10, current speed is ${this.currentSpeed}`
        );
        if (this.currentSpeed >= 60) {
          console.log(
            `Further speeding is not recommeded as there might be a radar`
            );
          }
          
          return;
        }
        
    this.isMoving = true;
    console.log(`${this.name} is moving ${this.currentSpeed}`);
     
  }
  
}

let bmw = new Car("BMW", "X5", "black", 243, "BMW", 82);

bmw.start();
bmw.start();
bmw.move();
// bmw.move();
// bmw.move();
// bmw.move();
// bmw.move();
// bmw.move();
// bmw.move();
// bmw.move();
console.log(bmw);
