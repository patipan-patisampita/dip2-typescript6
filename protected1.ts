class Person {
    protected _name: string = "Json";
    protected _age: number = 25;

    protected constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    protected displayCon():void {
        console.log(this);
        console.log(this._age + " " +this._name);
    }
}

class NewPerson extends Person{
    constructor(name:string,age:number){
        super(name,age);
        
    }
    display(): void {
        super.displayCon();
    }
}

let p1:NewPerson = new NewPerson("Mark", 25);
p1.display();