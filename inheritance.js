/*class Name{
    fname : string
    constructor(){
        this.fname = "manasa"
    }
}

class Fullname extends Name {
    lname : string
    constructor(){
        super()
        this.lname = "Bathina"
    }
    diplayname():void{
        console.log(fname)
        console.log(lname)
    }

}
var s = new Fullname()
s.diplayname()*/
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
var College = /** @class */ (function () {
    function College() {
        this.clgname = "RPRA";
    }
    return College;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        var _this = _super.call(this) || this;
        _this.rollno = '503';
        return _this;
    }
    Student.prototype.displaying = function () {
        console.log(this.rollno);
        console.log(this.clgname);
    };
    return Student;
}(College));
var s = new Student();
s.displaying();
