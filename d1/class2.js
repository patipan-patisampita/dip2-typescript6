var Person = /** @class */ (function () {
    function Person(idCard, firstName, lastName) {
        this._firstName = "Mark";
        this._lastName = "Sakaberg";
        this._idCard = idCard;
        this._firstName = firstName;
        this._lastName = lastName;
    }
    //Method
    Person.prototype.display = function () {
        return this._idCard + " " + this._firstName + " " + this._lastName;
    };
    return Person;
}());
//let p1 = new Person(); //object
var p1 = new Person(3250800220, "Lonaldo", "Ronuldinyo");
console.log(p1.display());
var p2 = p1._firstName = "Thanos";
console.log(p2);
console.log(p1.display());
