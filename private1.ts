class Person {
    private _name: string = "Json";
    private _age: number = 25;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
        this.init();
    }

    private init() {
        console.log(`${JSON.stringify(this)}`);
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    get age(): number {
        return this._age
    }
    set age(newAge: number) {
        this._age = newAge;
    }

}

let p1: Person = new Person("Mark", 30);
console.log(p1.name + " " + p1.age);

let p2 = new Person("Mark", 30);
console.log(p2.name + " " + p2.age);

