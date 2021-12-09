var Person = /** @class */ (function () {
    function Person() {
        //properties/feild/attribute
        this.firstName = "Mark";
        this.lastName = "Sakaberg";
    }
    return Person;
}());
var p1 = new Person(); //object
console.log(p1);
p1.firstName = "Jeff";
p1.lastName = "Besso";
console.log(p1);
