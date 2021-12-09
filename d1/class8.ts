//abstract class
abstract class Shape {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }

    public draw(): void {
        console.log("pre drawing " + this._name);
        this.drawShape();
    }
   //abstract method
    protected abstract drawShape();
}

class Square extends Shape {
    private _length: number;

    constructor(name: string, length: number) {
        super(name);
        this._length = length;
    }

    //must implement super class abstract methods
    protected drawShape() {
        console.log("drawing square with length "+this._length);
    }
}
//let shape: Shape = new Shape(); error TS2511: Cannot create an instance of an abstract class.
let shape: Shape = new Square("saure", 5 );
shape.draw();