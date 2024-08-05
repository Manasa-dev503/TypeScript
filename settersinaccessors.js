var Person = /** @class */ (function () {
    function Person() {
        this.Name = "";
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this.Name;
        },
        set: function (value) {
            this.Name = value.trim().toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person();
person.name = "Hello World";
console.log(person.name);
