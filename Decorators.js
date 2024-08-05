// Decorator factory -> returns function expression
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function printExecution(method, _context) {
    return function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.log("start::", method.name); // logging the method name at the start
        var result = method.call.apply(method, __spreadArray([value], args, false)); //calling the original method
        console.log("end::", method.name); //logging the method name at the end
        return result;
    };
}
//defining a class
var Student = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _sayHello_decorators;
    var _printRollNo_decorators;
    return _a = /** @class */ (function () {
            function Student(name, rollno) {
                this.name = (__runInitializers(this, _instanceExtraInitializers), name);
                this.rollno = rollno;
            }
            Student.prototype.sayHello = function () {
                console.log("Hello, my name is ".concat(this.name, "."));
            };
            Student.prototype.printRollNo = function () {
                console.log("Hello, my rollno is ".concat(this.rollno, "."));
            };
            return Student;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _sayHello_decorators = [printExecution];
            _printRollNo_decorators = [printExecution];
            __esDecorate(_a, null, _sayHello_decorators, { kind: "method", name: "sayHello", static: false, private: false, access: { has: function (obj) { return "sayHello" in obj; }, get: function (obj) { return obj.sayHello; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _printRollNo_decorators, { kind: "method", name: "printRollNo", static: false, private: false, access: { has: function (obj) { return "printRollNo" in obj; }, get: function (obj) { return obj.printRollNo; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var user = new Student("manasa", 23);
user.sayHello();
user.printRollNo();
