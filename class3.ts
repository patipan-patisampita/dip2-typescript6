class Student {
    //field
    public id: number;
    private fName: string;

    constructor(_id: number, _fName: string) {
        this.id = _id;
        this.fName = _fName;
    }
    //Method getStudent
    getStudent() {
        // console.log(this.id + " " + this.fName);
        // return this.id + " " + this.fName;
        return this;
    }
    //Method
    display(): void {
        console.log(this.id + " " + this.fName);
    }
}

let std1 = new Student(100, "Jeff");
//std1.getStudent();
console.log(std1.getStudent());

std1.id = 101;
//std1.fName = "Mark"
std1.display();