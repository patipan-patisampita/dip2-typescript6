class Person{
    static age:number;
    static fullName:string;

    //Method
   static birthday(){
        this.age;
        console.log(this.age + " " + this.fullName);
    }
}
//  let p1 = new Person();
//  p1.fullName = "Mark Sakaberg";
//  p1.birthday();
Person.birthday();