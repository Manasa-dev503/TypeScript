import shape = require("./IShape")
import circle = require("./Circle")
import triangle = require("./Triangle")


function DrawAllShapes(shapetodraw : shape.Ishape){
    shapetodraw.draw()
}

DrawAllShapes(new circle.Circle())
DrawAllShapes(new triangle.Triangle())
