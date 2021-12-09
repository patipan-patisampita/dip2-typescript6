class Person {
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    set setLastName(newLastName) {
        this.lastName = newLastName;
    }
    set setFirstName(newFirstName) {
        this.firstName = newFirstName;
    }
}
let p1 = new Person("Mark", "Sakaberg");
console.log(p1.firstName + " " + p1.lastName);
console.log(p1.fullName);
p1.setFirstName = "Jeff";
p1.setLastName = "Json";
console.log(p1.fullName);
