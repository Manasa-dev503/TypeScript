var sum = /** @class */ (function () {
    function sum() {
        this.num1 = 10;
        this.num2 = 20;
    }
    sum.prototype.add = function () {
        console.log(this.num1 + this.num2);
    };
    return sum;
}());
var sumobj = new sum();
sumobj.add();
