var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var Tata = /** @class */ (function (_super) {
    __extends(Tata, _super);
    function Tata() {
        return _super.call(this) || this;
    }
    Tata.prototype.display = function () {
        console.log("This is Tata Car");
    };
    return Tata;
}(Car));
var Maruthi = /** @class */ (function (_super) {
    __extends(Maruthi, _super);
    function Maruthi() {
        return _super.call(this) || this;
    }
    Maruthi.prototype.display = function () {
        console.log("This is Maruthi Car");
    };
    return Maruthi;
}(Car));
var tata = new Tata();
tata.display();
var maruthi = new Maruthi();
maruthi.display();
