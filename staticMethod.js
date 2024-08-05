var Square = /** @class */ (function () {
    function Square() {
    }
    Square.area = function (side) {
        return side * side;
    };
    return Square;
}());
console.log(Square.area(5));
