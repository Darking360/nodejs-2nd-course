var squeare = x => x * x;
console.log(squeare(2));

var user = {
  name: 'Miguel',
  sayHi: () => {
    console.log(this);
    console.log(`Hi. I'm ${this.name}`)
  },
  sayHiAlt () {
    console.log(`Hi I'm ${this.name}`)
  }
};

function Person (name) {
  this.name = name;

  this.sayHi = () => {
    console.log(`Hi. You are ${this.name}`);
  }
}

user.sayHi();
user.sayHiAlt();

let person = new Person('Juan');
person.sayHi();
