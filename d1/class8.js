//abstract class
class Shape {
    constructor(name) {
        this._name = name;
    }
    draw() {
        console.log("pre drawing " + this._name);
        this.drawShape();
    }
}
class Square extends Shape {
    constructor(name, length) {
        super(name);
        this._length = length;
    }
    //must implement super class abstract methods
    drawShape() {
        console.log("drawing square with length " + this._length);
    }
}
//let shape: Shape = new Shape(); error TS2511: Cannot create an instance of an abstract class.
let shape = new Square("saure", 5);
shape.draw();
