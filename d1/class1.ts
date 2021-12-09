class Person {
    //properties/feild/attribute
    idCard:number;
    firstName: string = "Mark";
    lastName: string = "Sakaberg";
}

let p1 = new Person(); //object
//let p2 = new Person(3250800220,"Lonaldo","Ronuldinyo");
console.log(p1);

p1.firstName = "Jeff";
p1.lastName= "Besso";

console.log(p1);