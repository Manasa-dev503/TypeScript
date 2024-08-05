import shape = require("./IShape")

export class Circle implements shape.Ishape{
    public draw() {
        console.log("Circle is drawn")
    }
}