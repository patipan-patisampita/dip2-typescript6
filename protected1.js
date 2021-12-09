class Person {
    constructor(name, age) {
        this._name = "Json";
        this._age = 25;
        this._name = name;
        this._age = age;
    }
    displayCon() {
        console.log(this);
        console.log(this._age + " " + this._name);
    }
}
class NewPerson extends Person {
    constructor(name, age) {
        super(name, age);
    }
    display() {
        super.displayCon();
    }
}
let p1 = new NewPerson("Mark", 25);
p1.display();
