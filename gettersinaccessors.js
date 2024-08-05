var Person = /** @class */ (function () {
    function Person(Name) {
        this.Name = Name;
    }
    Object.defineProperty(Person.prototype, "SName", {
        get: function () {
            return this.Name;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person("Manasa");
console.log(person);
console.log(person.Name);
