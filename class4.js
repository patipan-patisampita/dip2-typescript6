var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.birthday = function () {
        this.age = 10;
        console.log(this.age + " " + this.fullName);
    };
    return Person;
}());
var p1 = new Person();
p1.fullName = "Mark Sakaberg";
p1.birthday();
