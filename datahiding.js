var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str1 = "Hello";
        this.str2 = "World";
    }
    return Encapsulate;
}());
var obj = new Encapsulate();
console.log(obj);
console.log(obj.str1);
//console.log(obj.str2)
