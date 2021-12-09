class Person {
    constructor(name, age) {
        this._name = "Json";
        this._age = 25;
        this._name = name;
        this._age = age;
        this.init();
    }
    init() {
        console.log(`${JSON.stringify(this)}`);
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        this._age = newAge;
    }
}
let p1 = new Person("Mark", 30);
console.log(p1.name + " " + p1.age);
let p2 = new Person("Mark", 30);
console.log(p2.name + " " + p2.age);
