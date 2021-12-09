class Person {
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
let p1 = new Person("Mark", "Sakaberg");
console.log(p1.firstName + " " + p1.lastName);
console.log(p1.fullName);
