class Person {
    protected _name: string;
    protected _age: number;

    protected constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    protected displayAsString(): void {
        console.log(this);
    }
}

class Employee extends Person {
    private _salary: number;

    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this._salary = salary;
    }

    public display(): void {
        super.displayAsString();
    }
}

//let person: Person = new Person("Ashlee", 23); error TS2674: Constructor of class 'Person' is protected and
// only accessible within the class declaration.
let emp: Employee = new Employee("Ashlee", 23, 3000);
//emp.displayAsString();  error TS2445: Property 'displayAsString' is protected and only accessible within
// class 'Person' and its subclasses.
emp.display();