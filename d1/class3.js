var Student = /** @class */ (function () {
    function Student(_id, _fName) {
        this.id = _id;
        this.fName = _fName;
    }
    //Method getStudent
    Student.prototype.getStudent = function () {
        // console.log(this.id + " " + this.fName);
        // return this.id + " " + this.fName;
        return this;
    };
    //Method
    Student.prototype.display = function () {
        console.log(this.id + " " + this.fName);
    };
    return Student;
}());
var std1 = new Student(100, "Jeff");
//std1.getStudent();
console.log(std1.getStudent());
std1.id = 101;
//std1.fName = "Mark"
std1.display();
