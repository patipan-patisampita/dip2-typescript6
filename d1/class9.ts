class Person {
    constructor(private _name: string, private _age: number) {
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}

let person: Person = new Person("Mark", 29);
console.log(person);