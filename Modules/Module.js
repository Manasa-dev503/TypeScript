"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle = require("./Circle");
var triangle = require("./Triangle");
function DrawAllShapes(shapetodraw) {
    shapetodraw.draw();
}
DrawAllShapes(new circle.Circle());
DrawAllShapes(new triangle.Triangle());
