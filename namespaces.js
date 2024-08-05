/// <reference path="Ishape.ts"/>
/// <reference path="Circle.ts"/>
/// <reference path="Triangle.ts"/>
function DrawAllShapes(shape) {
    shape.draw();
}
DrawAllShapes(new Drawing.Circle());
DrawAllShapes(new Drawing.Triangle());
