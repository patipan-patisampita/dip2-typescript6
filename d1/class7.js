class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    displayAsString() {
        console.log(this);
    }
}
class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this._salary = salary;
    }
    display() {
        super.displayAsString();
    }
}
//let person: Person = new Person("Ashlee", 23); error TS2674: Constructor of class 'Person' is protected and
// only accessible within the class declaration.
let emp = new Employee("Ashlee", 23, 3000);
//emp.displayAsString();  error TS2445: Property 'displayAsString' is protected and only accessible within
// class 'Person' and its subclasses.
emp.display();
