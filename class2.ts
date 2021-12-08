class Person {
    //properties/feild/attribute
    _idCard: number;
    _firstName: string = "Mark";
    _lastName: string = "Sakaberg";

    constructor(idCard: number, firstName: string, lastName: string) {
        this._idCard = idCard;
        this._firstName = firstName;
        this._lastName = lastName;
    }
    //Method
    getDisplay() {
        return this._idCard + " " + this._firstName + " " + this._lastName;
    }

}


//let p1 = new Person(); //object

let p1 = new Person(3250800220, "Lonaldo", "Ronuldinyo");
console.log(p1.getDisplay());
let p2:string = p1._firstName = "Thanos";
console.log(p2);
